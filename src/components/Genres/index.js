import React from 'react';
import {View, Text} from 'react-native';

import {Container, Name} from './styles'

export default function Genres({data}) {
    return(
        <Container>
            <Name>{data.name}</Name>
        </Container>
    );
}