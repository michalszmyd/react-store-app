export function updateCsrfToken (token) {
  return {
    type: 'updateCsrfToken',
    payload: { csrfToken: token }
  }
}
