import { useState, useEffect } from 'react'
import Link from 'next/link'

import { ListLabels } from '../category/listLabels'
import { ListCourses } from '../../containers'

import {
  ContainerCourses,
  NavCourse,
  NavCourseItem,
  ArticleCourse,
  ArticleCourseTitle
} from './styles'
import { useRouter } from 'next/router'

const CoursesLabels = showLabels => {
  const router = useRouter()
  const [label, setLabel] = useState(null)

  const slug = router.query.label

  useEffect(() => {
    setLabel(router.query.label)
  }, [router.query.label])

  const handleChange = label => {
    if (label) {
      router.push(`/cursos?label=${label}`)
      setLabel(label)
    } else {
      router.push(`/cursos`)
      setLabel(null)
    }
  }

  return (
    <>
      <NavCourse>
        <li>
          <Link href='/'>
            <NavCourseItem>Inicio ></NavCourseItem>
          </Link>
        </li>
        <li>
          <Link href='/cursos'>
            <NavCourseItem>Cursos</NavCourseItem>
          </Link>
        </li>
      </NavCourse>
      <ArticleCourseTitle>Todos los cursos</ArticleCourseTitle>
      <ContainerCourses>
        <ListLabels label={label} onChange={handleChange} slug={slug} />
        <ArticleCourse>
          {/* <ContainerFilter onClick={() => showFilter(!show)}>
            <FilterCourses>
              <IconFilter />
              <TitleFilter>Filtro de Temas</TitleFilter>
              <IconDown />
            </FilterCourses>
            <CategoriesTransparent show={show}>
              <ListLabels
                showLabels
                slug={slug}
                label={label}
                onChange={handleChange}
              />
            </CategoriesTransparent>
          </ContainerFilter> */}
          <ListCourses label={label} />
        </ArticleCourse>
      </ContainerCourses>
    </>
  )
}

export default CoursesLabels
