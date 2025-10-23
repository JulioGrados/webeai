import {
  HeaderCourseMain,
  HeaderMain,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  HeaderCourseName,
  HeaderCoursePrice,
  HeaderCoursePriceSimbol,
  HeaderCoursePriceDiv,
  HeaderCoursePriceDiscount,
  HeaderCoursePriceDiscountNumber,
  HeaderCoursePriceDiscountPorcentage
} from './styles'

import { NavBar } from './navBar'
import { getCookie } from 'utils/functions/session'
import { useState, useEffect } from 'react'

export const HeaderCourse = ({ course, isConfirmation }) => {
  const [showFixed, setShowFixed] = useState(false)
  const porcentage = parseInt(((course.price - course.discount) / course.price) * 100)
  const [coin, setCoin] = useState({
    symbol: '',
    price: '',
    code: ''
  })
  const country = getCookie('country')
  const countryChange = getCookie('countryChange')

  useEffect(() => {
    const onScroll = e => {
      if (window.pageYOffset > 200) {
        setShowFixed(true)
      } else {
        setShowFixed(false)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  useEffect(() => {
    if (country && course.coins) {
      // console.log('country 3', country)
      const countryObj = JSON.parse(country)
      let data = course.coins.find(item => item.code === countryObj.currency)
      !data && (data = course.coins.find(item => item.code === 'PEN'))
      setCoin(data)
    }
  }, [country])

  useEffect(() => {
    if (countryChange && course.coins) {
      // console.log('country change 3', countryChange)
      const countryObj = JSON.parse(countryChange)
      let data = course.coins.find(item => item.code === countryObj.currency)
      !data && (data = course.coins.find(item => item.code === 'PEN'))
      setCoin(data)
    }
  }, [countryChange])

  console.log('isConfirmation', isConfirmation)

  const renderHeader = showFixed => (
    <>
      <HeaderCourseMain showFixed={showFixed}>
        <HeaderMain>
          <HeaderContent>
            <HeaderLeft course>
              <HeaderCourseName>{course.name}</HeaderCourseName>
            </HeaderLeft>
            <HeaderRight course>
              {/* {
                course.discount ?
                  (
                    
                      <HeaderCoursePrice price={course.price}>
                        {`S/. ${course.price}.00`}
                      </HeaderCoursePrice>
                    
                  )
                    :
                  (
                    <HeaderCoursePrice price={course.price}>
                      {course.price == 0 ? '' : `S/. ${course.price}.00`}
                    </HeaderCoursePrice>
                  )
              } */}
              {
                coin && (!isConfirmation ?
                  (
                    <HeaderCoursePrice price={coin.price}>
                      <span>{coin.price == 0 ? 'GRATIS' : `${coin.symbol}${coin.price}`}</span>
                      <HeaderCoursePriceSimbol>{coin.price == 0 ? '' : `${coin.code}`}</HeaderCoursePriceSimbol>
                    </HeaderCoursePrice>
                  )
                    :
                  (
                    <HeaderCoursePrice price={coin.price}>
                      GRATIS
                    </HeaderCoursePrice>
                  )
                )
              }
            </HeaderRight>
          </HeaderContent>
        </HeaderMain>
      </HeaderCourseMain>
    </>
  )

  return <>{renderHeader(showFixed)}</>
}
