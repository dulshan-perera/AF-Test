import React, { useEffect, useState } from 'react'
import {useMatch} from 'react-router-dom';
import { fetchList } from '../api/wishList.api';

export default ViewList = () =>{
    const [items, setItems] = useState([]);
    const match = useMatch('/list/:id');
    const listId = match.params.id;

    useEffect(() =>{
        listItems();
       console.log(items)
    },[])

    const listItems = () =>{
        fetchList(listId).then((res) =>{
            const data = res.data;
            setItems(data.items)
    
        }).catch((err) =>{
            console.log(err)
        })
    }

    return(
        <div>
            <h2>View Wish List</h2>
            <h4>LIST ID: {listId}</h4>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                        {
                            items.map((row) =>(
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                </tr>
                            ))
                        }    
                </tbody>
            </table>
        </div>
    )
}