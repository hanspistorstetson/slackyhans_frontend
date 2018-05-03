// @flow
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchFriends } from '../../actions/users';
import UserListItem from '../../components/UserListItem';


const styles = StyleSheet.create({
  card: {
    maxWidth: '500px',
    padding: '3rem 4rem',
    margin: '2rem auto',
  },
});

type Props = {
  friends: Array<User>,
  fetchFriends: () => void,
}


class UserInfo extends Component {

  componentWillMount() {
    this.props.fetchFriends();
  }

  props: Props


  renderFriends() {
    return this.props.friends.map(user =>
      <UserListItem key={user.id} user={user} />
    );
  }

  render() {
    return (
      <div className={`card ${css(styles.card)} `}>
        <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Friends</h3>
        {this.renderFriends()}
      </div>
    );
  }

}

export default connect(
  state => ({
    rooms: state.rooms.all,
    friends: state.users.friends,
  }), { fetchFriends }
)(UserInfo);
