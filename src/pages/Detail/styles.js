import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#191a30;
   
`;
export const Header = styled.View`
    z-index:99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;
`;
export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25,26,48,0.8);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.Image`
    width: 100% ;
    height: 350px;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius:70px;
`;

export const ButtonLink = styled.TouchableOpacity`
    z-index: 99;
    position: absolute;
    top: 300px;
    left: 80%;
    width: 63px;
    height: 63px;
    background-color: #E72f49;
    border-radius: 35px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color:#fff;
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 10px;

`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
`;

export const Rate = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color:#fff;
`;

export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: 35px;
    `;

export const Description = styled.Text`
    padding-left: 14px;
    padding-right:14px;
    padding-bottom: 30px;
    color:#fff;
    line-height: 20px;
`;