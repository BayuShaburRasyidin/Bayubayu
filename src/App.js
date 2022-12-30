import { useState } from "react";
 import "./App.css";
import List from "./List";
import {uid} from "uid";
// import {usefrom} from "react-hook-from";


// register('test')


function App() {
  const [Contacts, setContacts] = useState([
    {
      id: 1,
      name: "luffy ",
      absen: "1"
    },
    
    {
      id: 2,
      name: "Monkey ",
      absen: "2"
    }
    
]);

  const [isUpdate, setIsUpdate] = useState({id: null, status: false});

const [fromData, setFromData] = useState({name: "", absen: ""});
    function handleChange(e){
      let data = { ...fromData};
      data[e.target.name] = e.target.value;
      setFromData(data);
    }
  function handleSubmit(e){
    e.preventDefault();
    alert("Tulis nama dan No absen  mu dengan benar. 'Teliti lagi !'");
    let data = [...Contacts];

    if(isUpdate.status){
      data.forEach((Contact) => {
        if (Contact.id === isUpdate.id){
          Contact.name = fromData.name;
          Contact.absen = fromData.absen;
        }
      });
   }else{
      data.push({ id: uid(), name: fromData.name, absen: fromData.absen});


    }
    setIsUpdate({ id: null,status: false});
     setContacts(data);
     setFromData({name: "",absen: ""});
    
    }

   
    
    function handleEdit(id) {
      let data = [...Contacts];
      let foundData = data.find((contact) => contact.id === id);
      setFromData({ name: fromData.name, absen: foundData});
      setIsUpdate({ id: id, status: true});
    }
    function handleDelete(id){
      let data = [...Contacts];
      let filteredData = data.filter((contact) => contact.id !== id);
      setContacts(filteredData); 
    }
  return (
    <div className="App border">
      <h1 className="px-3 py-3">From data siswa </h1>

      <form onSubmit={handleSubmit}
       className="px-3 py-4">
        <div className="form-group ">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control"
          value={fromData.name} 
           onChange={handleChange}  
             name="name" />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No absen</label>
          <input type="text" 
          value={fromData.absen}
          onChange={handleChange} 
          className="form-control"
           name="absen" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Simpan
          </button>
        </div>
      </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={Contacts} />
    </div>
  );
}

export default App;
