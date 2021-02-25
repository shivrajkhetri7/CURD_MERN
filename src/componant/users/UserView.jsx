import axios from "axios";
import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";

const UserView=()=>{
    const {id} =useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        mobile:""
    });
    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser = async()=>{
        const result = await axios.get(`http://localhost:8000/users/${id}`);
        setUser(result.data);
    }
    return(
        <>
        <h1>View data</h1>
        <table className="border shadow">
            <tbody className="show-skipped">
                <tr>
                    {user.name}
                </tr>
                <tr>
                    {user.username}
                </tr>
                <tr>
                    {user.email}
                </tr>
                <tr>
                    {user.mobile}
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default UserView;