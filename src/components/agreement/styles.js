import styled, { css } from 'styled-components'

export const Agreements = styled.ul`
  margin-bottom: 120px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
  ${props =>
    props.setHome &&
    css`
      @media (max-width: 768px) {
        overflow: hidden;
        overflow-x: scroll;
        font-size: 0px;
        white-space: nowrap;
        flex-wrap: nowrap;
        justify-content: initial;
        margin-bottom: 20px;
      }
    `}
`

export const AgreementItemName = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

export const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`
export const AgreementText = styled.p`
  max-width: 764px;
  text-align: justify;
  font-size: 20px;
  margin: 10px auto 0px auto;
`

export const AgreementItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  flex-shrink: 0;
  border: ${props => (props.setHome ? 'none' : '1px solid #f3f3f3')};
  box-shadow: ${props =>
    props.setHome ? 'none' : '0px 2px 4px 0 rgba(105, 106, 119, 0.1)'};
  padding: ${props => (props.setHome ? '0' : '25px 0')};
  background-color: ${props => (props.setHome ? 'initial' : '#fff')};
  ${props =>
    props.setHome &&
    css`
      @media (max-width: 768px) {
        margin-right: auto;
        margin-left: auto;
        white-space: normal;
        width: 250px;
        padding-right: 20px;
        margin-bottom: 30px;
      }
    `} /* :hover {
    text-decoration: underline;
    cursor: pointer;
  } */
`

export const AgreementItemContentImg = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AgreementItemImg = styled.img`
  ${props =>
    props.full &&
    css`
      /* height: 120px; */
    `}
  ${props =>
    props.align &&
    css`
      /* height: 140px; */
      margin-top: 50px;
      margin-bottom: 50px;
    `}
`

export const AgreementItemTitle = styled.a`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  width: 100%;
  margin: 20px 0px 20px 0px;
  text-transform: uppercase;
  color: #010101;
  cursor: pointer;
  ${props =>
    props.full &&
    css`
      padding: 8px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: #0077e2;
      width: 100%;
      text-transform: unset;
    `}
`

export const AgreementItemText = styled.p`
  font-size: 14px;
  margin: 0px;
  padding: 0 25px;
  text-align: center;
  width: 100%;
  height: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const AgreementItemButton = styled.a`
  width: 210px;
  border: 1px solid #0077e2;
  border-radius: 50px;
  height: 45px;
  line-height: 45px;
  color: #0077e2;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  :hover {
    background-color: #0077e2;
    color: #fff;
  }
`

export const Undefind = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid red;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const UndefindText = styled.p`
  font-size: 15px;
  font-weight: 200;
`
