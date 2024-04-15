import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBook = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/Library")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3001/Library/"+id)
        .then((response)=>{
          alert("Book Deleted")
          window.location.reload(false)
        }).catch((err)=>console.log(err))
    }

  return (
    <div>
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Published Year</TableCell>
                <TableCell>author</TableCell>
                <TableCell>Book Rate</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.bname}</TableCell>
                        <TableCell>{val.byear}</TableCell>
                        <TableCell>{val.author}</TableCell>
                        <TableCell>{val.brate}</TableCell>
                        <TableCell>
                        <Button
                        size="small" 
                        variant='contained' 
                        color='warning'>
                        Update
                        </Button>
                        &nbsp; &nbsp;
                        <Button 
                        onClick={()=>deleteValue(val.id)} 
                        size="small" 
                        variant='contained' 
                        color='secondary'>
                        Delete
                        </Button>
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>
    </div>
  )
}

export default ViewBook
