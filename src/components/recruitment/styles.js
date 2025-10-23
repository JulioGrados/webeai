import styled from 'styled-components'

export const RecruitmentItem = styled.div`
  width: 400px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  padding: 15px;
  margin-left: auto;
  bottom: -40px;
  position: relative;
  z-index: -1;
  @media (max-width: 768px) {
    margin-right: auto;
    width: 280px;
  }
  @media (max-width: 425px) {
    bottom: 0px;
  }
`

export const RecruitmentContainer = styled.div`
  position: relative;
  margin-top: 15px;
`

export const RecruitmentImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 70%;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 5px 20px 0px rgba(105, 106, 119, 0.4);
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    display: none;
  }
`

export const RecruitmentTitle = styled.h3`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 800;
  margin: 0px;
`

export const RecruitmentSubTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 4px 0px 10px 0px;
`

export const RecruitmentName = styled.span`
  display: block;
  max-width: 150px;
  padding: 6px 12px;
  border-radius: 50px;
  background-color: rgba(45, 93, 223, 0.4);
  color: #0077e2;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`

export const RecruitmentText = styled.p`
  font-size: 14px;
  margin: 15px 0px 0px 0px;
  text-align: left;
  line-height: 2;
  color: #000;
`
