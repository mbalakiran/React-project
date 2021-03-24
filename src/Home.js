import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import UserDetails from "./UserDetails";
// import './App.css';

export default function Home() {
  const [userData, setuserData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    fetch(url).then((response) => response.json())
    .then((userData) => setuserData(userData));
  },[]);

  return (
    // <div className="App">
    <>
      <ul className="outbox">
        {userData.map((el) => (
          <section className="box">
            <button className="f" key={el.id}>{el.name.charAt(0)}</button>
            <h2 className = "h" key={el.id}>{el.name}</h2>
            <p className = "p" key={el.id}>@{el.username}</p>
            <span className ="e" key={el.id}>http://{el.email}</span>
            {/* <p key={el.id}>{el.address.street} </p> */}
            <br></br>
            <p>
                <Link to={`/userdetails/${el.id}`}>
                    <button className="button">
                        MORE DETAILS
                    </button>
                </Link>
            </p>
          </section>
        ))}
      </ul>
      {/* <h1>Hello</h1> */}
    </>
  );
}
