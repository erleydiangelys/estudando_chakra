import React from 'react';

import { Grid, GridItem, Box } from '@chakra-ui/react';
import CardLoja from './../CardLoja/index';
import noticias from '../../Data/noticias-mock.json'

import { SwiperSlide } from 'swiper/react';
import SlideSwiper from './../SlideSwiper/SlideSwiper';
import HorizontalCard from './../Card/HorizontalCard';

const data = noticias.Noticias


function GridNoticias() {
  
  const settings = {
    spaceBetween: 5,
    slidesPerView: 1,
    navigation: data.length >= 1,
    draggable: data.length >= 1,
    loop: true,
    pagination: data.length >= 1 && { 
      clickable: true,
    },
  }




  return (
    <Box >
      <SlideSwiper settings={settings}>

        {data.map((not, index) => (
            <SwiperSlide key={index}>
                <HorizontalCard card={not} />
            </SwiperSlide>
        ))}

      </SlideSwiper> 
    </Box>
  );
}

export default GridNoticias;