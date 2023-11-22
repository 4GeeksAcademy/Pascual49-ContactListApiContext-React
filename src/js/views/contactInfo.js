import React, {useContext, useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ProfilePic from "../../img/rigo-baby.jpg";


export const ContactInfo = () => {
  const { store, actions } = useContext(Context);
const params = useParams()
  const[contact, setContact]=useState(null)

  useEffect(()=>{
      setContact(actions.getContact(params.id))
  },[])

  // console.log(params.id)


  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border border-dark rounded p-4">
        <div className="row d-flex align-items-center">
          <div className="col-flex justify-content-center mb-3 mb-md-0">
            <img
              className="photoprofile rounded-circle"
              src={ProfilePic}
              alt="ProfilePic"
              style={{width: '150px', height: '150px'}}
              
            />
          </div>
          <div className="col">
            <h5>Name: {params.id}</h5>
            <p>Address: {params.id}</p>
            <p>Phone: {params.phone}</p>
            <p>Email: {params.email}</p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};