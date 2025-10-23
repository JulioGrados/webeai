import {
  CompanyContent,
  CompanyList,
  CompanyListTitle,
  CompanyItem,
  CompanyItemImg
} from './styles'

const Companys = () => {
  return (
    <CompanyContent>
      <CompanyListTitle>
        Empresas importantes de todos los sectores confian en nosotros
      </CompanyListTitle>
      <CompanyList>
        <CompanyItem>
          <CompanyItemImg src='/static/img/ministerio-produccion.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/san-lorenzo.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/alcides-carrion.png' alt='' />
        </CompanyItem>
        {/* <CompanyItem>
          <CompanyItemImg src='/static/img/caja-piura.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/danper.png' alt='' />
        </CompanyItem> */}
        <CompanyItem>
          <CompanyItemImg src='/static/img/ministerio-publico.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/caja-sullana.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg
            src='/static/img/logo-caja-rural-los-andes.png'
            alt=''
          />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/logo-acceso.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/banco-bcp.png' alt='' />
        </CompanyItem>
        <CompanyItem>
          <CompanyItemImg src='/static/img/gas-peruano.png' alt='' />
        </CompanyItem>
      </CompanyList>
    </CompanyContent>
  )
}

export default Companys
