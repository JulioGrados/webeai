import {
  FixedHeader,
  FixedHeaderMain,
  FixedHeaderContentCenter,
  FixedHeaderCenter,
  FixedHeaderLogo,
  FixedHeaderPrice,
  FixedHeaderPriceText,
  FixedHeaderPriceAmount
} from './styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const FixedPayment = ({symbol, amount, money}) => {
  const [showFixed, setShowFixed] = useState(false)

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

  return (
    <>
      <FixedHeader>
        <FixedHeaderContentCenter>
          <FixedHeaderCenter>
            <Link href='/'>
              <FixedHeaderLogo
                src='/static/img/eai-logo.svg'
                alt='Imagen EAI'
              />
            </Link>
          </FixedHeaderCenter>
        </FixedHeaderContentCenter>
        <FixedHeaderPrice>
          <FixedHeaderPriceText>
            Monto a pagar
          </FixedHeaderPriceText>
          <FixedHeaderPriceAmount>
            {symbol}. {amount}.00 {money}
          </FixedHeaderPriceAmount>
        </FixedHeaderPrice>
      </FixedHeader>
    </>
  )
}

export default FixedPayment
