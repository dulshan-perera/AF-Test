import React, { useState } from 'react'
import { createList } from '../api/wishList.api';

export default CreateList = () =>{
    const [list, setList] = useState({
        id:"",
        name:"",
        items:[]
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        let listId = new Date().getTime().toString(36);
        list.id = listId;
        createList(list).then((res) =>{
            console.log(res)
            window.location=`/inventory/:cartid/${listId}`
        }).catch((error) =>{
            console.log(error)
        })
    }

    return(
        <div>
            <h2>Create List</h2>
            <form>
                <label>Enter List name</label>
                <input type="text" name='name' value={list.name} onChange={(e) => setList({...list, name:e.target.value})}/> <br/>
            
                <button type='submit' onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}