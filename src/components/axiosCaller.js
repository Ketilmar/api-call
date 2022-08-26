import axios from "axios";
import React, { useEffect, useState } from "react";
import "./axiosCaller.css";

const UsingAxios = () => {
  const [cats, setUsers] = useState([]);

  const fetchData = () => {
    axios.get("https://catfact.ninja/facts").then((response) => {
      setUsers(response.data);
      //   console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let page = cats.data.map((facts, index) => {
    return <li key={index}>{facts.fact}</li>;
  });
  console.log(page);

  console.log(cats);
  return <div className="result-body">{page}</div>;
};

export default UsingAxios;

// {cats.data.map((facts, index) => {
//     <li key={index}>{facts.fact}</li>;
//   })}

// {cats.data > 0 && (
//     <ul>
//       {cats.map((catFacts) => (
//         <li key={catFacts.id}>{catFacts.name}</li>
//       ))}
//     </ul>
//   )}
