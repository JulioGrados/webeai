import styled, { css } from 'styled-components'

export const Categories = styled.article`
  width: 240px;
  margin-right: 20px;
  background-color: #f1f1f1;
  height: auto;
  padding: 15px;
  @media (max-width: 768px) {
    display: none;
    ${props =>
      props.setCategories &&
      css`
        display: block;
        width: 46%;
        z-index: 1;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      `}
  }
`

export const CategoriesTitle = styled.h5`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #010101;
  margin: 0;
`

export const CategoriesButton = styled.a`
  display: inline-block;
  width: 100%;
  text-align: center;
  border-radius: 50px;
  margin-top: 50px;
  padding: 10px 30px 10px 30px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  background-color: #ffaf00;
`

export const CategoriesList = styled.ul`
  width: 100%;
  padding: 15px 0px 0px 0px;
`

export const CategoriesItem = styled.li`
  width: 100%;
  padding: 10px 15px 10px 20px;
  color: #010101;
  font-size: 14px;
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: #bed2f1;
      font-weight: bold;
    `}
  ${props =>
    props.setCategories &&
    css`
      :hover {
        background-color: #bed2f1;
      }
    `}
`

export const CategoriesListSection = styled.li`
  border-top: 1px solid #ccc;
  padding: 10px 0;
`

export const CategoriesListSectionName = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`

export const CategoriesListSectionOption = styled.a`
  display: block;
  padding: 6px 5px;
  font-size: 13px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 119, 226, 0.3);
    color: rgba(0, 119, 226, 1);
    font-weight: 300;
  }
`
