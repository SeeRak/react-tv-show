import axios from "axios"
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {

    static async fetchPopulars(){
       const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}&language=fr`);
       return response.data.results;
    }
    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}&language=fr`);
        return response.data.results;
    }
    static async fetchByTitle(tvShowTitle){
        const response = await axios.get(`${BASE_URL}/search/tv${API_KEY_PARAM}&query=${tvShowTitle}&language=fr`);
        return response.data.results;
     }
}