import React from "react";
// import {usefrom} from "react-hook-form";



export default function List({data, handleEdit, handleDelete}) {
  // const {register, handleSubmit} = usefrom();
  // renderCount++;

  // register('test')


  return (
    <div className="list-group">
      {
        data.map((Contact)=>{
          return(
            <div className="list-group-item list-group-item-action ">
            <div className="d-flex w-100 justify-content-between">
              <p>No Absen :</p>
              <h5 className="mb-1">{Contact.absen}</h5>
              
              <div>
                <button onClick={() => handleEdit(Contact.id)} className="btn btn-sm btn-link border">Edit</button>
                <button onClick={() => handleDelete(Contact.id)} className="btn btn-sm btn-link border">Del</button>
                
              </div>
              
            </div>
           <b>Nama:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{Contact.name}</b>
            
          
          </div>
          )
        })
      }
     
    </div>
  );
}
