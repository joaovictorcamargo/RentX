import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg';
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DataInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,


} from './styles';



export function Scheduling() {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <BackButton onPress={() => { }}
                    color={theme.colors.shape}
                />

                <Title>Escolha a{'\n'}
                    data e encontre{'\n'}
                    um carro.
                </Title>

                <RentalPeriod>
                    <DataInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DataInfo>

                    <ArrowSvg />

                    <DataInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>26/06/2002</DateValue>
                    </DataInfo>
                </RentalPeriod>

            </Header>

            <Content>

            </Content>

            <Footer>
                <Button title="Confirmar"
                    onPress={() => { }}
                />
            </Footer>
        </Container>
    );
}