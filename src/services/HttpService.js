import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.interceptors.response.use(
    null,
    error => {
        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            enqueueSnackbar("An unexpected error occurred.", { variant: 'error' });
        }
 
        return Promise.reject(error);
    }
);

const axiosOperatons = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
export default axiosOperatons;