import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Pantry from './pantry';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  ingredients: state.users.ingredients || []
})

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pantry);