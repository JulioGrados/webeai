import { NavBar } from './navBar'
import {
  HeaderMain,
  HeaderContentCenter,
  HeaderCenter,
  HeaderLogo,
} from './styles'
import Link from 'next/link'

const Fixed = () => {

  return (
    <>
      <HeaderMain>
        <HeaderContentCenter>
          <HeaderCenter>
            <Link href='/'>
              <HeaderLogo
                src='/static/img/eai-logo.svg'
                alt='Imagen EAI'
              />
            </Link>
          </HeaderCenter>
        </HeaderContentCenter>
      </HeaderMain>
    </>
  )
}

export default Fixed
