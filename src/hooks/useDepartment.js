import { useState, useEffect } from "react";
import DepartamentoService from "../service/DepartamentoService";

const useDepartment = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [error, setError] = useState(null);

  const fetchDepartamentos = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await DepartamentoService.getDepartment(token);
      setDepartamentos(response);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartamentos();
  }, []);
  return { departamentos, error };
};
export default useDepartment;