import styled, { css } from 'styled-components'

import { Input } from './input'
import { Textarea } from './textarea'

export const InputForm = styled.div`
  position: relative;
  ${props =>
    props.contact &&
    css`
      width: 30%;
    `}
`

export const InputFormPre = styled.span`
  position: absolute;
  font-size: 15px;
  bottom: 23px;
  left: 0;
`

export const InputFormCheck = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-left: 10px;
    font-size: 13px;
    color: #666;
    a {
      color: #0077e2;
    }
  }
`

export const FormTop = styled.form`
  width: ${props => (props.width === '100%' ? '100%' : '340px')};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${props =>
    props.width === '100%' ? '1px solid rgba(41, 98, 182, .1)' : 'none'};
  box-shadow: ${props =>
    props.width === '100%' ? '0px 2px 10px 0px rgba(41, 98, 182, .1)' : 'none'};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FormTopHeader = styled.div`
  background-color: #fff;
  color: #ff3969;
  text-transform: uppercase;
  padding: 20px 20px 0px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`

export const FormTopContent = styled.div`
  width: ${props => (props.width === '100%' ? '100%' : '340px')};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FormTopContentInput = styled(Input)`
  width: 100%;
  height: 41px;
  font-weight: 400;
  background: #fff;
  font-size: 15px;
  color: #010101;
  padding: 15px 0px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #ccc;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  ${props =>
    props.type === 'checkbox' &&
    css`
      width: auto;
      margin: 0;
      height: auto;
    `}
  ${props =>
    props.pre &&
    css`
      padding: 15px 0px 15px 50px;
    `}
    ::placeholder {
    font-weight: 300;
    color: #010101;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #0077e2;
  }
`

export const FormTopContentBtn = styled.button`
  cursor: pointer;
  border: 0;
  margin-top: 20px;
  background-color: #0077e2;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  :hover {
    background-color: #00427d;
  }
`

export const NotificationFormUp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(204, 204, 204, 0.5);
`

export const NotificationCourse = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 6;
  text-align: center;
`

export const NotificationHome = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: -130px;
  z-index: 6;
  text-align: center;
`

export const NotificationFormUpContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotificationFormUpIcon = styled.div`
  display: flex;
  align-items: center;
`

export const NotificationFormUpLine = styled.div`
  height: 75px;
  width: 4px;
  background-color: #2d5ddf;
`

export const NotificationFormUpCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #2d5ddf;
  margin-left: 10px;
  text-align: center;
  line-height: 35px;
  padding-top: 4px;
`

export const NotificationFormUpMenssage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-left: 15px;
`

export const ContactForm = styled.form`
  margin-top: 30px;
`

export const ContactInputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${props => props.claim && '15px'};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContactInput = styled(Input)`
  width: 100%;
  height: 50px;
  background: #fff;
  font-size: 15px;
  font-weight: 400;
  padding: 15px;
  border: 1px solid rgba(41, 98, 182, 0.2);
  font-family: 'Montserrat', sans-serif;
  ::placeholder {
    font-weight: 300;
    color: #010101;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }
  :focus {
    outline: none;
    border: 1px solid #0077e2;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ContactTextArea = styled(Textarea)`
  display: block;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  height: 108px;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid rgba(41, 98, 182, 0.2);
  font-family: 'Montserrat', sans-serif;
  ::placeholder {
    font-weight: 300;
    color: #010101;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }
  :focus {
    outline: none;
    border: 1px solid #0077e2;
  }
`

export const ContactButton = styled.button`
  display: block;
  background-color: #0077e2;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  margin-top: 15px;
  text-transform: uppercase;
  height: 50px;
  width: 100%;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  :hover {
    background-color: #0659a4;
  }
`

export const ContactContentForm = styled.div`
  margin-bottom: 100px;
`

export const NotificationContact = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
`

export const ClaimsSectionTitle = styled.h2`
  margin: 15px 0;
  font-size: 20px;
  font-weight: 500;
`