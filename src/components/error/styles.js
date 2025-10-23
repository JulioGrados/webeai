import styled from 'styled-components'

export const ErrorStyled = styled.div`
  width: 100vw;
  height: 100vh;
`

export const ErrorBody = styled.div`
  background-attachment: fixed;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
`

export const Error = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ErrorContent = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const ErrorContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

export const ErrorTitle = styled.h1`
  font-weight: 900;
  font-size: 100px;
  color: rgb(0, 119, 226);
  margin: 0 auto;
  text-align: center;
`

export const ErrorSubTitle = styled.h4`
  font-weight: 700;
  font-size: 30px;
  color: #eb0036;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`

export const ErrorText = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
`

export const ErrorBtn = styled.a`
  font-size: 16px;
  font-weight: 600;
  width: 250px;
  height: 50px;
  line-height: 50px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: rgb(0, 119, 226);
  display: block;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: rgb(0, 66, 125);
  }
`
