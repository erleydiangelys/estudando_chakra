import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import CardLoja from './../CardLoja/index';
import produtos from '../../Data/cardLoja-mock.json'

import { SwiperSlide } from 'swiper/react';
import SlideSwiper from './../SlideSwiper/SlideSwiper';

const data = produtos.Produtos


function GridLoja() {

  const settings = {
    spaceBetween: 5,
    slidesPerView: 1,
    navigation: 1,
    draggable: 1,
    loop: 1,
    pagination: 1 && { 
      clickable: true,
    },
  }
  



  return (
    <Grid templateColumns={{sm: 'repeat(2, 1fr)', xsm:'repeat(3, 1fr)', md: 'repeat(6, 1fr)', }}>
        {data.map((card, index) => (
          <CardLoja key={index} data={card} />
        ))}
    </Grid>
  );
}

export default GridLoja;