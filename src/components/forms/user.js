import { useRef, useState, useEffect } from 'react'
import { useStateData, useLeadgods } from '../../hooks'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { SelectCourse } from '../../containers'
import { NotificationForm } from './notification'
import { SelectCountry } from '../selectCountry'
import { getCookie } from 'utils/functions/session'
import {
  FormTop,
  FormTopContent,
  FormTopHeader,
  FormTopContentBtn,
  FormTopContentInput,
  NotificationCourse,
  NotificationHome
} from './styles'
import { useRouter } from 'next/router'

const UserForm = ({ loading, error, course, onSubmit, width }) => {
  const router = useRouter()
  const [userData, setUserData] = useLocalStorage('userInfo', {})
  const country = getCookie('country')
  
  const { data, changeData, cleanData, change, changeDatas } = useStateData(
    userData
  )
  const [alert, changeAlert] = useState(false)
  const form = useRef(null)

  useEffect(() => {
    change(userData)
  }, [userData])

  useEffect(() => {
    if (country) {
      const value = JSON.parse(country)
      changeDatas({
        country: userData.country || (value && value.name),
        mobileCode: userData.mobileCode || (value && value.callingCode)
      })
    }
  }, [country])

  const messageSuccess = () => {
    changeAlert(true)
    setTimeout(() => {
      changeAlert(false)
    }, 5 * 1000)
  }

  const handleSuccess = () => {
    messageSuccess()
    cleanData()
    form.current.reset()
    change(userData)
  }

  const handleSelectCountry = country => {
    console.log(country)
    changeDatas({
      country: country.name,
      mobileCode: country.callingCode
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const storage = {
      ...data,
      course: undefined
    }
    setUserData(storage)
    if (course) {
      data.course = {
        ...course,
        ref: course._id
      }
      let currencyFind = course.coins.find(item => item.code === JSON.parse(country).currency)
      !currencyFind && (currencyFind = course.coins.find(item => item.code === 'PEN'))
      data.currency = currencyFind.code
    }
    data.names = `${data.firstName} ${data.lastName}`
    onSubmit(data, handleSuccess)
  }

  const title = course
    ? 'RECIBE MÁS INFORMACIÓN Y UN DESCUENTO ESPECIAL'
    : 'ELIGE EL CURSO DE TU INTERÉS'

  return (
    <>
      <FormTop ref={form} onSubmit={handleSubmit} width={width}>
        <FormTopHeader>{title}</FormTopHeader>
        <FormTopContent width={width}>
          <FormTopContentInput
            placeholder='Nombres'
            type='text'
            required={true}
            value={data.firstName}
            onChange={value => changeData('firstName', value)}
          />
          <FormTopContentInput
            placeholder='Apellidos'
            type='text'
            required={true}
            value={data.lastName}
            onChange={value => changeData('lastName', value)}
          />
          <FormTopContentInput
            placeholder='Correo electrónico'
            type='email'
            required={true}
            value={data.email}
            onChange={value => changeData('email', value)}
          />

          <SelectCountry
            value={data.country}
            onSelect={handleSelectCountry}
            name='country'
          />

          <FormTopContentInput
            pre={'(+' + data.mobileCode + ')'}
            placeholder='Celular'
            type='number'
            required={true}
            value={data.mobile}
            onChange={value => changeData('mobile', value)}
          />

          {/* <FormTopContentInput
            placeholder='Documento de Identidad'
            type='number'
            required={true}
            value={data.dni}
            onChange={value => changeData('dni', value)}
          /> */}
          {!course && (
            <SelectCourse
              course={data.course}
              onSelect={course => changeData('course', course)}
            />
          )}
          <FormTopContentInput
            value='Acepto las condiciones de uso y '
            type='checkbox'
            required={true}
            onChange={value => changeData('terms', value)}
          />
        </FormTopContent>
        {error && <span>{error}</span>}
        <FormTopContentBtn disabled={loading} type='submit'>
          {loading && <span>...</span>} Enviar Datos
        </FormTopContentBtn>
      </FormTop>
      {!course && !error && (
        <NotificationHome>{alert && <NotificationForm />}</NotificationHome>
      )}
      {course && !error && (
        <NotificationCourse>{alert && <NotificationForm />}</NotificationCourse>
      )}
    </>
  )
}

export default UserForm
