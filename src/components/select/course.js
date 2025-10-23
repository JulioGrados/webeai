import Select from 'react-select'

const SelectCourse = ({ course, courses, onSelect }) => {
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
  return (
    <Select
      id='course'
      placeholder='Elige el curso de tu interes'
      loadingMessage={() => 'cargando...'}
      noOptionsMessage={() => 'No hay cursos.'}
      options={courses}
      onChange={onSelect}
      value={course ? course : ''}
      styles={customStyles}
    />
  )
}

export default SelectCourse
