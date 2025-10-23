import styled, { css } from 'styled-components'

export const Courses = styled.div`
  width: 100%;
  /* margin-top: 50px; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${props =>
    props.isTeacher &&
    css`
      justify-content: flex-start;
    `}
  ${props =>
    props.getHome &&
    css`
      @media (max-width: 768px) {
        font-size: 0px;
        white-space: nowrap;
        flex-wrap: nowrap;
        justify-content: initial;
        overflow-x: scroll;
      }
    `}
`

export const CourseBtnContent = styled.div`
  margin: 0 auto;
`

export const CoursesBtn = styled.div`
  display: block;
  margin: 0 auto;
  border: 2px solid #0077e2;
  background-color: #0077e2;
  color: #fff;
  width: 280px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`

export const CourseItemMain = styled.div`
  width: 262px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 4px 0 rgba(105, 106, 119, 0.1);
  flex-shrink: 0;
  ${props =>
    props.isTeacher &&
    css`
      margin-right: 15px;
    `}
  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    white-space: normal;
    ${props =>
      props.setHome &&
      css`
        margin-right: 20px;
      `}
  }
`

export const TitleFilter = styled.p`
  font-size: 15px;
  font-weight: 300;
`

export const FilterCourses = styled.div`
  @media (max-width: 768px) {
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d0d0d0;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 20px;
  }
`

export const ContainerFilter = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    max-width: 300px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    line-height: 35px;
    margin-top: 20px;
    :hover {
      line-height: 35px;
      border: 1.5px solid #0077e2;
    }
  }
`

export const CourseItemImg = styled.img`
  width: 100%;
  height: 136px;
  flex-shrink: 0;
  /* z-index: -1; */
`

export const CourseItemLink = styled.div`
  cursor: pointer;
  width: 100%;
  height: 136px;
  line-height: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 62px;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(24, 27, 50, 0.7);
  opacity: 0;
  transition-property: opacity;
  :hover {
    opacity: 1;
  }
`

export const CourseImgTransition = styled.div`
  color: #fff;
  overflow: hidden;
  height: 136px;
  flex-shrink: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    #000 url(${props => props.image && props.image}) no-repeat center;
  background-size: cover;
  line-height: 136px;
  cursor: pointer;
  :hover {
    flex-shrink: 0;
    overflow: hidden;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      #000 url(${props => props.image && props.image}) no-repeat center;
    background-size: cover;
    a {
      opacity: 1;
    }
  }
`

export const DetailsCourse = styled.a`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  display: block;
  text-align: center;
  opacity: 0;
`

export const CourseItemTeachers = styled.div`
  margin: 20px 0px;
`
export const CourseItemTeacher = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* position: absolute;
  top: 136px; */
  /* z-index: 1; */
`

export const CourseItemBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 15px;
`

export const CourseItemTeacherContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`

export const CourseItemTeacherImg = styled.img`
  width: ${props => (props.setDetail ? '50px' : '20px')};
  height: ${props => (props.setDetail ? '50px' : '20px')};
  border-radius: 50%;
`

export const CourseItemTeacherName = styled.span`
  display: block;
  color: #5a6671;
  font-size: 14px;
  margin-left: 5px;
`

export const CourseItemTeacherDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  width: calc(100% - 50px);
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

export const CourseItemTeacherNames = styled.h5`
  font-size: 17px;
  margin: 0;
  font-weight: 500;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const CourseItemTeacherText = styled.p`
  margin: 10px 0px 0px 0px;
  text-align: justify;
  font-size: 15px;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const CourseItemTitle = styled.h3`
  cursor: pointer;
  text-align: left;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  /* z-index: 1; */
`

export const CourseItemBtn = styled.a`
  width: 180px;
  font-size: 14px;
  border-radius: 50px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  background-color: #0077e2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #00427d;
  }
`

export const CourseItemBtnText = styled.span`
  display: block;
  margin-right: 5px;
`

export const NavCourse = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavCourseItem = styled.a`
  color: #5f606b;
  font-size: 14px;
  margin-left: 5px;
  font-weight: 400;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #0077e2;
  }
`

export const ArticleCourse = styled.article`
  margin: 0;
  width: calc(100% - 232px);
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ArticleCourseTitle = styled.h2`
  margin: 0 auto;
  font-size: 45px;
  font-weight: 800;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`

export const About = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const AboutItem = styled.li`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`

export const AboutItemCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #0077e2;
  text-align: center;
  line-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutItemTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0px 10px 0px;
`

export const AboutItemText = styled.p`
  margin: 0;
  text-align: center;
`

export const ContainerCourses = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
`

export const CourseDetail = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CourseHeader = styled.article`
  display: flex;
  flex-direction: column;
`

export const CourseBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const CourseHeaderTitle = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    margin-bottom: 10px;
  }
  @media (max-width: 435px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
`

export const CourseHeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0 15px 0;
  @media (max-width: 435px) {
    display: none;
  }
`

export const CourseHeaderTeachers = styled.div`
  display: flex;
  flex-direction: column;
`

export const CourseHeaderTeacher = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const CourseHeaderTeacherImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const CourseHeaderTeacherTitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 340px) {
    font-size: 10px;
  }
`

export const CourseHeaderTeacherNames = styled.span`
  display: block;
  margin-top: 3px;
  font-weight: 200;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 435px) {
    font-size: 9px;
  }
`

export const CourseHeaderPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const CourseHeaderPriceDiscount = styled.div`
  display: flex;
  align-items: flex-end;
`

export const CourseHeaderPriceDiscountNumber = styled.span`
  font-size: 14px;
  display: inline-block;
  color: #747678;
  font-weight: 500;
  text-decoration: line-through;
  line-height: initial;
`

