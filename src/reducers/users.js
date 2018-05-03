const initialState = {
  friends: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FRIENDS':
      return {
        ...state,
        friends: action.response.data,
      };
    default:
      return state;
  }
}
