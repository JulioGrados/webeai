import styled from 'styled-components'

import { IconComunicate } from './iconComunicate'

export const SectionBlue = styled.section`
  display: none;
  background-color: #0077e2;
  padding: 50px 0px;
  display: none;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export const ComunicateContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`

export const ComunicateMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ComunicateTitle = styled.h2`
  margin: 0;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const ComunicateText = styled.p`
  margin: 10px 0px 30px 0px;
  font-size: 20px;
  font-weight: 200;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const ComunicateBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 280px;
  height: 50px;
  line-height: 50px;
  background-color: #ffaf00;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`

export const ComunicateIcon = styled(IconComunicate)`
  display: block;
  margin-right: 10px;
`
