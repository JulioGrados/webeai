import styled from 'styled-components'

export const VipContainer = styled.div`
  margin: 30px 0 70px 0;
`

export const VipImgPng = styled.img`
  margin: 0 auto;
  display: ${props => (props.state ? 'block' : 'none')};
  @media (max-width: 425px) {
    width: 100%;
  }
`

export const VipImgGif = styled.img`
  margin: 0 auto;
  display: block;
  @media (max-width: 425px) {
    width: 100%;
  }
`

export const VipTittle = styled.h1`
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const VipText = styled.p`
  font-size: 18px;
  font-weight: 300;
  max-width: 645px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const VipButtons = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const VipButton = styled.a`
  width: 30%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #010101;
  font-size: 17px;
  font-weight: 400;
  border-radius: 50px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const VipButtonG = styled(VipButton)`
  border: 1px solid #d0021b;
  color: #d0021b;
  :hover {
    background-color: #d0021b;
    color: #fff;
  }
`

export const VipButtonT = styled(VipButton)`
  border: 1px solid #417505;
  color: #417505;
  :hover {
    background-color: #417505;
    color: #fff;
  }
`

export const VipButtonF = styled(VipButton)`
  border: 1px solid #113feb;
  color: #113feb;
  :hover {
    background-color: #113feb;
    color: #fff;
  }
`
