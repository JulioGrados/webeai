import { InputForm, InputFormPre, InputFormCheck } from './styles'
import Link from 'next/link'

export const Input = ({
  value = '',
  pre,
  contact = false,
  onChange,
  ...props
}) => {
  const handleInputChange = e => {
    const newValue = e.target.value
    onChange(newValue)
  }

  const { type } = { ...props }

  return (
    <InputForm contact={contact}>
      <InputFormPre>{pre}</InputFormPre>

      {type === 'checkbox' ? (
        <>
          <InputFormCheck>
            <input
              value={value}
              onChange={handleInputChange}
              {...props}
              checked
            />{' '}
            <span>
              {value}{' '}
              <Link href='/privacidad'>
                <a>políticas de privacidad</a>
              </Link>
            </span>
          </InputFormCheck>
        </>
      ) : (
        <input value={value} onChange={handleInputChange} {...props} />
      )}
    </InputForm>
  )
}

export default Input
