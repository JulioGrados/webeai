import Router from 'next/router'
import { HeadPage } from '../../../components'
import Fixed from '../../../components/header/fixed'
import { Container } from '../../../styles/main'
import Payment from '../../../components/payment/arsDinamic'
import { createChargedLocal } from 'utils/api/charge'
import { useState } from 'react'
import FixedPayment from '../../../components/payment/fixed'
import FixedFooter from '../../../components/payment/fixedFooter'
const aboves = ['CO']

const DinamicArs = ({ meta, value }) => {
  const [error, setError] = useState('')
  const handleSubmit = async (data, callback) => {
    setError('')
    const save = await createChargedLocal(data)
    if (save.success) {
      callback && callback()
      window.location.href = save.redirect_url
    } else {
      save && save.message && setError(save.message)
    }
  }


  return (
    <>
      {
        value <= 0 ? 
          (
            <Error404 />
          ) : 
          (
            <>
              <HeadPage title='Pago' meta={meta} />
              <FixedPayment symbol={'$'} amount={value} money={'ARS'} />
              <Container>
                <Payment onSubmit={handleSubmit} error={error} value={value} />
              </Container>
              <FixedFooter country='ARS' />
            </>       
          )
      }
    </>
  )
}

DinamicArs.getInitialProps = async ctx => { 
  const { value } = ctx.query
  if (value) {
    return {value: value}
  }

  return {}
}

export default DinamicArs
