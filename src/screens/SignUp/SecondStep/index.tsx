import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import {Bullet} from '../../../components/Bullet';
import {PasswordInput} from '../../../components/PasswordInput';
import {Button} from '../../../components/Button';
import {Confirmation} from '../../Confirmation';

import { KeyboardAvoidingView,
TouchableWithoutFeedback,
Keyboard,
Alert,
} from 'react-native';

interface Params {
    user: {
        name: string;
         email: string;
         driverLicense: string;
        
    }
}

import {
 Container,
 Header,
 Steps,
 Title,
 Subtitle,
 Form,
 FormTitle,
} from './styles';

export function SecondStep(){
    const [password,setPassword] = useState('');   
    const [passwordConfirm,setPasswordConfirm] = useState('');   


const navigation = useNavigation();
const route = useRoute();
const theme = useTheme();

const {user} = route.params as Params;

    function handleBack() {
        navigation.goBack();
    }

    function handleRegister(){
        if(!password || !passwordConfirm){
            return Alert.alert('Informe a senha e a confirmação');
        }
        if(password != passwordConfirm){
            return Alert.alert('As senhas não são iguais');
        }

navigation.navigate('Confirmation',{
    nextScreenRoute: 'SignIn',
    title: 'Conta Criada',
    message: `Agora é só fazer login\ne aproveitar!`
} )

    }

 return (
    <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
 <Container>
<Header>
    <BackButton onPress={handleBack} color={theme.colors.shape}/>

<Steps>
    <Bullet active/>
    <Bullet />
</Steps>

</Header>

<Title>Crie sua{'\n'} conta</Title>

<Subtitle>
    Faça seu cadastro de{'\n'} forma rápida e fácil 
</Subtitle>

<Form>

<FormTitle>2. Senha</FormTitle>
<PasswordInput
iconName="lock"
placeholder="Senha"
onChangeText={setPassword}
value={password}
/>

<PasswordInput
iconName="lock"
placeholder="Repetir Senha"
onChangeText={setPasswordConfirm}
value={passwordConfirm}
/>

</Form>

<Button
color={theme.colors.success}
title="Cadastrar"
onPress={handleRegister}

/>

 </Container>
 </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
 );
}