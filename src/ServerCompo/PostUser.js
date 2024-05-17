import React,{useState} from "react";

function ControledCompo(){

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
    
        const Submit = () => {

            if(inputs.role=='' || inputs.id=='' || inputs.name==''){
                alert("Enter all the details")
            }
            else {
                fetch('https://fserver-1.onrender.com/dbinsert', {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(inputs) // for sending Json
                    

                })
                //Reciving data which is sent by server in that route ('/postuser') after sending data.
                .then( (res) => {return res.text()})
                .then( (data) => { console.log(data)})
                .catch(err => console.log(err))
            }

        }
    
        return(
            <React.Fragment>

                <center >
                    <label>ID    : <input type='number' name="id" onChange={changeValues} value={inputs.id}/></label>  <br/><br/>
                    <label>Name : <input type='text' name="name" onChange={changeValues} value={inputs.name}/></label>  <br/><br/>
                    <label>Role : <input type='text' name='role' onChange={changeValues} value={inputs.role} /></label><br/><br/>
                    <button type="submit" onClick={Submit} >Submit</button>

                </center>
            </React.Fragment>
        )
}

export default ControledCompo; 