export const CourseHeaderPriceDiscountPorcentage = styled.span`
  font-size: 13px;
  display: inline-block;
  font-weight: 500;
  margin-left: 10px;
  line-height: initial;
`

export const CourseHeaderPrice = styled.p`
  color: ${props => (props.price == 0 ? '#2d5ddf' : '#2d5ddf')};
  font-size: 32px;
  font-weight: 700;
  text-align: right;
  margin: 0;
  line-height: initial;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 435px) {
    font-size: 18px;
  }
`

export const CourseHeaderPriceSymbol = styled.span`
  font-size: 25px;
  margin-left: 5px;
`

export const CourseHeaderImg = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 435px) {
    display: none;
  }
`

export const CourseDetailLeft = styled.div`
  width: calc(100% - 300px);
  padding-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0px;
  }
`

export const CoursesDetailRight = styled.div`
  width: 300px;
  position: sticky;
  top: 75px;
  left: 0;
  right: 0;
  height: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`

export const CourseFormNone = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin: 35px 0 0 0;
    display: block;
  }
`

export const CourseDetailInfo = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CourseDetailContent = styled.article`
  max-width: 821px;
  margin-top: 30px;
`

export const CourseInformation = styled.div`
  width: calc(100% - 300px);
  height: 530px;
`

export const CourseDetailTitle = styled.div`
  text-transform: uppercase;
  margin: 0 auto 30px auto;
  font-size: 30px;
  font-weight: 900;
  color: #010101;
  text-align: left;
  max-width: none;
`

export const CourseDetailDescription = styled.div`
  display: inline-block;
`

export const CourseDetailText = styled.p`
  display: block;
  font-size: 14px;
  font-weight: bold;
`

export const CourseDetailPrice = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #ff3969;
`

export const CourseDetailImage = styled.img`
  width: 100%;
  height: 50%;
`

export const CourseDetailTeacher = styled.p`
  display: flex;
  width: 815px;
  line-height: 0.5;
  justify-content: space-between;
`

export const SectionCourse = styled.div`
  margin-top: ${props => (props.isThanks ? '20px' : '40px')};
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${props => (props.isThanks ? '24px' : '30px')};
  font-weight: 600;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`

export const ListFeatures = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${props =>
    props.isThanks &&
    css`
      margin-top: 10px;
      margin-left: 20px;
    `}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FeaturesItem = styled.li`
  display: flex;
  align-items: center;
  width: ${props => (props.isThanks ? '100%' : '49%')};
  margin-bottom: ${props => (props.isThanks ? '5px' : '0px')};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FeaturesText = styled.p`
  font-size: 15px;
  width: calc(100% - 14px);
  padding: ${props => (props.isThanks ? '0 0 0 8px' : '0 0 8px 8px')};
  margin: 0;
  text-align: ${props => (props.center ? 'center' : 'left')};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SectionText = styled.p`
  font-size: 15px;
  margin: 10px 0px 0px 0px;
  text-align: justify;
`

export const TextAboutCourse = styled.p`
  height: 55px;
  overflow-y: hidden;
  position: relative;
  transition: max-height 0.5s ease-in 0s;
  font-size: 15px;
  margin: 10px 0px 0px 0px;
  text-align: justify;
  ${props =>
    props.showMore &&
    css`
      height: 100%;
    `}
`

export const TextAboutMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const TextAboutMoreOption = styled.span`
  display: block;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #0077e2;
`

export const LinkPayment = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #0077e2;
`

export const PaymentList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  ${props =>
    props.isThanks &&
    css`
      margin-left: 20px;
    `}
`

export const PaymentItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const PaymentItemImg = styled.img`
  margin-right: 5px;
  height: 25px;
`

export const PaymentItemText = styled.span`
  display: block;
  font-size: 15px;
`

export const SearchCourse = styled.span`
  font-size: 15px;
  font-weight: 200;
`

export const ContainerSearch = styled.div`
  margin: 30px;
  text-align: center;
  border: 1px solid red;
  padding: 10px;
`

export const TitleModule = styled.h3`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.7;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding-right: 10px;
  @media (max-width: 435px) {
    font-size: 15px;
  }
`

export const ThemesCourse = styled.div`
  width: 80%;
  padding: 15px;
  margin: 10px 0px 20px 25px;
  border: 1px dotted #0077e2;
`

export const LinkVideo = styled.span`
  font-size: 14px;
  font-weight: 200;
  display: block;
`

export const ListTemary = styled.ul``

export const ListTemaryItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #0077e2;
  padding: 20px 15px;
  line-height: 1.7;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    border: 1.5px solid #0077e2;
  }
`

export const ListTemaryItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ListTemaryItemBody = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`

export const ListTemarySecondary = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #0077e2;
  padding: 20px 15px;
  line-height: 1.7;
  margin-bottom: 20px;
`

export const ListTemaryPrimary = styled(ListTemarySecondary)`
  display: block;
`

export const ListTemaryPrimaryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListClass = styled.div`
  padding: 15px 0 0 0;
`

export const TitleClass = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  color: #010101;
  @media (max-width: 435px) {
    font-size: 12px;
  }
`

export const ContainerUndefind = styled.div`
  width: 100%;
  text-align: center;
  border: 1px solid red;
  padding: 15px;
`

export const UndefindCourse = styled.span`
  font-size: 15px;
  font-weight: 200;
`

export const CategoriesTransparent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`

export const ThanksTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 10px 0;
`

export const ThanksBtn = styled.a`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 45px;
  line-height: 45px;
  background-color: #0077e2;
  text-align: center;
  font-weight: 500;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`
