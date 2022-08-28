import axios from "axios";
import React, { useEffect, useState } from "react";
import "./axiosCaller.css";

const UsingAxios = () => {
  const [cats, setState] = useState([]);

  const fetchData = () => {
    axios.get("https://catfact.ninja/facts").then((response) => {
      setState(response.data.data); // slet en stund her da jeg satt et objekt til setState (response.data) i stedet for et array (response.data.data)
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let page = cats.map((facts, index) => {
    return <li key={index}>{facts.fact}, </li>;
  });

  // console.log(page);
  // console.log(cats);

  return <div className="result-body">{page}</div>;
};

export default UsingAxios;
