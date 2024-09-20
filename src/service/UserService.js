import axios from "axios";

class UserService{
    static BASE_URL = "http://localhost:8088"

    static async login(email, senha){
        try{
            const response = await axios.post(`${UserService.BASE_URL}/api/public/login`, {email, senha})
            return response.data;

        }catch(err){
            throw err;
        }
    }
    static async getYourProfile(token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/api/me`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getUsers(token){
        try{
            const response = await axios.get(`${UserService.BASE_URL}/api/adm/Colaboradores`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${UserService.BASE_URL}/api/adm/Colaborador/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async register(userData) {
        try {
          const response = await axios.post(`${UserService.BASE_URL}/api/public/register`, userData);
          return response.data;
        } catch (err) {
          throw err;
        }
      }


    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }
}
export default UserService
