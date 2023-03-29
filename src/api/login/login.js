import request from '../../utils/request';
export const login = (username, password) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
};
