import React, { useState,useEffect } from "react";

function Updatedata(){
    const [inp,setInp] = useState({id:''});
    //const [objdata,setObjdata] = useState([]);
    const [strdata,setStrdata] = useState();
   // const [bool,setBool] = useState('false');


    useEffect(() => {

       // console.log(id.id)
    },[])

    const changeId = (e) =>{
        const {name,value} = e.target;
        setInp( (prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
    
    const search = () => {
        fetch(`${API_BASE_URL}/updatedata`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(inp) //convering the passing Js Obj into JSON
        })
        .then((res) => {return res.text()})
        .then((data) =>{
                //console.log(data); 
                setStrdata(data)
            })
        .catch( (err) => console.log(`Error Is : ${err}`))
        console.log(`strdata = ${strdata}`)
    }

    

    return(
        <>
            <center>
                <p>Update The server Data</p>
                <label>Enter ID : <input type='text' value={inp.id} name='id' onChange={changeId}/></label>
                <button onClick={search}>Search</button><br/><br/>

                {/* Jsx To display Data which came from server and provide a input to give new value */}

            </center>
            {
                strdata
            }
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
