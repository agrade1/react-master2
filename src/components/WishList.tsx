import { useRecoilState } from "recoil";
import { visitListState, wishListState } from "../utils/atoms";
import { Btn, BtnDiv, Country, CountryList, Text } from "../styles/List.styles";

function WishList(){
    const [wishList, setWishList] = useRecoilState(wishListState);
    const [visitList, setVisitList] = useRecoilState(visitListState);

    const handleCheck = (country: string) => {
        setWishList(wishList.filter((c) => c !== country));
        const updatedVisit = [...visitList, country];
        setVisitList(updatedVisit);
    };

    const handleDelete = (country: string) => {
        setWishList(wishList.filter((c) => c !== country));
    };

    return(
        <CountryList>
            {wishList.map((country, id) => (
                <Country key={id}>
                    <Text>{country}</Text>
                    <BtnDiv>
                        <Btn onClick={() => handleCheck(country)}>✅</Btn>
                        <Btn onClick={() => handleDelete(country)}>❌</Btn>
                    </BtnDiv>
                </Country>
            ))}
        </CountryList>
    )
}
export default WishList;