export function updateUser (user) {
  return {
    type: 'updateUser',
    payload: { user: user }
  }
}
