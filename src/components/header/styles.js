import styled, { css } from 'styled-components'

import { IconVirtual } from './iconVirtual'
import { IconWhatsapp } from './iconWhatsapp'
import { IconSearch } from './iconSearch'

export const HeaderMainIconVirtual = styled(IconVirtual)`
  width: 15px;
  height: 15px;
`

export const HeaderMainIconWhatsapp = styled(IconWhatsapp)`
  width: 17px;
  height: 17px;
`

export const HeaderMainIconSearch = styled(IconSearch)`
  width: 19px;
  height: 19px;
`

export const HeaderItemSearch = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
`

export const HeaderCourseMain = styled.header`
  display: ${props => (props.showFixed ? 'block' : 'none')};
  height: 70px;
  width: 100%;
  background-color: #fff;
  position: relative;
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  border-bottom: 1px solid rgba(105, 106, 119, 0.1);
`

export const HeaderMain = styled.header`
  height: 70px;
  width: 100%;
  background: ${props => (props.transparent ? 'transparent' : '#FFF')};
  position: relative;
  z-index: 3;
  ${props =>
    props.fixed &&
    css`
      position: fixed;
      width: 100%;
      height: 70px;
      top: 0;
      border-bottom: 1px solid rgba(105, 106, 119, 0.1);
    `}
  box-shadow: ${props =>
    props.transparent ? 'none' : '0px 2px 4px 0 rgba(105,106,119,0.1)'};
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const HeaderContentCenter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const HeaderLeft = styled.div`
  height: 70px;
  width: ${props => (props.course ? 'calc(100% - 150px)' : 'auto')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: ${props => (props.course ? 'calc(100% - 80px)' : 'auto')};
  }
`

export const HeaderCenter = styled.div`
  height: 70px;
  width: ${props => (props.course ? 'calc(100% - 150px)' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: ${props => (props.course ? 'calc(100% - 80px)' : 'auto')};
  }
`

export const HeaderRight = styled.div`
  height: 70px;
  width: ${props => (props.course ? '150px' : 'auto')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    width: ${props => (props.course ? '80px' : 'auto')};;
  }
`

export const HeaderCourseName = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const HeaderCoursePriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const HeaderCoursePriceDiscount = styled.div`
  display: flex;
  align-items: flex-end;
`

export const HeaderCoursePriceDiscountNumber = styled.span`
  font-size: 14px;
  display: inline-block;
  color: #747678;
  font-weight: 500;
  text-decoration: line-through;
  line-height: initial;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const HeaderCoursePriceDiscountPorcentage = styled.span`
  font-size: 13px;
  display: inline-block;
  font-weight: 500;
  margin-left: 10px;
  line-height: initial;
  @media (max-width: 768px) {
    font-size: 11px;
    margin-left: 3px;
  }
`

export const HeaderCoursePrice = styled.p`
  margin: 0;
  text-align: right;
  color: ${props => (props.price == 0 ? '#2d5ddf' : '#2d5ddf')};
  font-weight: 700;
  font-size: 25px;
  line-height: initial;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const HeaderCoursePriceSimbol = styled.span`
  margin-left: 5px;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
    margin-left: 2px;
  }
`

export const HeaderLogo = styled.img`
  width: 115px;
  height: 44px;
  cursor: pointer;
  flex-shrink: 0;
`

export const HeaderItem = styled.div`
  margin-left: 30px;
  color: ${props => (props.transparent ? '#FFF' : '#010101')};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const Headersearch = styled.div`
  font-size: 14px;
  cursor: pointer;
`

export const HeaderItemMenu = styled(HeaderItem)`
  position: relative;
  :hover > ul {
    display: block;
  }
  :active > ul {
    display: block;
  }
  :focus > ul {
    display: block;
  }
`

export const HeaderItemMenuContet = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderMenu = styled.ul`
  display: none;
  background-color: #fff;
  position: absolute;
  left: -25px;
  right: 0;
  top: 100%;
  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  background: #fff;
  text-align: center;
  padding: 10px 0;
  width: 150px;
  font-size: 13px;
  ::after {
    position: absolute;
    /* z-index: 1001; */
    content: '';
    background: #fff;
    width: 10px;
    height: 10px;
    bottom: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.05);
    -webkit-transform: translate(-50%, 50%) rotate(45deg);
    -ms-transform: translate(-50%, 50%) rotate(45deg);
    transform: translate(-50%, 50%) rotate(45deg);
    left: 50%;
    border-radius: 3px 0 0 0;
  }
