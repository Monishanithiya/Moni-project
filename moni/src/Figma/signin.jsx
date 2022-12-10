import React,{useState} from 'react';
import Button from '@mui/material/Button';
import {Button} from '@material-ui/core/Button';


export default function Signin()
{
    return 
    {
      functioncustomMe()
      {
        alert("function called")
      }
      const[color,setcolor]=useState('primary')
      return (
        <div className="App">
          <h1>Sign up for free music</h1>
          <Button color={color}
          variant="contained"
          onClick={()=>customMe}
        >Signup</Button>
        </div>
      );
    }  
}










