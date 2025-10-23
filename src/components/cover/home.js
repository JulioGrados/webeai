import Header from '../header'
import { CreateUser } from '../../containers'

import {
  HomeTop,
  HomeTopContainer,
  HomeTopContent,
  HomeTopContentLeft,
  HomeTopContentTitle,
  HomeTopContentText,
  FormTope
} from './styles'

const HomeCover = () => {
  return (
    <>
      <HomeTop>
        <Header transparent homeNow={1} />
        <HomeTopContent>
          <HomeTopContainer>
            <HomeTopContentLeft>
              <HomeTopContentTitle>
                APRENDE CON NUESTROS CURSOS
              </HomeTopContentTitle>
              <HomeTopContentText>
                Especialízate en administración, educación, contabilidad,
                derecho, estadística e ingenería.
              </HomeTopContentText>
            </HomeTopContentLeft>
            <FormTope>
              <CreateUser />
            </FormTope>
          </HomeTopContainer>
        </HomeTopContent>
      </HomeTop>
    </>
  )
}

export default HomeCover
