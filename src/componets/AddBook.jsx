import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'

const AddBook = () => {
    var [inputs,setInputs] = useState({
        bname:"",
        byear:"",
        author:"",
        brate:""
    })
     const inputHandler = (e) => {
        const { name, value } = e.target
        setInputs((prevData) => ({ ...prevData, [name]: value }))
        console.log(inputs)
    }
    const addHandler = () => {
        console.log("button clicked");
        axios.post("http://localhost:3001/Library", inputs)
            .then((response) => {
                console.log(response.data)
                alert("BOOK Added")
            })
            .catch((err) => console.log(err))
    }

  return (
    <div>
      <div style={{ paddingTop: "80px" }}>
            <Typography variant='h4'>
                Add Book Details
            </Typography>
            <br /><br />
            <TextField
                label='Book Name'
                variant='outlined'
                name='bname'
                value={inputs.bname}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField label='Published Year'
                variant='outlined'
                name='byear'
                value={inputs.byear}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Author'
                variant='outlined'
                name='author'
                value={inputs.author}
                onChange={inputHandler}
            />
            <br /><br />
            <TextField
                label='Book Rate'
                variant='outlined'
                name='brate'
                value={inputs.brate}
                onChange={inputHandler}
            />
            <br /><br />
            <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button>
        </div>
    </div>
  )
}

export default AddBook
