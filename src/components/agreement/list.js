import AgrementItem from './item'

import { Agreements } from './styles'

const ListAgrements = ({ agreements, loading, all, setHome }) => {
  if (loading) {
    return <span>cargando...</span>
  }
  return (
    <Agreements setHome={setHome}>
      {agreements.map(agreement => (
        <AgrementItem
          key={agreement._id}
          {...agreement}
          all={all}
          setHome={setHome}
        />
      ))}
    </Agreements>
  )
}

export default ListAgrements
