// 存查删 token

const setToken = (token) => {
  return localStorage.setItem('token-aa', token);
};

const getToken = () => {
  return localStorage.getItem('token-aa');
};

const removeToken = () => {
  return localStorage.removeItem('token-aa');
};

export { setToken, getToken, removeToken };
