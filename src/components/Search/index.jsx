import React, { useEffect } from "react";
import styles from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearSearch, updateSearch } from "../../store/reducers/search";
export default function Search() {
  const dispath = useDispatch();
  const search = useSelector((state) => state.search);
  const location = useLocation();
  
  useEffect(()=>{
    dispath(clearSearch())
  },[location.pathname, dispath])
  return (
    <div className={styles.search}>
      <input type="text" value={search} onChange={(e)=>dispath(updateSearch(e.target.value))} />
    </div>
  );
}
