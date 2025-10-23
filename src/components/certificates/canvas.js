import { useRef, useEffect, useState } from 'react'

import { detailOpenCourse } from 'utils/api/courses'

const CanvasImage = ({ ...certificate }) => {
  const canvas = useRef(null)
  const { course = '', date = '', linked = '', shortCode } = certificate
  const [info, setInfo] = useState('')
  const count = course.shortName.length
  let data
  useEffect(() => {
    const courseId = course.ref
    const fetchCourse = async () => {
      data = await detailOpenCourse({
        params: { id: courseId }
      })
      setInfo(data)
    }
    fetchCourse()
    // console.log(data)
  }, [course])
  let monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  let lastName
  if (linked) {
    const lastaNameRef = linked && linked.ref && linked.ref.lastName ? linked.ref.lastName : linked.lastName
    const end = lastaNameRef[lastaNameRef.length - 1]
    if (end === ' ') {
      lastName = lastaNameRef.substring(0, lastaNameRef.length - 1)
    } else {
      lastName = lastaNameRef
    }
  }

  let now = new Date(date.toString())
  let evaluations = info && info.numberEvaluation
  if (evaluations <= 10) {
    evaluations = 70
  } else {
    evaluations = evaluations * 7
  }
  let date_start = evaluations * (24 * 60 * 60 * 1000)
  let date_end =
    now.getDate() +
    ' de ' +
    monthNames[now.getMonth()] +
    ' de ' +
    now.getFullYear()

  date_start = new Date(Date.parse(now) - date_start)
  date_start =
    date_start.getDate() +
    ' de ' +
    monthNames[date_start.getMonth()] +
    ' de ' +
  date_start.getFullYear()
  
  let emitido = certificate && certificate.emission ? new Date(certificate.emission) : ''
  emitido && emitido.setHours(emitido.getHours() - 5)
  // console.log('linked', linked)
  const certificado = (context, imagen, font) => {
    context.beginPath()
    context.drawImage(imagen, 0, 0)
    context.textAlign = 'center'
    context.font = 'bold 38px ' + font
    context.fillText('CERTIFICADO', 550, 130)
    context.font = (count <= 71) ? 'bold 23px ' + font : 'bold 17px ' + font
    context.fillText('CURSO DE ESPECIALIZACIÓN', 550, 190)
    context.fillText(
      `${info ? info.shortName : course.shortName}`.toUpperCase(),
      550,
      240
    )
    context.font = '20px ' + font
    context.fillText('Otorgado a:', 550, 290)
    context.font = 'bold 30px ' + font
    context.fillText(
      `${linked.ref && linked.ref.beforeName ? linked.ref.beforeName + ' ' + linked.ref.firstName + ' ' + lastName : (lastName + ', ' + linked.ref.firstName).toUpperCase()}`,
      550,
      340
    )
    context.font = '20px ' + font
    context.fillText(
      'Por concluir y cumplir los requisitos de aprobación del curso',
      550,
      390
    )
    context.fillText(
      'realizado del ' + date_start + ' hasta el ' + date_end,
      550,
      430
    )
    context.fillText(
      `con un total de  ${course.academicHours}  horas académicas.`,
      550,
      470
    )
    context.font = '14px ' + font
    context.fillText(`Código de verificación:  ${shortCode}`, 240, 680)
    context.font = '14px ' + font
    emitido && context.fillText(`Emitido el ${emitido.getDate() + ' de ' + monthNames[emitido.getMonth()] + ' de ' + emitido.getFullYear()}`, 880, 680)
    context.closePath()
  }

  useEffect(() => {
    const font = 'helvetica'
    const context = canvas.current.getContext('2d')

    const imagen = new Image()
    imagen.setAttribute('crossOrigin', 'anonymous')
    imagen.src = '/static/img/certificado.png'
    imagen.onload = function () {
      certificado(context, imagen, font)
    }
  })


  const can = {
      width: "100%",
      height: "100%"
  }
  
  let dw = 1102
  let dh = 778
  return <canvas style={can} ref={canvas} width={dw} height={dh}/>

  
}

export default CanvasImage
