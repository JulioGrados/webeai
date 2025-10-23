import {
  FooterMain,
  FooterContainer,
  FooterFlex,
  FooterLeft,
  FooterRight,
  FooterLogo,
  FooterLine,
  FooterDate,
  FooterDateText,
  FooterDateLink,
  FooterSecction,
  FooterSecctionTitle,
  FooterSecctionItem,
  FooterIconPohone,
  FooterIconMail,
  FooterIconLocation,
  FooterIconDefault,
  FooterMoney,
  FooterMoneyTitle,
  FooterMoneySelect
} from './styles'
import { IconPhone } from './iconPhone'
import { IconMail } from './iconMail'
import { IconLocation } from './iconLocation'
import { IconWhatsapp } from './iconWhatsapp'
import Link from 'next/link'
import countries from 'utils/functions/countries'
import { getCookie, setCookie, removeCookie } from 'utils/functions/session'
import { useEffect, useState } from 'react'
import { SelectMoney } from '../selectMoney'
import Router from 'next/router'

const Footer = ({ country }) => {
  const getCountry = getCookie('country') ? JSON.parse(getCookie('country')) : country && countries.find(item => item.code === country)
  console.log('getCountry', getCountry)
  const [code, setCode] = useState('')
  useEffect(() => {
    if (getCountry) {
      setCode(getCountry.currency)
    }
  }, [getCountry])
  
  const onChangeMoney = (value) => {
    const find = countries.find(
      item => item.code === value.code
    )
    setCode(value.code)
    removeCookie('country')
    setCookie('country', find)
    Router.reload(window.location.pathname)
  }
  
  return (
    <FooterMain>
      <FooterContainer>
        <FooterFlex>
          <FooterLeft>
            <FooterLogo src='/static/img/eai-logo.svg' alt='Logo' />
            <FooterLine />
            <FooterDate>
              <IconPhone />
              <FooterDateText>
                <a href='tel:014800022'>(01)4800022</a>
              </FooterDateText>
            </FooterDate>
            <FooterDate>
              <IconWhatsapp />
              <FooterDateText>
                <a href='https://wa.me/51987184188'>+51 987184188</a>
              </FooterDateText>
            </FooterDate>
            <FooterDate>
              <IconMail />
              <FooterDateText>cursos@eai.edu.pe</FooterDateText>
            </FooterDate>
            <FooterDate>
              <IconLocation />
              <FooterDateText>
                Calle Las Camelias 877, Oficina 302 - San Isidro - Lima
              </FooterDateText>
            </FooterDate>
            <FooterMoney>
              <FooterMoneyTitle>Moneda:</FooterMoneyTitle>
              <FooterMoneySelect>
                {code && <SelectMoney value={code} onSelect={onChangeMoney} />}
              </FooterMoneySelect>
            </FooterMoney>
          </FooterLeft>
          <FooterRight>
            <FooterSecction>
              <FooterSecctionTitle>Cursos</FooterSecctionTitle>
              <ul>
                <li>
                  <Link href='/cursos/estadistica-aplicada-a-la-investigacion-cientifica'>
                    <FooterSecctionItem>
                      Estadística Aplicada a la Investigación Científica
                    </FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/gestion-de-proyectos'>
                    <FooterSecctionItem>
                      Gestión de Proyectos
                    </FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/gestion-del-talento-humano'>
                    <FooterSecctionItem>
                      Gestión del Talento Humano
                    </FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/project'>
                    <FooterSecctionItem>MS Project</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/ofimatica'>
                    <FooterSecctionItem>
                      Ofimática Profesional
                    </FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/sistema-de-gestion-de-la-calidad'>
                    <FooterSecctionItem>
                      Sistema de Gestión de la Calidad
                    </FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos/tributacion'>
                    <FooterSecctionItem>Tributación</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/cursos'>
                    <FooterSecctionItem>Más cursos</FooterSecctionItem>
                  </Link>
                </li>
              </ul>
            </FooterSecction>
            <FooterSecction>
              <FooterSecctionTitle>EAI</FooterSecctionTitle>
              <ul>
                <li>
                  <Link href='/convenios'>
                    <FooterSecctionItem>Convenios</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/docentes'>
                    <FooterSecctionItem>Docentes</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/privacidad'>
                    <FooterSecctionItem>Privacidad</FooterSecctionItem>
                  </Link>
                </li>
              </ul>
            </FooterSecction>
            <FooterSecction>
              <FooterSecctionTitle>Más</FooterSecctionTitle>
              <ul>
                <li>
                  <Link href='/certificados'>
                    <FooterSecctionItem>Certificados</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/contacto'>
                    <FooterSecctionItem>Contacto</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/libro-de-reclamaciones'>
                    <FooterSecctionItem>Libro de reclamaciones</FooterSecctionItem>
                  </Link>
                </li>
                <li>
                  <Link href='/terminos-condiciones'>
                    <FooterSecctionItem>Términos y condiciones</FooterSecctionItem>
                  </Link>
                </li>
              </ul>
            </FooterSecction>
          </FooterRight>
        </FooterFlex>
      </FooterContainer>
    </FooterMain>
  )
}

export default Footer
