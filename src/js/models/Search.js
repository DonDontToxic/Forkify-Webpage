// TESTING PURPOSE
// export default 'I am an exported string.';


// PROJECT CODE START
import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

}





// Note: 
// Using axios rather than fetch cause:
// 1. Usable in most of browsers
// 2. Better error handling
// 3. Automaically convert returned data to JSON