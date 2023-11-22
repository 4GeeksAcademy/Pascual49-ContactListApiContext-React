import React, {useContext, useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ProfilePic from "../../img/rigo-baby.jpg";


export const ContactInfo = () => {
  const { store, actions } = useContext(Context);
  const [agenda, setAgenda] = useState("");

  useEffect(() => {
    actions.getContact();
    //console.log(store.agendas);

  }, [agenda, contact]);

  return (
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

            <h5>Nombre: {contact} </h5>
            
          </div>

        </div>
      </div>
  );
};