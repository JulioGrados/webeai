import Link from 'next/link'

import {
  AgreementItem,
  AgreementItemName,
  AgreementItemContentImg,
  AgreementItemImg,
  AgreementItemTitle,
  AgreementItemText,
  AgreementItemButton
} from './styles'

import { MEDIA_PATH } from 'utils/files/path'

const Agreement = ({ image, institution, description, slug, all, setHome }) => {
  return (
    <AgreementItem full={all} setHome={setHome}>
      <AgreementItemContentImg>
        <AgreementItemImg full={all} src={MEDIA_PATH + image} alt='Convenio' />
      </AgreementItemContentImg>

      {all ? (
        <>
          <AgreementItemTitle full={all}>{institution}</AgreementItemTitle>
          <AgreementItemText>{description}</AgreementItemText>
          <Link href='/convenios/[slug]' as={`/convenios/${slug}`}>
            <AgreementItemButton>Ver más</AgreementItemButton>
          </Link>
        </>
      ) : (
        <Link href='/convenios/[slug]' as={`/convenios/${slug}`}>
          <AgreementItemName full={all}>{institution}</AgreementItemName>
        </Link>
      )}
    </AgreementItem>
  )
}

export default Agreement
