import Select from 'react-select'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const countries = [
  {
    flag: getUnicodeFlagIcon('COP'),
    symbol: '$',
    name: 'Colombia',
    currency: 'COP',
    code: 'CO'
  },
  {
    flag: getUnicodeFlagIcon('MXN'),
    symbol: '$',
    name: 'México',
    currency: 'MXN',
    code: 'MX'
  },
  {
    flag: getUnicodeFlagIcon('PEN'),
    symbol: 'S/',
    name: 'Perú',
    currency: 'PEN',
    code: 'PE'
  }
]

export const SelectMoney = ({ value, onSelect }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      menuPlacement: 'auto'
    }),
    control: (provided, state) => ({
      ...provided,
      marginBottom: '15px',
      menuPlacement: 'auto',
      fontSize: '15px',
      fontWeight: '600'
      // borderRadius: 0,
      // border: state.isSelected ? '0px' : '0px',
      // borderBottom: state.isSelected ? '1px solid #0077e2' : '1px solid #ccc',
      // borderTop: state.isSelected ? '0px !important' : '0px',
      // borderLeft: state.isSelected ? '0px !important' : '0px',
      // borderRight: state.isSelected ? '0px !important' : '0px'
    })
  }

  const options = countries.map(item => ({
    ...item,
    value: item.name,
    label: item.flag + ' ' + ' ' + item.name + ' ' + item.symbol + ' ( ' + item.currency + ' )'
  }))

  let countryValue
  if (value) {
    countryValue = options.find(
      item => item.currency === value
    )
  }

  return (
    <Select
      placeholder='Moneda'
      options={options}
      value={countryValue}
      onChange={onSelect}
      styles={customStyles}
      menuPlacement='auto'
    />
  )
}
