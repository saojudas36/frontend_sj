import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfo } from "../store/reducers/profileInfo";

export default function useProfileInfo() {
  const dispatch = useDispatch();
  const { profileInfo, status, error } = useSelector((state) => state.profile);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchProfileInfo(token));
    }
  }, [dispatch, token]);
  return { profileInfo, status, error };
}
