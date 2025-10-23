import Select from 'react-select'

const documents = [
  {
    name: 'Egresado',
    code: 'Egresado'
  },
  {
    name: 'Estudiante',
    code: 'Estudiante'
  },
  {
    name: 'Administrativo',
    code: 'Administrativo'
  },
  {
    name: 'Particular',
    code: 'Particular'
  },
  {
    name: 'Docente',
    code: 'Docente'
  },
  {
    name: 'Ninguno',
    code: 'Ninguno'
  }
]

export const SelectRelationship = ({ value, onSelect }) => {
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
      borderRight: state.isSelected ? '0px !important' : '0px',
      color: '#010101'
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
      placeholder='Relación con el Instituto Tecnológico del Putumayo'
      options={options}
      onChange={onSelect}
      value={documentValue}
      styles={customStylesConfirm}
      className="single-select"
      classNamePrefix="react-select"
      menuPlacement="auto"
      maxMenuHeight={100}
      required={true}
    />
  )
}
