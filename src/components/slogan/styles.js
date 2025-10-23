import styled from 'styled-components'

export const SloganMain = styled.div`
  margin-top: 90px;
  padding: 50px 0px;
  border-top: 1px solid rgba(204, 204, 204, 0.5);
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
`

export const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const SloganLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 930px) {
    align-items: center;
  }
`

export const SloganRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const SloganText = styled.p`
  margin: 0;
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;
  @media (max-width: 930px) {
    text-align: center;
  }
  @media (max-width: 425px) {
    font-size: 28px;
  }
`

export const SloganTextBlue = styled(SloganText)`
  color: #0077e2;
`

export const SloganData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 40px;
  @media (max-width: 930px) {
    margin-left: 0px;
  }
`

export const SloganDataNumber = styled.h1`
  font-size: 70px;
  font-weight: 800;
  margin: 0;
  @media (max-width: 930px) {
    font-size: 50px;
  }
  @media (max-width: 425px) {
    font-size: 40px;
  }
`

export const SloganDataText = styled.h4`
  font-size: 17px;
  font-weight: 900;
  color: #5a6671;
  margin: 0px;
  text-transform: uppercase;
`
