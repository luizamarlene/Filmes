import React from 'react';
import { View } from 'react-native';

import { BackButton, Name } from './styles';
import {Feather} from '@expo/vector-icons';
import {WebView} from 'react-native-webview';

export default function ModalLink({link,title,closeModal}) {
 return (
   <>
     <BackButton onPress={closeModal}>
       <Feather name='x' size={35} color='#fff'/>
       <Name numberOfLines={2}>{title}</Name>
     </BackButton>
     <WebView source={{uri:link}}/>
   </>
  );
}