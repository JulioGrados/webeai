import { useEffect, useRef, useState } from 'react'
import {
  VipContainer,
  VipTittle,
  VipText,
  VipButtons,
  VipButtonG,
  VipButtonF,
  VipButtonT,
  VipImgGif,
  VipImgPng
} from './styles'

const VipComp = () => {
  return (
    <VipContainer>
      <VipImgGif src='/static/img/vip.gif' />
      <VipTittle>Felicitaciones</VipTittle>
      <VipText>
        Gracias por confiar en nuestra oferta educativa, agradeceríamos puedas
        dejar una recomendación en los siguientes enlaces:
      </VipText>
      <VipButtons>
        <VipButtonG
          href='https://g.page/eainnovacion/review?rc'
          target='_blank'
        >
          Google Reviews
        </VipButtonG>
        <VipButtonF
          href='https://www.facebook.com/eainnovacion/reviews'
          target='_blank'
        >
          Facebook
        </VipButtonF>
        <VipButtonT
          href='https://es.trustpilot.com/evaluate/eai.edu.pe'
          target='_blank'
        >
          Trust Pilot
        </VipButtonT>
      </VipButtons>
    </VipContainer>
  )
}

export default VipComp
