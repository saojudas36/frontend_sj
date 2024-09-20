import { useEffect, useState } from "react";
import UnitService from "../service/UnitService";

const useUnit = () => {
  const [units, setUnits] = useState([]);
  const [error, setError] = useState(null);

  const fetchUnit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UnitService.getUnit(token);
      setUnits(response);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnit();
  }, []);

  return { units, error };
};
export default useUnit