import Api from './Api';

export default {
  login(credentials) {
    return Api.user.login(credentials);
  },
};
