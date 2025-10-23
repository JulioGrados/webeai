import styled, { css } from 'styled-components'

export const Testimonials = styled.ul`
  margin-top: ${props => (props.setHome ? '0' : '50px')};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
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

export const TestimonialsHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
`

export const TestimonialItem = styled.li`
  max-width: 300px;
  margin-top: 50px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 4px 0 rgba(105, 106, 119, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 280px;
    margin-right: auto;
    margin-left: auto;
  }
  ${props =>
    props.setHome &&
    css`
      @media (max-width: 768px) {
        white-space: normal;
        margin-right: 20px;
        margin-bottom: 30px;
      }
    `}
`

export const TestimonialItemImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0077e2;
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  line-height: 60px;
  ::before {
    content: '${props => (props.isPhoto ? '-' : props.setContent)}';
  }
`

export const TestimonialItemName = styled.h4`
  width: 200px;
  font-size: 17px;
  font-weight: 700;
  margin: 20px 0px 4px 0px;
  text-align: center;
`

export const TestimonialItemDate = styled.span`
  display: block;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
`

export const TestimonialItemStars = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TestimonialItemText = styled.p`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.8;
  text-align: center;
  font-size: 14px;
`

export const TestimonialItemCourse = styled.a`
  cursor: pointer;
  color: #0077e2;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  :hover {
    text-decoration: underline;
  }
`

export const TestimonialsBtnContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const TestimonialsBtn = styled.div`
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

export const CompanyContent = styled.div`
  margin-top: 40px;
`

export const CompanyListTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  color: #5a6671;
  text-align: center;
`

export const CompanyList = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 501px) {
    flex-direction: column;
    width: auto;
  }
`

export const CompanyItem = styled.li`
  width: 30%;
  text-align: center;
  flex-shrink: 0;
  @media (max-width: 768px) {
    white-space: normal;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 501px) {
    width: auto;
  }
`

export const CompanyItemImg = styled.img`
  width: 150px;
`
export const Button = styled.a`
  display: block;
  width: 250px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  background: #0077e2;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
`

export const ContainerTestimonials = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`

export const TestimonialsCourseStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ItemTestimonialCourseStyled = styled.li`
  margin-top: 20px;
  width: 49%;
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const ItemTestimonialCourseHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const ItemTestimonialCourseImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: #0077e2;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height:50px;
  flex-shrink: 0;
  ::before {
    content: '${props => (props.isPhoto ? '-' : props.setContent)}';
  }
`

export const ItemTestimonialCourseHeaderInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const ItemTestimonialCourseStars = styled.div`
  margin-bottom: 1px;
`

export const ItemTestimonialCourseUser = styled.span`
  font-weight: 500;
  font-size: 14px;
  text-align: left;
`

export const ItemTestimonialCourseDepartment = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
`

export const ItemTestimonialCourseBody = styled.p`
  font-size: 14px;
  text-align: left;
`
