import {
  ErrorStyled,
  ErrorBody,
  Error,
  ErrorContent,
  ErrorContainer,
  ErrorTitle,
  ErrorSubTitle,
  ErrorText,
  ErrorBtn
} from './styles'

import HeadPage from '../head'

import Link from 'next/link'

const Error404 = () => {
  return (
    <>
      <HeadPage
        title={`Página no Encontrada | Escuela Americana de Innovación`}
      />
      <ErrorStyled>
        <ErrorBody>
          <Error>
            <ErrorContent>
              <ErrorContainer>
                <ErrorTitle>404</ErrorTitle>
                <ErrorSubTitle>OPSS!</ErrorSubTitle>
                <ErrorText>
                  No encontramos lo que estas buscando, podrías ir a la página
                  de inicio.
                </ErrorText>
                <Link href='/'>
                  <ErrorBtn>Inicio</ErrorBtn>
                </Link>
              </ErrorContainer>
            </ErrorContent>
          </Error>
        </ErrorBody>
      </ErrorStyled>
    </>
  )
}

export default Error404
