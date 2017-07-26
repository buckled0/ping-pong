import axios from 'axios';

const getPlayerApi = {
  get:() => (
    axios.get('http://localhost:8000/players').then((response) => (
       response
    ))
  )
};

export default getPlayerApi;
