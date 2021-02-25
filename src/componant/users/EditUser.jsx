import axios from "axios";
import React,{useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";
 const EditUser =()=>{
     let history = useHistory();
     const {id} =useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        mobile:""
    });

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    useEffect(()=>{
        loaduser();
    },[]);
    const onSubmit= async e =>
{
    e.preventDefault();
    const ressult = await axios.put(`http://localhost:8000/users/${id}`,user);
    history.push("/");

}   

const loaduser = async()=>{
    const result = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(result.data);
}
 return(
        <>
        <div className="container">
        <h1 className="text-center">Edit User User</h1>
        <form action="#" method="post" onSubmit={(e)=> onSubmit(e)}>
            <div class="form-group">
              <input type="text" name="name" id="name" class="form-control" placeholder="Name"
              value={user.name}
              onChange={e=> onInputChange(e)}/>
            </div>
            <div class="form-group">
              <input type="text" name="username" id="username" class="form-control" placeholder="Username"
               value={user.username} 
               onChange={e=> onInputChange(e)}/>
            </div>
            <div class="form-group">
              <input type="text" name="email" id="email" class="form-control" placeholder="Email"
               value={user.email}
               onChange={e=> onInputChange(e)} />
            </div>
            <div class="form-group">
              <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Mobile Number"
               value={user.mobile}
               onChange={e=> onInputChange(e)}/>
            </div>
            <button className="btn btn-outline-warning"  >Update User</button>
        </form>
        </div>
        </>
    )
 }
 export default EditUser;