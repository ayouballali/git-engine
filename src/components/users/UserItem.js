import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import User from './user';

export default function UserItem(props) {
const [user,setUser] = useState({})
const {login} = useParams()
    useLayoutEffect(() => {
        
        

        axios.get(`https://api.github.com/users/${login}`)
            .then(response=>{
                console.log(response.data);
                setUser(response.data)
            })
      }, []);

  return (
    <div>
        <User user={user}/>
    </div>
  )
}
