import React from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";



const App = () => {

  const [courses, setCourses ] = useState(null);

  useEffect( () => {
    const fetchData = async() =>{
      try{

        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data in some variable
        setCourses(output.data);

      }catch(error){
        toast.error("Somethig went wrong");
      }
    }
    fetchData();
  } , [] )

  return (
        <div>

        <Navbar/>
        <Filter
        filterData = {filterData}
        />
        <Cards courses = {courses} />

  </div>
  );
};

export default App;
