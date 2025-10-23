import Link from 'next/link'
import Head from 'next/head'
import {
  Footer,
  ListWork,
  Article,
  Comunicate,
  ListTestimonials,
  Recruitment,
  HomeCover,
  HeadPage
} from '../../components'
import { ListCourses, Slogan, ListAgreements } from '../../containers'
import { Container } from '../../styles/main'
import { CoursesBtn, CourseBtnContent } from '../../components/courses/styles'

const Home = ({ meta, country = 'CO' }) => {

  return (
    <>
      <HeadPage meta={meta} />
      {meta && (
        <Head>
          <script type='application/ld+json'>
            {`{
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Escuela Americana de Innovación',
              image:
                'https://www.eai.edu.pe/wp-content/themes/eai/assets/img/log_color.svg',
              '@id': 'https://www.eai.edu.pe/',
              url: ${meta.domain},
              telephone: ${meta.phone},
              address: {
                '@type': ${meta.address && meta.address.type},
                streetAddress: ${meta.address && meta.address.street},
                addressLocality: ${meta.address && meta.address.locality},
                postalCode: ${meta.postalCode},
                addressCountry: ${meta.country}
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Friday',
                    'Thursday',
                    'Wednesday',
                    'Tuesday',
                    'Monday'
                  ],
                  opens: '09:00',
                  closes: '17:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '12:00'
                }
              ]
            }`}
          </script>
        </Head>
      )}
      <HomeCover />
      <section>
        <Container>
          <Article title='cursos de especialización'>
            <ListCourses limit={8} />
            <Link href='/cursos'>
              <CourseBtnContent>
                <CoursesBtn>Ver todos los cursos</CoursesBtn>
              </CourseBtnContent>
            </Link>
          </Article>
          <Article title='¿cómo funcionan nuestros cursos?'>
            <ListWork />
          </Article>
        </Container>
        <Slogan />
        <Comunicate />
        <Container>
          <Article title='Convenios'>
            <ListAgreements setHome={true} />
          </Article>
          <Article title='Opciones de reclutamiento'>
            <Recruitment />
          </Article>
          <Article title='Nuestros alumnos' setHomeRecruit>
            <ListTestimonials setHome={true} />
          </Article>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Home
