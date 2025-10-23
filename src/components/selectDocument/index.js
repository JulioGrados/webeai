import Select from 'react-select'

const documents = [
  {
    name: 'Cedula ciudadana',
    code: 'CC'
  },
  {
    name: 'Carné de Extranjería',
    code: 'CE'
  },
  {
    name: 'NIT',
    code: 'NIT'
  },
  {
    name: 'Pasaporte',
    code: 'PASS'
  }
]

export const SelectDocument = ({ value, onSelect, confirm = false, documents }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      menuPlacement: 'auto'
    }),
    control: (provided, state) => ({
      ...provided,
      menuPlacement: 'auto',
      height: '51.5px',
      borderRadius: '4px',
      border: '1px solid rgba(0, 0, 0, 0.38)',
      fontSize: '12px'
      // borderBottom: state.isSelected ? '1px solid #0077e2' : '1px solid #ccc',
      // borderTop: state.isSelected ? '0px !important' : '0px',
      // borderLeft: state.isSelected ? '0px !important' : '0px',
      // borderRight: state.isSelected ? '0px !important' : '0px'
    })
  }

  const customStylesConfirm = {
    option: (provided, state) => ({
      ...provided
    }),
    control: (provided, state) => ({
      ...provided,
      marginBottom: '15px',
      borderRadius: 0,
      fontSize: '14px',
      border: state.isSelected ? '0px' : '0px',
      borderBottom: state.isSelected ? '1px solid #0077e2' : '1px solid #ccc',
      borderTop: state.isSelected ? '0px !important' : '0px',
      borderLeft: state.isSelected ? '0px !important' : '0px',
      borderRight: state.isSelected ? '0px !important' : '0px'
    })
  }

  const options = documents.map(item => ({
    ...item,
    value: item.name,
    label: item.code
  }))
  console.log('value', value)
  let documentValue
  if (value) {
    documentValue = options.find(
      item => item.code === value
    )
  }

  return (
    <Select
      id='document'
      placeholder='Tipo de documento'
      options={options}
      onChange={onSelect}
      value={documentValue}
      styles={confirm ? customStylesConfirm : customStyles}
      className="single-select"
      classNamePrefix="react-select"
      menuPlacement="auto"
      maxMenuHeight={100}
      required={true}
    />
  )
}
