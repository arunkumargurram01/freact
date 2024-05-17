import React,{useState} from 'react'


const PostUser = () => {

    const [inp,setInp] = useState('');

    const changeInpVal = (e) => {
        setInp(e.target.value);
    }

    const jsObj = {
        name : 'Arun',
        role : 'FullStack Developer'
    }

    const sendData = () => {
        fetch('/postuser', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(jsObj) //convering the passing Js Obj into JSON
        })
        //To access specifically only the data that sent by server in the port('/postusers)
        //we need to use "res.text()" or "res.json()" etc. to recive in a supported format.
        .then( res => {return res.text()})
        .then( data => console.log(data))
        .catch(err => console.log(err))
    }
    
    return(
        <>
            <center>
                <h3>Post Method</h3>
                <p>Sending a already existed JavaScript Object <br/>in code to the server</p><br/><br/>

                <button onClick={sendData}>Send Data</button>
                {inp}
            </center>
        </>
    )
}

export default PostUser;