import axios from "axios";

class DepartamentoService{
    static BASE_URL = "http://localhost:8088/api/adm/departamento"

    static async getDepartment(token){
        try{
            const response = await axios.get(`${DepartamentoService.BASE_URL}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


}
export default DepartamentoService