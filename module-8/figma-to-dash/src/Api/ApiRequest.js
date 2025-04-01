import axios  from "axios"

const BaseUrl = "//inertia-pos.manirul.xyz/api" ;


export async function cardList() {
    let res = await axios.get(BaseUrl+"/card-list");
    if(res.status === 200){
        return res.data ;
    }else{
        return [] ;
    }    
}

export async function weeklyActivityList() {
    let res = await axios.get(BaseUrl+"/weekly-activity-list");
    if(res.status === 200){
        return res.data ;
    }else{
        return [] ;
    }    
}

