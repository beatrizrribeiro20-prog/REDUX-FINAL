import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchUsers,
  deleteUser,
} from '../redux/actions';

import UserListScreen from './UserListScreen';

function UserListContainer(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return <UserListScreen {...props} />;
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer);