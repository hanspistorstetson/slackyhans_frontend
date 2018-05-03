// @flow
import React, { Component } from 'react';
import {
    connect,
} from 'react-redux';
import {
    Link,
} from 'react-router';
import {
    css,
    StyleSheet,
} from 'aphrodite';

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    height: '70px',
    background: '#fff',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
  },

  link: {
    color: '#555459',
    fontSize: '22px',
    fontWeight: 'bold',
    margin: 'auto',
    ':hover': {
      textDecoration: 'none',
    },
    ':focus': {
      textDecoration: 'none',
    },
  },

  user: {
    alignSelf: 'flex-end',
  },
});

type Props = {
  currentUser: Object
}

class Navbar extends Component {
  props: Props

  render() {
    return (<nav className={css(styles.navbar)} >
      <Link to="/" className={css(styles.link)}> Slacky-Hans </Link>
      {Object.keys(this.props.currentUser).length !== 0 && <Link to="/me"className={css(styles.link)}> {this.props.currentUser.username} </Link>}
    </nav >
    ); }

  }


export default connect(
    state => ({
      currentUser: state.session.currentUser,
    }), {}
)(Navbar);
