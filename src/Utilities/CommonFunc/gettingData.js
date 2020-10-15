import axios from 'axios'
export const FinalProjectData = async (link)=>{
    await axios.get(link)
    .then(response=>{
        return response.data[0]["finalApi"]
    })
    .catch(err=>{
        console.log(err)
    })
}