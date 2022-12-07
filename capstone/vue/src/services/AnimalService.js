import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:9000",
});

export default {

  getAnimals() {
    return http.get('/pets');
  },

  getAnimal(petID) {
    return http.get(`/pets/${petID}`)
  }

}
