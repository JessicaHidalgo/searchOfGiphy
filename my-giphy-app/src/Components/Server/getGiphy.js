const axios = require('axios')
//Define an async function to get the data using axios
 function getGiphy(gifname){
   
    const response =  axios.get('http://api.giphy.com/v1/gifs/search',{params:{
      q:gifname, api_key :'nJ61VQellwL2APoHnuC20pLXFOFF20VW', limit :10
    }}).then(function (response){
      console.log(response.data)
      return response
    })

  
}
//Export the function
module.exports={
    getGiphy
 }