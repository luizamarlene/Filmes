import axios from 'axios';

 //url FILMES EM CARTAZ
 // https://api.themoviedb.org/3/movie/now_playing? api_key=58404230a27778a7abaf531cfbfa3a62&language=pt-BR&page=1

export const key = '58404230a27778a7abaf531cfbfa3a62';
const api = axios.create({
     baseURL : ' https://api.themoviedb.org/3' //nunca muda
 })
 export default api;