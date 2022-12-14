import axios from "axios";

export default class PostService {
    static async getAllData() {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return response.data;
    }
}
