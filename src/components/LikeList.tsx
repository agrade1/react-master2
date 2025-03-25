import { useRecoilState } from "recoil";
import { likeListState, visitListState, wishListState } from "../utils/atoms";
import { Btn, BtnDiv, Country, CountryList, Text, Title } from "../styles/List.styles";

function LikeList(){
    const [likeList, setLikeList] = useRecoilState(likeListState);
    const [visitList, setVisitList] = useRecoilState(visitListState);

    const handleUnLike = (country: string) => {
    setLikeList(likeList.filter((c) => c !== country));
    setVisitList([...visitList, country]);
    };

    return(
        <>
            <Title>내가 좋아하는 나라들</Title>
            <CountryList>
                {likeList.map((country, id) => (
                    <Country key={id}>
                        <Text>{country}</Text>
                        <BtnDiv>
                            <Btn onClick={() => handleUnLike(country)}>❌</Btn>
                        </BtnDiv>
                    </Country>
                ))}
            </CountryList>
        </>
    )
}
export default LikeList;