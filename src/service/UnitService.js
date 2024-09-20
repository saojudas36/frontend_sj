import axios from "axios";

class UnitService{
    static BASE_URL = "http://localhost:8088/api/adm/unidade/"
    static async getUnit(token){
        try{
            const response = await axios.get(`${UnitService.BASE_URL}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
}
export default UnitService