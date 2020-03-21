const axios = require('axios')
//Define an async function to get the data using axios
 async function getGiphy(gifname){
   
    const response = await axios.get('http://api.giphy.com/v1/gifs/search',{params:{
      q:gifname, api_key :'nJ61VQellwL2APoHnuC20pLXFOFF20VW', limit :10
    }})

    console.log(response)
      
      return response.data
  

  
}
//Export the function
module.exports={
    getGiphy
 }