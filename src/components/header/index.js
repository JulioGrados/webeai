import { IconVirtual } from './iconVirtual'
import { IconDown } from './iconDown'
import { MenuHeader } from './menu'
import { ItemSearcher } from './searcher'
// import { HeaderCourse } from './course'
import { NavBar } from './navBar'

import {
  HeaderMain,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  HeaderItem,
  HeaderItemMenu,
  HeaderItemMenuContet,
  HeaderItemButton,
  HeaderItemText,
  HeaderMenu,
  HeaderMenuItem,
  HeaderScreen,
  HeaderItemLink
} from './styles'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Header = ({ transparent = false, homeNow, course }) => {
  const [showFixed, setShowFixed] = useState(false)
  const [showWhite, setWhite] = useState(transparent)

  useEffect(() => {
    const onScroll = e => {
      if (window.pageYOffset > 100) {
        if (!course) {
          setShowFixed(true)
          setWhite(false)
        }
      } else {
        setShowFixed(false)
        transparent && setWhite(true)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderHeader = fixed => (
    <>
      <HeaderMain transparent={showWhite} fixed={fixed}>
        <HeaderContent>
          <HeaderLeft>
            <Link href='/'>
              <HeaderLogo
                src={
                  showWhite
                    ? '/static/img/eai-white.png'
                    : '/static/img/eai-logo.svg'
                }
                alt='Imagen EAI'
              />
            </Link>
            <Link href='/cursos'>
              <HeaderItem transparent={showWhite}>Cursos</HeaderItem>
            </Link>
            <HeaderItemMenu transparent={showWhite}>
              <HeaderItemMenuContet>
                <HeaderItemText transparent={showWhite} right>
                  Más
                </HeaderItemText>
                <IconDown size='12px' icon={showWhite ? '#fff' : '#010101'} />
              </HeaderItemMenuContet>
              <HeaderMenu>
                <Link href='/convenios'>
                  <HeaderMenuItem>Convenios</HeaderMenuItem>
                </Link>
                <Link href='/docentes'>
                  <HeaderMenuItem>Docentes</HeaderMenuItem>
                </Link>
                <Link href='/testimonios'>
                  <HeaderMenuItem>Testimonios</HeaderMenuItem>
                </Link>
              </HeaderMenu>
            </HeaderItemMenu>
          </HeaderLeft>
          <HeaderRight>
            <ItemSearcher showWhite={showWhite} />
            <HeaderItemButton transparent={showWhite}>
              <HeaderItemLink href='https://cursos.eai.edu.pe/' target='_blank'>
                <IconVirtual icon={!showWhite ? '#fff' : '#010101'} />
                <HeaderItemText transparent={!showWhite} left>
                  Aula Virtual
                </HeaderItemText>
              </HeaderItemLink>
            </HeaderItemButton>
            <HeaderScreen>
              <MenuHeader showWhite={showWhite} homeNow={homeNow} />
            </HeaderScreen>
          </HeaderRight>
        </HeaderContent>
      </HeaderMain>
      <NavBar />
    </>
  )

  return <>{renderHeader(showFixed)}</>
}

export default Header
