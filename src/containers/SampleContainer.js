import { connect } from 'react-redux';
import SampleComponent from '../components/SampleComponent';

const mapStateToProps = state => state.counter;

const SampleComponentContainer = connect(mapStateToProps)(SampleComponent);

export default SampleComponentContainer
