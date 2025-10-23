import Select from 'react-select'

export const SelectForm = ({ required, value, onSelect, values }) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided
    }),
    option: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: 0,
      border: state.isSelected ? '1px solid #0077e2' : '1px solid rgba(41,98,182,0.2)',
      boxShadow: 'none'
    })
  }

  const options = values.map(item => ({
    value: item,
    label: item
  }))
  
  let optionValue
  if (value) {
    optionValue = options.find(
      item => item.name === value || item.label === value
    )
  }

  return (
    <Select
      placeholder='Seleccionar'
      options={options}
      value={optionValue}
      onChange={onSelect}
      styles={customStyles}
    />
  )
}
