export const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';
const responseCheck = (res) => (res.ok ? res.json() : Promise.reject(res));
export const getIngredients = () => {
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(responseCheck)
};