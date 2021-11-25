import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import {Feather} from '@expo/vector-icons';
import { Input } from '../../components/Input';
import { KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {PasswordInput} from '../../components/PasswordInput';
import {useAuth} from '../../hooks/auth';

import {
 Container,
 Header,
 HeaderTop,
 HeaderTitle,
 LogoutButton,
 Photo,
 PhotoButton,
 PhotoContainer,
 Content,
 Options,
 Option,
 OptionTitle,
 Section,

} from './styles';

export function Profile(){
    const [option, setOption] = useState<'dataEdit' | 'passWordEdit'>('dataEdit');
    const theme = useTheme();
    const navigation = useNavigation();

function handleBack(){
    navigation.goBack();
}

function handleSignOut(){
}

function handleOptionChange(optionSelected: 'dataEdit' | 'passWordEdit'){
setOption(optionSelected);
}

 return (
    <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

 <Container>
<Header>
    <HeaderTop>
        <BackButton color={theme.colors.shape} 
        onPress={handleBack}
        />
        <HeaderTitle>Editar Perfil</HeaderTitle>
        <LogoutButton onPress = {handleSignOut}>
            <Feather 
            name="power"
             size={24}
            color={theme.colors.shape}
            />
        </LogoutButton>
    </HeaderTop>

    <PhotoContainer>
        <Photo source={{uri: 'https://github.com/joaovictorcamargo.png'}}/>
        <PhotoButton onPress={() => {}}>
            <Feather
            name="camera"
            size={24}
            color={theme.colors.shape}
            />
        </PhotoButton>
        </PhotoContainer>
</Header>

<Content style={{ marginBottom: useBottomTabBarHeight()}}>
    <Options>

        <Option active={option === 'dataEdit'}
        onPress={() => handleOptionChange('dataEdit')}
        >
            <OptionTitle active={option === 'dataEdit'}>
                Dados
                </OptionTitle>
        </Option>
        <Option active={option === 'passWordEdit'}
                onPress={() => handleOptionChange('passWordEdit')}

        >
            <OptionTitle active={option === 'passWordEdit'}>
                Trocar senha
            </OptionTitle>
        </Option>
    </Options>
{

option === 'dataEdit' ?

<Section >
<Input
iconName="user"
placeholder="Nome"
autoCorrect={false}
/>
<Input
iconName="mail"
editable={false}
/>
<Input
iconName="credit-card"
placeholder="CNH"
keyboardType="numeric" 

/>
</Section>
:
<Section >
<PasswordInput
iconName="lock"
placeholder="Senha atual"
/>
<PasswordInput
iconName="lock"
placeholder="Nova Senha"
/>
<PasswordInput
iconName="lock"
placeholder="Repitir Senha"

/>
</Section>

}

</Content>

 </Container>
 </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
 );
}