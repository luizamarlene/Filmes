import React from 'react' ;
import {Container,SearchButton,SearchContainer,Input} from './styles';
import  Header  from '../../components/Header';
import {Feather} from '@expo/vector-icons';


export default function Home() {
    return(
        <Container>
            <Header title='React Primer'/>
            <SearchContainer>
                <Input placeholder="Ex Vingadores" placeholderTextColor='#ddd'/>
                <SearchButton>
                    <Feather name='search' size={30}/>
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}