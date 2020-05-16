import axios from "axios"

let siAxios = axios.create({
    timeout:60000,
})

export default siAxios