import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://www.mei.com' //基本的url
})

export { instance }