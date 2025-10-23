import styled from 'styled-components'

export const Teachers = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 100px;
`

export const Teacher = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const TeacherArticle = styled.article`
  margin-top: 50px;
  @media(max-width: 768px) {
    text-align: center;
  }
`

export const TeacherName = styled.h3`
  margin: 0px;
  font-size: 22px;
  font-weight: 700;
  color: #010101;
`

export const TeacherText = styled.p`
  margin: 0px auto;
  font-size: 16px;
  text-align: justify;
`

export const TeacherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const TeacherCountry = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 100;
  margin: 20px auto 5px 4px;
`

export const TeacherSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 300;
  color: #ffaf00;
  margin: 15px 0px;
  text-transform: uppercase;
`

export const TeacherItem = styled.li`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 230px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const TeacherItemContainer = styled.div`
  color: #fff;
  position: relative;
  overflow: hidden;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 190px;
    height: 190px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const TeacherItemHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  border-radius: 50%;
  background: rgba(41, 98, 182, 0.4);
  opacity: 0;
  transition-property: opacity;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

export const TeacherItemButton = styled.a`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 150px;
  height: 45px;
  line-height: 45px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  background: #0077e2;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 50px;
  :hover {
    transform: scale(1.03);
  }
`

export const TeacherItemImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 190px;
    height: 190px;
  }
`

export const TeacherItemName = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding-top: 15px;
  color: #010101;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: auto;
    margin-left: auto;
  }
`

export const TeacherItemJob = styled.span`
  font-size: 13px;
  font-weight: 100;
  color: #999999;
`

export const TeacherCourses = styled.div``

export const TeacherCoursesTitle = styled.h4`
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
`
