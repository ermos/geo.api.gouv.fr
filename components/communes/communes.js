import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaTag from 'react-icons/lib/fa/tag'
import FaCompass from 'react-icons/lib/fa/compass'
import FaSlider from 'react-icons/lib/fa/sliders'
import FaList from 'react-icons/lib/fa/list'

import Summary from '../summary'
import TechnicalDoc from '../technical-doc/technical-doc'

import ByCode from './examples/by-code'
import ByName from './examples/by-name'
import CommunesList from './examples/communes-list'
import ByLatLon from './examples/by-lat-lon'
import AdvancedSearch from './examples/advanced-search'

import doc from './doc'

const examples = [
  {title: 'Recherche par code postal', id: 'postal-code', icon: <FaEnvelope />},
  {title: 'Recherche par nom', id: 'name', icon: <FaTag />},
  {title: 'Liste de communes', id: 'communes-list', icon: <FaList />},
  {title: 'Recherche géographique', id: 'geo', icon: <FaCompass />},
  {title: 'Recherche avancée', id: 'advanced', icon: <FaSlider />}
]

const Communes = () => (
  <div>
    <Summary examples={examples} />

    <TechnicalDoc {...doc} />

    <ByCode {...examples[0]} />
    <ByName {...examples[1]} />
    <CommunesList {...examples[2]} />
    <ByLatLon {...examples[3]} />
    <AdvancedSearch {...examples[4]} />

  </div>
)

export default Communes