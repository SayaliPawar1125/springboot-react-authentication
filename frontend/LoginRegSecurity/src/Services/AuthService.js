import axios from "axios";
const API_URL = 'http://localhost:8080/api/v1'; 
class AuthService
{
    register(user){
        return axios.post(API_URL+"/register",user)
    }
    login(credential){
                return axios.post(API_URL+"/login",credential)

    }
}
export default new AuthService;