import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import NetInfo,{useNetInfo} from '@react-native-community/netinfo';
import {synchronize} from '@nozbe/watermelondb/sync';
import {database} from '../../databases';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import {Car as ModelCar} from '../../databases/model/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
} from './styles';
import { Alert } from 'react-native';

export function Home() {
    const [cars, setCars] = useState<ModelCar[]>([]);
    const [loading, setLoading] = useState(true);
    const netInfo = useNetInfo();
    const navigation = useNavigation();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car });
    }

    async function offLineSynchronize(){
        await synchronize({
            database,
            pullChange: async({lastPulledAt}) => {
                const response = await api
                .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

                const {changes, lastVersion} = response.data;
                return {changes, timestamp: latestVersion }

            },
            pushChanges: async ({changes}) => {
                const user = changes.users;
                await api.post('/users/sync', user);

            },
        });
    }

    useEffect(() => {
        let isMounted = true;
        async function fetchCars() {
            try {
                const carCollection = database.get<ModelCar>('cars');
                const cars = await carCollection.query().fetch();

                if(isMounted){
                    setCars(cars);
                }
            } catch (error) {
                console.log(error);
            } finally {
                if(isMounted){
                    setLoading(false);
            }
        }
    }
        fetchCars();
        return () => {
            isMounted = false
        };
    }, []);

    useEffect(() => {
    if(netInfo.isConnected === true){
        offLineSynchronize();
    }
    },[netInfo.isConnected])

    

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
                    {
                        !loading &&
                        <TotalCars>{cars.length} Carros</TotalCars>
                    }
                </HeaderContent>
            </Header>
            {loading ? <LoadAnimation /> :
                <CarList
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />
                    }
                />
            }
            
        </Container>
    )
}


