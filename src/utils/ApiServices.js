import axios from 'axios';

let api = {};
var BASE_URL = `http://localhost:3000`;
api.BASE_URL = BASE_URL;

api.post = (url,body) => {
  return new Promise(function (resolve, reject) {
    axios.post(`${BASE_URL}${url}`, {},{params:body})
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      reject(error)
    });
  });
}


export default api;
