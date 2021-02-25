import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home(){
    const [users,setUser] = useState([]);

    useEffect(()=>{
        loadUser();
    },[])


    const loadUser = async() =>{
      const result = await axios.get("http://localhost:8000/users");
      setUser(result.data)
    }
   
    const deleteUser = async id=>{
      await axios.delete(`http://localhost:8000/users/${id}`);
      loadUser();
    }
   
    return(
        <>
        <h1>Home Page</h1>
        <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">User</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {
            users.map((user,index)=>(
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-outline-primary m-2" to={`/users/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary m-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <Link className="btn btn-outline-primary" onClick={()=> deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
                
             ))
        }
  </tbody>
</table>
        </>
    )

}
export default Home;