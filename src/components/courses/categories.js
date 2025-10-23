import { useState } from 'react'
import Link from 'next/link'

import { IconFilter } from './iconFilter'
import { IconDown } from './iconDown'
import { ListCourses, ListCategories } from '../../containers'
import {
  ContainerCourses,
  NavCourse,
  NavCourseItem,
  ArticleCourse,
  ArticleCourseTitle,
  FilterCourses,
  TitleFilter,
  ContainerFilter
} from './styles'

const CoursesCategories = () => {
  const [category, setCategory] = useState(null)
  return (
    <>
      <NavCourse>
        <li>
          <Link href="/">
            <NavCourseItem>Inicio ></NavCourseItem>
          </Link>
        </li>
        <li>
          <Link href="/cursos">
            <NavCourseItem>Cursos</NavCourseItem>
          </Link>
        </li>
      </NavCourse>
      <ContainerCourses>
        <ListCategories category={category} onChange={setCategory} />
        <ArticleCourse>
          <ArticleCourseTitle>Todos los cursos</ArticleCourseTitle>
          <ContainerFilter>
            <FilterCourses>
              <IconFilter />
              <TitleFilter >Filtros de Categoria</TitleFilter>
              <IconDown />
            </FilterCourses>
          </ContainerFilter>
          <ListCourses category={category} />
        </ArticleCourse>
      </ContainerCourses>
    </>
  )
}

export default CoursesCategories
