export const Textarea = ({ value, onChange, ...props }) => {
  const handleInputChange = e => {
    const newValue = e.target.value
    onChange(newValue)
  }

  return (
    <textarea onChange={handleInputChange} {...props}>
      {value}
    </textarea>
  )
}

export default Textarea
