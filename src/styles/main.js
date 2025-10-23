import styled from 'styled-components'

export const General = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  background-color: #fff;
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const ContainerMedium = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const Section = styled.section`
  margin-top: 70px;
  margin-bottom: 30px;
`