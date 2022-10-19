import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import CardLoja from './../CardLoja/index';
import Card from '../../Data/dogs-mock.json'

import { SwiperSlide } from 'swiper/react';
import SlideSwiper from './../SlideSwiper/SlideSwiper';
import HorizontalCard from './../Card/HorizontalCard';

const data = Card.Dogs[0]


function GridNoticias() {

  // const settings = {
  //   spaceBetween: 5,
  //   slidesPerView: 1,
  //   navigation: 1,
  //   draggable: 1,
  //   loop: 1,
  //   pagination: 1 && { 
  //     clickable: true,
  //   },
  // }
  



  return (
    <Grid >
        <HorizontalCard card={data}/>
    </Grid>
  );
}

export default GridNoticias;