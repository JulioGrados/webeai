import {
  CourseDetail,
  NavCourse,
  NavCourseItem,
  CourseDetailLeft,
  CoursesDetailRight,
  CourseHeader,
  CourseBody,
  CourseHeaderTitle,
  CourseHeaderInfo,
  CourseHeaderTeachers,
  CourseHeaderTeacher,
  CourseHeaderTeacherImg,
  CourseHeaderTeacherTitle,
  CourseHeaderTeacherNames,
  CourseHeaderPrice,
  CourseHeaderPriceSymbol,
  CourseHeaderImg,
  CourseFormNone,
  CourseHeaderPriceDiv,
  CourseHeaderPriceDiscount,
  CourseHeaderPriceDiscountNumber,
  CourseHeaderPriceDiscountPorcentage
} from './styles'

import Link from 'next/link'
import Features from './features'
import About from './about'
import Certification from './certification'
import Payment from './payment'
import Temary from './temary'
import TeacherItem from './teacher'
import TestimonialsCourse from '../testimonial/listCourse'

import { CreateUser } from '../../containers'

import { MEDIA_PATH } from 'utils/files/path'
import { getCookie } from 'utils/functions/session'
import { useEffect, useState } from 'react'

const Detail = course => {
  const teachers = course.teachers
  const {
    category,
    name,
    price,
    image,
    agreement,
    descriptionGeneral,
    lessons,
    slug,
    coins,
    discount,
    isForo,
    isConfirmation
  } = course

  // const porcentage = parseInt(((price - discount)/price)*100)
  const [coin, setCoin] = useState({
    symbol: '',
    price: '',
    code: ''
  })
  const country = getCookie('country')
  const countryChange = getCookie('countryChange')
  
  useEffect(() => {
    if (country && coins) {
      // console.log('country 2', country)
      const countryObj = JSON.parse(country)
      let data = coins.find(item => item.code === countryObj.currency)
      !data && (data = coins.find(item => item.code === 'PEN'))
      setCoin(data)
    }
  }, [country])

  useEffect(() => {
    if (countryChange && coins) {
      // console.log('country change 2', countryChange)
      const countryObj = JSON.parse(countryChange)
      let data = coins.find(item => item.code === countryObj.currency)
      !data && (data = coins.find(item => item.code === 'PEN'))
      setCoin(data)
    }
  }, [countryChange])
  console.log('isConfirmation', isConfirmation)
  return (
    <>
      <NavCourse>
        <li>
          <Link href='/'>
            <NavCourseItem>Inicio -</NavCourseItem>
          </Link>
        </li>
        <li>
          <Link href='/cursos'>
            <NavCourseItem>Cursos -</NavCourseItem>
          </Link>
        </li>
        <li>
          <Link href={`/cursos?category=${category.name}`}>
            <NavCourseItem>{category.name} -</NavCourseItem>
          </Link>
        </li>
        <li>
          <NavCourseItem>{name}</NavCourseItem>
        </li>
      </NavCourse>
      <CourseDetail>
        <CourseDetailLeft>
          <CourseHeader>
            <CourseHeaderTitle>{name}</CourseHeaderTitle>
            <CourseHeaderInfo>
              <CourseHeaderTeachers>
                {teachers.map(teacher => (
                  <CourseHeaderTeacher key={teacher._id}>
                    <CourseHeaderTeacherImg src={MEDIA_PATH + teacher.photo} />
                    <div>
                      <CourseHeaderTeacherTitle>
                        Docente
                      </CourseHeaderTeacherTitle>
                      <CourseHeaderTeacherNames>
                        {teacher.names}
                      </CourseHeaderTeacherNames>
                    </div>
                  </CourseHeaderTeacher>
                ))}
              </CourseHeaderTeachers>
              {/* {
                discount ?
                  (
                    <CourseHeaderPriceDiv>
                      <CourseHeaderPriceDiscount>
                        <CourseHeaderPriceDiscountNumber>{`S/. ${price}.00`}</CourseHeaderPriceDiscountNumber>
                        <CourseHeaderPriceDiscountPorcentage>{porcentage}% dto.</CourseHeaderPriceDiscountPorcentage>
                      </CourseHeaderPriceDiscount>
                      <CourseHeaderPrice price={price}>
                        {`S/. ${price}.00`}
                      </CourseHeaderPrice>
                    </CourseHeaderPriceDiv>
                  )
                    :
                  (
                    <CourseHeaderPrice price={price}>
                      {price == 0 ? '' : `S/. ${price}.00`}
                    </CourseHeaderPrice>
                  )
              } */}
              {
                coin && (!isConfirmation ? 
                  <CourseHeaderPrice price={coin.price}>
                    <span>{coin.price == 0 ? 'GRATIS' : `${coin.symbol}${coin.price}`}</span>
                    <CourseHeaderPriceSymbol>{coin.price == 0 ? '' : `${coin.code}`}</CourseHeaderPriceSymbol>
                  </CourseHeaderPrice> :
                  <CourseHeaderPrice price={coin.price}>
                    GRATIS
                  </CourseHeaderPrice>
                )
              }
            </CourseHeaderInfo>
            <CourseHeaderImg src={MEDIA_PATH + image} />
          </CourseHeader>
          <CourseFormNone>
            <CreateUser course={course} width='100%' />
          </CourseFormNone>
          <CourseBody>
            <Features isForo={isForo} isConfirmation={isConfirmation} />
            {descriptionGeneral && <About text={descriptionGeneral} />}
            {agreement && (
              <Certification
                course={name}
                certificate={agreement.institution}
                isConfirmation={isConfirmation}
              />
            )}
            {
              !isConfirmation && <Payment price={price} />
            }
            {lessons.length > 0 && <Temary lessons={lessons} />}
            {teachers && <TeacherItem teachers={teachers} />}
            <TestimonialsCourse
              courseId={course._id}
              categoryId={course.category.ref}
            />
          </CourseBody>
        </CourseDetailLeft>
        <CoursesDetailRight>
          <CreateUser course={course} width='100%' />
        </CoursesDetailRight>
      </CourseDetail>
    </>
  )
}

export default Detail
