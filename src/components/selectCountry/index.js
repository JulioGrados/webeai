import Select from 'react-select'
import countriesData from 'utils/functions/countries'

export const SelectCountry = ({ value, name, onSelect }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided
    }),
    control: (provided, state) => ({
      ...provided,
      marginBottom: '15px',
      borderRadius: 0,
      border: state.isSelected ? '0px' : '0px',
      borderBottom: state.isSelected ? '1px solid #0077e2' : '1px solid #ccc',
      borderTop: state.isSelected ? '0px !important' : '0px',
      borderLeft: state.isSelected ? '0px !important' : '0px',
      borderRight: state.isSelected ? '0px !important' : '0px'
    })
  }

  const options = countriesData.map(item => ({
    ...item,
    value: item.name,
    label: item.name
  }))

  let countryValue
  if (value) {
    countryValue = options.find(
      item => item.name === value || item.code === value
    )
  }

  return (
    <Select
      placeholder='Selecciona tu país'
      options={options}
      value={countryValue}
      onChange={onSelect}
      styles={customStyles}
    />
  )
}
