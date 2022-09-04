import axios from 'axios'

// axios.defaults.baseURL = 'https://bymmc.shop/'
axios.defaults.baseURL = 'http://localhost:8000/'

// axios.defaults.headers.common = {
//     "Authorization": `Bearer ${localStorage.getItem('token')}`
// }
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;