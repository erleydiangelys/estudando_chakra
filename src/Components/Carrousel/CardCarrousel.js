import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SlideSwiper from './../SlideSwiper/SlideSwiper';
import VerticalCard from './../Card/VerticalCard';
import { Center } from '@chakra-ui/react';


function CardCarrousel({card, qtdSlide}) {
  if(card.length === 1) {
    return (
      <Center>
        <VerticalCard card={card[0]} />
      </Center>
    )
    }

  const settings = {
    spaceBetween: 5,
    slidesPerView: card.length < qtdSlide ? card.length : qtdSlide,
    navigation: card.length >= 3,
    draggable: card.length >= 3,
    loop: card.length >= 3,
    pagination: card.length >= 3 && { 
      clickable: true,
    },
  }

  return (
    <SlideSwiper settings={settings}>
        {card.map((card, index) => (
            <SwiperSlide key={index}>
                <VerticalCard card={card}/>
            </SwiperSlide>
        ))}
    </SlideSwiper>
  )
}

export default CardCarrousel;