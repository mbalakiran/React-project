import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetails() {
  const [userData, setuserData] = useState([]);
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userData) => setuserData(userData));
  }, [url]);

  return (
    // <div className="App">
    <>
        {/* this.setuserData = userData */}
      <ul>
            <li> {userData.name} </li>
            <li> {userData.username}</li>
            <li> {userData.email}</li>
            <li> {userData.phone}</li>
            <li> {userData.address}</li>
            {/* <li> {userData.website}</li> */}
            {/* <li> {userData.address}</li> */}
            {/* {userData.map((el) => (
            <section>
                <h2 key={el.id}>{el.name}</h2>
                <p key={el.id}>@{el.username}</p>
                <span key={el.id}>http://{el.email}</span>
            </section> */}
        {/* {userData.map((el) => (
            <section>
                <li key={el.id}> {userData.phone}</li>
                <p key={el.id}>{el.address.street} </p>
            </section>
           ))} */}
        </ul>
    </>


    // <>
    //   <ul key={userData.id}>
    //     <li> {userData.name} </li>
    //     <li> {userData.username}</li>
    //     <li> {userData.email}</li>
    //     <li> {userData.phone}</li>
    //     {/* <li> {userData.company}</li> */}
    //     <li> {userData.website}</li>
    //     {/* <li> {userData.address}</li> */}
    //   </ul>
    // </>
  );
}
