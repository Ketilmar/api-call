import axios from "axios";
import React, { useEffect, useState } from "react";
import "./axiosCaller.css";

const UsingAxios = ({ tabtext }) => {
  const [cats, setState] = useState([]);

  const fetchData = () => {
    axios.get("https://catfact.ninja/facts").then((response) => {
      setState(response.data.data); // slet en stund her og skrev om stort sett alt, da jeg satt setState til et object (response.data) i stedet for et array (response.data.data)
      console.log(response);
    });
  };

  // only reason i see to use useEffect here, is to control when fetchData runs (ie at initial rendering). Else It will loop forever because it is used with useState
  useEffect(() => {
    fetchData();
    document.title = `${tabtext}`;
  }, []);

  // console.log(cats);

  let page = cats.map((facts, index) => {
    return <li key={index}>{facts.fact}, </li>;
  });

  return <div className="result-body">{page}</div>;
};

export default UsingAxios;
