import { useState } from "react";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";


export const getItems = async () => {
    
    let response = await axios.get(`${BASE_URL}/items`).then((r)=> r.data)
    
    
    // return Data
}

