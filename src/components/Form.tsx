import { FormDiv, Title, Input, Button, ErrorMsg } from "../styles/Form.styles";
import { useForm } from "react-hook-form";
import { wishListState } from "../utils/atoms";
import { useRecoilState } from "recoil";

type FormData = {
    Country: string;
};

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [wishList, setWishList] = useRecoilState(wishListState);

    const onSubmit = (data: FormData) => {
        const input = data.Country.trim();
        const updatedList = [...wishList, input];
        setWishList(updatedList);
        localStorage.setItem("country", JSON.stringify(updatedList));
    };


    return (
        <>
            <Title>내가 가고싶은 나라들</Title>
            <FormDiv onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("Country", {
                    required: "나라 이름을 입력하세요!",
                    pattern: {
                        value: /^[가-힣]+$/,
                        message: "한글만 입력가능합니다."
                    },
                    validate: (value) => {
                        const stored = localStorage.getItem("country");
                        const parsed = stored ? JSON.parse(stored) : [];
                        return !parsed.includes(value.trim()) || "이미 등록된 나라입니다!";
                    }
                })} placeholder="나라 이름 입력" />
                <Button type="submit">추가!</Button>
            </FormDiv>
            {errors.Country && <ErrorMsg>{errors.Country.message}</ErrorMsg>}
            
        </>
    );
}

export default Form;
