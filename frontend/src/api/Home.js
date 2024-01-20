import { BASE_URL } from "../utils/Constants";
import axios from "axios";


export const getItems = async () => {
    
    return axios.get(`${BASE_URL}/goals`).then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('AxiosError:', error);
      })
}

