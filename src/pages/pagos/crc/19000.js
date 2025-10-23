import Router from 'next/router'
import { HeadPage } from '../../../components'
import Fixed from '../../../components/header/fixed'
import { Container } from '../../../styles/main'
import Payment from '../../../components/payment/crc'
import { createChargedLocal } from 'utils/api/charge'
import { useState } from 'react'
import FixedPayment from '../../../components/payment/fixed'
import FixedFooter from '../../../components/payment/fixedFooter'
const aboves = ['CO']

const DlgCrc = ({ meta }) => {
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
      <FixedPayment symbol={'₡'} amount={'19000'} money={'CRC'} />
      <Container>
        <Payment onSubmit={handleSubmit} error={error} />
      </Container>
      <FixedFooter country='CRC' />
    </>
  )
}

export default DlgCrc
