import React, {useState} from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import * as Yup from 'yup';
import theme from '../../styles/theme';
import {useAuth} from '../../hooks/auth';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {PasswordInput} from '../../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';


import {
 Container,
 Header,
 Title,
 Subtitle,
 Footer,
 Form,
 Space,
} from './styles';

export function SignIn(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigation();
    const {signIn} = useAuth();

async function handleSignIn(){
    try{
        const schema = Yup.object().shape({
            email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
            password: Yup.string()
            .required('A senha é obrigatória')
        });
        await schema.validate({email, password});
       

     signIn({
     email,
     password
     });

        }catch(error){
if(error instanceof Yup.ValidationError){
 Alert.alert('Opa', error.message);
}else {
     Alert.alert('Erro na autenticação', 
     'Ocorreu um erro ao fazer login, verifique as credênciais')
}
        }
        
    }

    function handleNewAccount(){
        navigation.navigate('FirstStep');

    }


 return (
     <KeyboardAvoidingView behavior="position" enabled>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
 <Container>
     <StatusBar
     barStyle="dark-content"
     backgroundColor="transparent"
     translucent
     />
<Header>

<Title>Estamos{'\n'} quase lá.</Title>
<Subtitle>Faça seu login para começar{'\n'} 
uma experiência incrível.
</Subtitle>
</Header>

<Form>
<Input
iconName="mail"
placeholder="E-mail"
keyboardType="email-address"
autoCorrect={false}
autoCapitalize="none"
onChangeText={setEmail}
value={email}
/>

<PasswordInput
iconName="lock"
placeholder="Senha"
onChangeText={setPassword}
value={password}
/>

</Form>


<Footer>
    <Button
    title="Login"
    onPress={handleSignIn}
    enabled={true}
    loading={false}
    />
</Footer>

<Footer>
    <Button
    title="Criar conta gratuita"
    light
    color={theme.colors.background_secondary}
    onPress={handleNewAccount}
    enabled={true}
    loading={false}
    />
</Footer>


 </Container>
 </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
 );
}