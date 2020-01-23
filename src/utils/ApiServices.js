import axios from 'axios';

let api = {};
var BASE_URL = `http://appdev.psdtohubspot.com`;
api.BASE_URL = BASE_URL;


api.get = (url,token='') => {
  let headers = {
    'Authorization': token
  }
  return new Promise(function (resolve, reject) {
    axios.get(`${BASE_URL}/${url}`,{headers})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error)
      })
  });
}

api.post = (url,body,token='') => {
  return new Promise(function (resolve, reject) {
    axios.post(`${BASE_URL}/${url}`, body, {headers: {'Accept': 'application/json','Authorization': token || undefined,}})
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      reject(error)
    });
  });
}


export default api;
