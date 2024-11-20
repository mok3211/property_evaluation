import request from '@api/httpRequest'


export async function genratorDoc(data:any){
    request("post", "/generateReport", data).then(data=>{
        return data;
    }).catch(error => {
        return error;
    })
}