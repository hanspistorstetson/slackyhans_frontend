import api from '../api';

export function fetchFriends() {
  return dispatch => api.fetch('/users/all').then((response) => {
    dispatch({ type: 'FETCH_FRIENDS', response });
  });
}
