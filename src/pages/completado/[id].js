import Router from 'next/router'
import {  Error404, HeadPage } from '../../components'
import Fixed from '../../components/header/fixed'
import { Container } from '../../styles/main'
import { detailOpenCharge } from 'utils/api/charge'
import Complet from '../../components/payment/complet'

const aboves = ['CO']

const Free = ({ meta, charge }) => {
  return (
    <>
      {
        charge && charge.success ?
          (
            <>
              <HeadPage title='Pago' meta={meta} />
              <Fixed />
              <Complet charge={charge} />
            </>
          ) :
          (
            <Error404 />
          )
      }
    </>
  )
}

Free.getInitialProps = async ctx => {
  const { id } = ctx.query
  
  const charge = await detailOpenCharge({id: id})
  
  if (charge) {
    return { charge }
  }

  return {}
}

export default Free
