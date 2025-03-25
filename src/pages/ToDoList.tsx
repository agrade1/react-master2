
import styled from "styled-components";
import { Container } from "../styles/ToDoList.styles";
import Form from "../components/Form";
import WishList from "../components/WishList";
import VisitList from "../components/VisitList";
import LikeList from "../components/LikeList";


function ToDoList(){
    return (
        <Container>
            <Form />
            <WishList />
            <VisitList />
            <LikeList />
        </Container>
    );
}
export default ToDoList; 