import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer,
} from './styles';


export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={['https://th.bing.com/th/id/R.6a6830d5127fb044c7b190dc77558fd0?rik=iulKMPb4nTEbzw&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f06%2fPNGPIX-COM-Black-Porsche-Panamera-Car-PNG-Image.png&ehk=3MoSQiVKpNOK%2fSV83KwAhITMxp%2fAJmEzcISHO0FSbTY%3d&risl=&pid=ImgRaw&r=0']} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>
                            <Name>

                            </Name>
                        </Brand>
                    </Description>
                    <Rent>
                        <Period>
                            <Price>

                            </Price>
                        </Period>
                    </Rent>
                </Details>
                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasoline" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 people" icon={peopleSvg} />
                </Accessories>
                <About>
                    detalhes e novidades. Somente os olhares mais atentos conseguiram reparar as
                    novidades estéticas do modelo em 2020, enquanto que na linha 2021 elas não apareceram.
                    Tempo estimado de leitura: 12 mins

                </About>

            </Content>
            <Footer>
                <Button title="Comfirmar" onPress={ } />
            </Footer>
        </Container>
    );
}