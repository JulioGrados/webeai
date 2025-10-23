import { IconMenu } from './iconMenu'
import { IconCross } from './iconCross'

import {
  HeaderScreenIcon,
  HeaderScreenMenu,
  HeaderScreenMenuItem,
  HeaderScreenContent,
  HeaderScreenMenuIcon,
  HeaderScreenMenuNav,
  HeaderScreenMenuImg,
  HeaderScreenMenuList
} from './styles'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export const MenuHeader = ({ showWhite, homeNow }) => {
  const [menu, setMenu] = useState(true)

  useEffect(() => {
    menu
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [menu])

  return (
    <>
      <HeaderScreenIcon onClick={() => setMenu(!menu)}>
        <IconMenu size='20px' icon={showWhite ? '#fff' : '#010101'} />
      </HeaderScreenIcon>
      <HeaderScreenMenu menu={!menu}>
        <HeaderScreenContent>
          <HeaderScreenMenuIcon onClick={() => setMenu(!menu)}>
            <IconCross />
          </HeaderScreenMenuIcon>
          <HeaderScreenMenuNav>
            <HeaderScreenMenuImg src='/static/img/eai-logo.svg' />
          </HeaderScreenMenuNav>
          <HeaderScreenMenuList>
            <Link href='/cursos'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Cursos
              </HeaderScreenMenuItem>
            </Link>
            <Link href='/convenios'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Convenios
              </HeaderScreenMenuItem>
            </Link>
            <Link href='/docentes'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Docentes
              </HeaderScreenMenuItem>
            </Link>
            <Link href='/testimonios'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Testimonios
              </HeaderScreenMenuItem>
            </Link>
            <Link href='/contacto'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Contacto
              </HeaderScreenMenuItem>
            </Link>
            <Link href='https://cursos.eai.edu.pe/login/index.php'>
              <HeaderScreenMenuItem onClick={() => setMenu(!menu)}>
                Aula Virtual
              </HeaderScreenMenuItem>
            </Link>
          </HeaderScreenMenuList>
        </HeaderScreenContent>
      </HeaderScreenMenu>
    </>
  )
}
