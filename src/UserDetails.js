import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import './userdetails.css'
// import './App.css'

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
    <div className="ob">
        {/* this.setuserData = userData */}
        <section className="b">
            <ul className="ul">
                    <li> Name: {userData.name} </li>
                    <li> UserName:{userData.username}</li>
                    <li> Email:{userData.email}</li>
                    <li> Phone:{userData.phone}</li>
                    <li> Company:{userData?.company?.name}</li>
                    <li> Website:{userData.website}</li>
                    <li>Address:</li>
                    <ul>
                        <li>Street:{userData?.address?.street}</li>
                        <li>Suite:{userData?.address?.suite} </li>
                        <li>City:{userData?.address?.city} </li>
                        <li>Zipcode:{userData?.address?.zipcode} </li>
                    </ul>
                </ul>
        </section>
    </div>

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
