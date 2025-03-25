import { useRecoilState } from "recoil";
import { likeListState, visitListState, wishListState } from "../utils/atoms";
import { Btn, BtnDiv, Country, CountryList, Text, Title } from "../styles/List.styles";

function VisitList(){
    const [visitList, setVisitList] = useRecoilState(visitListState);
    const [likeList, setLikeList] = useRecoilState(likeListState);
    const [wishList, setWishList] = useRecoilState(wishListState);

    const handleLike = (country: string) => {
    setVisitList(visitList.filter((c) => c !== country));
    setLikeList([...likeList, country]);
    };

    const handleBackToWish = (country: string) => {
    setVisitList(visitList.filter((c) => c !== country));
    setWishList([...wishList, country]);
    };


    return(
        <>
            <Title>내가 가본 나라들</Title>
            <CountryList>
                {visitList.map((country, id) => (
                    <Country key={id}>
                        <Text>{country}</Text>
                        <BtnDiv>
                            <Btn onClick={() => handleLike(country)}>❤️</Btn>
                            <Btn onClick={() => handleBackToWish(country)}>↩️</Btn>
                        </BtnDiv>
                    </Country>
                ))}
            </CountryList>
        </>
    )
}
export default VisitList;