import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car'

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
} from './styles';

export function Home() {
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://th.bing.com/th/id/R.6a6830d5127fb044c7b190dc77558fd0?rik=iulKMPb4nTEbzw&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f06%2fPNGPIX-COM-Black-Porsche-Panamera-Car-PNG-Image.png&ehk=3MoSQiVKpNOK%2fSV83KwAhITMxp%2fAJmEzcISHO0FSbTY%3d&risl=&pid=ImgRaw&r=0',

    }


    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            <CarList
                data={[1, 2, 3, 4, 5, 6, 7]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} />}

            />
        </Container>
    );
}
