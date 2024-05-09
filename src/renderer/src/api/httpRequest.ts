import axios from 'axios'

const genratorDocApi = 'http://127.0.0.1:8000/generateReport/'
export async function genratorDoc(data) {
  axios
    .post(genratorDocApi, data, {
      headers: {
        'Content-Type': 'application/json',
        'AcceptAccess-Control-Request-Method': '*'
      }
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
