import Router from 'next/router'
import { Article, Footer, HeadPage } from '../../../components'
import { Container } from '../../../styles/main'
import Payment from '../../../components/payment/clp'
import { createChargedLocal } from 'utils/api/charge'
import { useState } from 'react'
import FixedPayment from '../../../components/payment/fixed'
import FixedFooter from '../../../components/payment/fixedFooter'
const aboves = ['CO']

const DlgClp = ({ meta }) => {
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
      <HeadPage title='Pago' meta={meta} />
      <FixedPayment symbol={'$'} amount={'28000'} money={'CLP'} />
      <Container>
        <Payment onSubmit={handleSubmit} error={error} />
      </Container>
      <FixedFooter country='CLP' />
    </>
  )
}

export default DlgClp
