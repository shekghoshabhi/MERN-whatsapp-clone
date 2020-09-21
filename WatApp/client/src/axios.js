import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseurls : "http://localhost:9000"
})
export default instance