import axios from "axios";

// export default axios.create({
//     baseURL:'/',
//     headers:{'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin": "http://127.0.0.1:3500",
// },
//     withCredentials : true,
    
// })


export default axios.create({
    baseURL:'/',
    withCredentials : true,
    
})

