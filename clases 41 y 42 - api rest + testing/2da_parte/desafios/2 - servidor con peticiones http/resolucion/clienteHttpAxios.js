import axios from 'axios'

// const url = 'http://localhost:8080'

const baseURL = 'https://jsonplaceholder.typicode.com/'
axios.defaults.baseURL = baseURL

const url = '/todos/1'

// axios(url)
//   .then(response => {
//     // Obtenemos los datos
//     let fyh = response.data
//     console.log(fyh)
//   })
//   .catch(error => {
//     console.log(error)
//   })

try {
  const { data: elTodo } = await axios(url)
  // Obtenemos los datos
  console.log(elTodo)
  // let fyh = response.data
  // console.log(fyh)
} catch (error) {
  console.log(error)
}