`

export const HeaderScreen = styled.div`
  position: relative;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const HeaderScreenIcon = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  cursor: pointer;
`

export const HeaderScreenMenu = styled.div`
  display: ${props => (props.menu ? 'block' : 'none')};
  /* transition: transform 0.35s ease 0s;
  transform: translate(0%); */
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  outline: 0;
`

export const HeaderScreenContent = styled.div`
  width: 100%;
  padding: 50px;
  position: relative;
`

export const HeaderScreenMenuIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`

export const HeaderScreenMenuNav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
`

export const HeaderScreenMenuImg = styled.img`
  width: 136px;
`

export const HeaderScreenMenuList = styled.ul`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  z-index: 3;
`
export const HeaderScreenMenuItem = styled.li`
  padding: 15px 15px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  :hover {
    font-weight: 400;
    background-color: rgba(0, 119, 226, 0.2);
  }
`

export const HeaderMenuItem = styled.li`
  float: none;
  display: block;
  padding: 10px;
  color: #010101;
  font-weight: 200;
  :hover {
    font-weight: 400;
    background-color: rgba(0, 119, 226, 0.2);
  }
`

export const HeaderItemButton = styled(HeaderItem)`
  background-color: ${props => (props.transparent ? '#fff' : '#0077e2')};
  border-radius: 50px;
  display: flex;
  align-items: center;
  height: 45px;
  line-height: 45px;
  padding: 0px 25px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const HeaderItemLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const HeaderItemText = styled.span`
  display: block;
  margin-left: ${props => props.left && '15px'};
  margin-right: ${props => props.right && '15px'};
  color: ${props => (props.transparent ? '#FFF' : '#010101')};
`

export const HeaderTop = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTopLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderTopCenter = styled.img`
  width: 138px;
`

export const HeaderTopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const HeaderTopNumber = styled.p`
  margin: 0px 0px 0px 15px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.transparent ? '#FFF' : '#010101')};
`

export const SearchContent = styled.div`
  display: ${props => (props.visible ? 'none' : 'block')};
  position: absolute;
  left: 0;
  right: 0;
  top: 74px;
  padding: 0 30px;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => (props.transparent ? '#010101' : '#010101')};
  border: 1px solid ${props => (props.transparent ? '#FFF' : '#ccc')};
  font-size: 13px;
  font-weight: 400;
  padding: 10px 20px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background-color: ${props => (props.transparent ? '#f6f7f9' : '#f6f7f9')};
  ::placeholder {
    font-weight: 200;
    color: ${props => (props.transparent ? '#010101' : '#010101')};
    font-size: 13px;
    padding: 15px 0px;
    font-family: 'Montserrat', sans-serif;
  }
  :focus {
    outline: none;
    border: 1px solid ${props => (props.transparent ? '#FFF' : '#ccc')};
  }
`

export const HeaderBottom = styled.div`
  background-color: rgba(0, 119, 226, 1);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBottomItem = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bolder;
  color: #fff;
  padding: 0px 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`
export const HeaderBottomItemCourses = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`

export const HeaderBottomItemVirtual = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bolder;
  color: #fff;
  margin-left: 10px;
`

export const ResponsiveButtons = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    width: 100%;
    z-index: 1;
  }
`

export const ResponsiveItemCall = styled.div`
  background-color: #0077e2;
  height: 45px;
  line-height: 45px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  display: block;
  margin-left: 8px;
  color: #fff;
  @media (max-width: 460px) {
    font-size: 11px;
    font-weight: 500;
  }
`

export const ResponsiveItemComunicate = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 3px;
  z-index: 2;
  margin-left: 8px;
  color: #fff;
  @media (max-width: 460px) {
    font-size: 11px;
    font-weight: 500;
  }
`

export const ResponsiveComunicate = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  height: 45px;
  line-height: 45px;
  width: 50%;
  z-index: 2;
`
