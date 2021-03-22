export function getAuthToken() {
  const tokenDataString = localStorage.getItem('token');
  const token = tokenDataString ? JSON.parse(tokenDataString) : '';
  return token as string;
}
