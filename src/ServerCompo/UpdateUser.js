import React, { useState,useEffect } from "react";
import styles from './server.module.css'

function Updatedata(){
    const [inp,setInp] = useState({id:''});
    //const [objdata,setObjdata] = useState([]);
    const [strdata,setStrdata] = useState();
   // const [bool,setBool] = useState('false');

    const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

   const[inputs, setInputs] = useState({
        id: '',
        name : '',
        role : '',
    })

    const changeValues = (e) => {
        const {name, value} = e.target;
        setInputs( (prev) => ({
            ...prev,
            [name] : value
        }))
    }



    useEffect(() => {


    },[])

    const changeId = (e) =>{
        const {name,value} = e.target;
        setInp( (prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const search = () => {
        //POST method to send input ID to server & then server gives us the details of that ID we passed
        fetch(`${API_BASE_URL}/updatedata`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(inp) //convering the passing Js Obj into JSON
        })
        .then((res) => {return res.text()}) //to handle text data from server
        .then((data) =>{
                //console.log(data); 
                setStrdata(data)
            })
        .catch( (err) => console.log(`Error Is : ${err}`))
        console.log(`strdata = ${strdata}`)
    }


    const Update = () =>{
        fetch(`${API_BASE_URL}/updatedata`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(inputs)
            
        })
        .then( res =>{return res.text()})
        .then((data) => {
            console.log(inputs)
        })
        .catch( err => console.log(`Error IS : ${err}`))
    }
    

    return(
        <>
            <br></br>
            <center>
                <p>Update The server Data</p>
                <label>Enter ID : <input type='text' value={inp.id} name='id' onChange={changeId}/></label>
                <button onClick={search}>Search</button><br/><br/>

                {/* Jsx To display Data which came from server and provide a input to give new value */}

                {
                    strdata
                }
                <br></br><br></br>
                <center>
                     <input className={styles.updInp} type='number' name="id" onChange={changeValues} value={inputs.id} placeholder="ID" /><br/><br/>
                     <input className={styles.updInp} type='text' name="name" onChange={changeValues} value={inputs.name} placeholder="Name"/><br/><br/>
                     <input className={styles.updInp} type='text' name='role' onChange={changeValues} value={inputs.role} placeholder="Role"/><br/><br/>
                    <button onClick={Update} className={styles.updBtn}>Update</button>  
                </center>

            </center>

            {
               ( () => {
                    if(strdata[0] != 'N'){
                        return(
                            <div>
                                <label>Change Name : <input type='text' value={inp.id} name='name' onChange={changeId}/></label>
                                <button /* onClick={update} */>Search</button><br/><br/>
                            </div>
                        )
                    }
                 }
               )
            }


        </>
    )
}

export default Updatedata;
