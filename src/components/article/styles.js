import styled from 'styled-components'

export const Article = styled.article`
  margin-top: ${props => (props.setHomeRecruit ? '130px' : '90px')};
`

export const ArticleTitle = styled.h2`
  margin: 0 auto;
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  max-width: 800px;
  @media (max-width: 768px) {
    font-size: 32px;
    max-width: none;
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 28px;
  }
`

export const ArticleText = styled.p`
  max-width: 764px;
  text-align: center;
  font-size: 16px;
  margin: 10px auto 0px auto;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
