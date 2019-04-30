export default function csrfTokenReducer (state = {}, action) {
  if (action.type === 'updateCsrfToken') {
    return action.payload.csrfToken;
  }

  return state;
}
