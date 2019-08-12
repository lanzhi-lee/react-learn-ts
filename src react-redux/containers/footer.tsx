import Footer from '../components/footer'
import { connect } from 'react-redux'
import { clearAll } from '../redux/actions'

export default connect(() => ({}), { clearAll })(Footer)