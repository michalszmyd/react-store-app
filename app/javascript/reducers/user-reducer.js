export default function userReducer (state = {}, action) {
  if (action.type === 'updateUser') {
    return action.payload.user;
  }

  return state;
}
