export default function setupAxios(axios) {
  axios.defaults.baseURL = "http://localhost:8000";

  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if (error && error.response && 401 === error.response.status) {
      //   store.dispatch({ type: actionTypes.Logout });
      // }
      return Promise.reject({ ...error });
    }
  );
}
