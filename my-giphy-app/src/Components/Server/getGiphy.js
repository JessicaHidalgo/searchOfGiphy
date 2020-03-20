import axios from 'axios';
//Define an async function to get the data using axios
async function getGiphy(gifname){
   
    const response = await axios.get(`"http://api.giphy.com/v1/gifs/search?q=${gifname}&api_key=
    nJ61VQellwL2APoHnuC20pLXFOFF20VW&limit=5"`)

    console.log(response)

    return response
}
//Export the function
export default getGiphy;