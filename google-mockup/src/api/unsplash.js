import axios from 'axios'; //Axios package will let us make AJAX requests to Unsplash API

export default axios.create({ //Creates instance of customizable axios client 
    baseURL: 'https://api.unsplash.com',
    headers: {
        //Access Key from Unsplash API
        Authorization: 
        'Client-ID 144c89ed9508de14b2b9fe6e4734482b5ee16e7c18a626cfff0a3474344d808f'
    }
})