// import logo from './logo.svg';
import './App.css';
import './userdetails.css'
import Home from './Home';
import {BrowserRouter, Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/userdetails/:id" component={UserDetails} />
    </BrowserRouter>
  );
}

// import {useState, useEffect} from "react";

// function App() {
//   const[userData, setuserData] = useState([]);

//   const url = "https://jsonplaceholder.typicode.com/users"

//   useEffect(() => {
//     fetch(url).then((response) => response.json())
//     .then((userData) => setuserData(userData));
//   },[]);

//   return (
//     // <div className="App">
//     <>
//       <ul className="outbox">
//         {userData.map(el => (
//           <section className="box">
//             <button className="f" key={el.id}>{el.name.charAt(0)}</button>
//             <h2 className = "h" key={el.id}>{el.name}</h2>
//             <p className = "p" key={el.id}>@{el.username}</p>
//             <span className ="e" key={el.id}>http://{el.email}</span>
//             <br></br>
//             <p>
//               <button className="button">MORE DETAILS</button>
//             </p>
//           </section>
//         ))}
//       </ul>
//       {/* <h1>Hello</h1> */}
//     </>
//   );
// }

// export default App;
