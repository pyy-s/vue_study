import request from './request'

interface loginData {
    user: string;
    pwd: string;
}
export function login(data: loginData) {
    return request(`/ShopLogin?user=${data.user}&pwd=${data.pwd}`, {
        method: 'get'
    })
}