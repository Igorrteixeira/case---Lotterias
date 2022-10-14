import styled from "styled-components"
import { MainBackground } from "../../components/MainBackground/MainBackground"
import { Sidebar } from "../../components/sidebar/Sidebar"
import {Container,Text} from "./styled"

export const HomePage = () =>{
    return(
        <Container>
            <Sidebar/>
            <MainBackground/>
            <Text>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Text>
        </Container>
    )
}