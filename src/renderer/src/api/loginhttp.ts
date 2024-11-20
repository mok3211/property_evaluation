import request from "@api/httpRequest";

export async function doLogin(data: any){
    request('post', '/login',data).then(data=>{
        return data;
    }).catch(error=>{
        return error;
    })
}

export async function register(data: any) {
    request('post', '/register', data).then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}

export async function changePassword(data: any) {
    request('post', '/changePassword', data).then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}

export async function resetPassword(data: any) {
    request('post', '/resetPassword', data).then(data => {
        return data;
    }).catch(error => {
        return error;
    })
}