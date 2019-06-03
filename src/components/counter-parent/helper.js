
import axios from 'axios';

export default {
    data() {
        return {
          message: 'hello',
          foo: 'abc'
        }
      },
      methods:{
          get(url){
            return axios.get(url).then(res => Promise.resolve(res.data)).catch(res => Promise.reject(res.response));
          }
      }
}


