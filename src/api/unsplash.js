import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',

    headers:{
        Authorization: 
        'Client-ID U3MkMtC24XNHUe1zal9clTuYOyMnY_8Q6g3EFzuwpF4'
    }
})