import * as CounterActions from '../actions/counter';

import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) { 
  return {
    counter: state.counter   
                            
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators(CounterActions, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
