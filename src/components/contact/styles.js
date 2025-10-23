import styled, { css } from 'styled-components'

export const ContactText = styled.p`
  margin: 0;
  font-size: 17px;
`

export const ContactTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 600;
`

export const SectionContact = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ContactForm = styled.form`
  margin-top: 30px;
`

export const ContactInputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ContactInput = styled.input`
  width: 31%;
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
`

export const ContactTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 108px;
  margin-top: 15px;
  padding: 15px;
  border: 1px solid rgba(41, 98, 182, 0.2);
`

export const ContactButton = styled.a`
  display: block;
  height: 50px;
  width: 100%;
  background-color: #0077e2;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  margin-top: 15px;
  text-transform: uppercase;
`

export const ContactMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ContactMainItem = styled.div`
  width: 19%;
`

export const ItemContact = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  line-height: 1.7;
  width: 24%;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const InfoContact = styled.div`
  width: calc(100% - 70px);
  padding-left: 5px;
  text-align: left;
`

export const ItemTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`

export const ItemInfo = styled.span`
  font-size: 15px;
`

export const ContainerContact = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const IconContact = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #0077e2;
  border-radius: 50%;
  line-height: 60px;
`
