import styled, { css } from "styled-components";

export const HomeTop = styled.section`
  position: sticky;
  width: 100%;
  background: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)),
    #000000 url("/static/img/home.jpg") no-repeat center;
  background-size: cover;
`;

export const HomeTopContent = styled.div`
  padding: 100px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const HomeTopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const HomeTopContentLeft = styled.div`
  width: calc(100% - 340px);
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;

export const HomeTopContentTitle = styled.h1`
  font-size: 70px;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
  @media (max-width: 930px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 45px;
    text-align: center;
  }
  @media (max-width: 425px) {
    font-size: 35px;
  }
`;

export const HomeTopContentText = styled.p`
  font-size: 25px;
  font-weight: 200;
  margin: 20px 0px 0px 0px;
  text-align: left;
  color: #fff;
  @media (max-width: 930px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    font-size: 21px;
    text-align: center;
  }
  @media (max-width: 425px) {
    font-size: 19px;
  }
`;

export const FormTope = styled.div`
  position: relative;
`;
