import React, {useState, useEffect} from 'react';
import { fetchCustomers } from '../api/user.api';

export default ViewCustomers = () =>{
    const [customers, setCustomers] = useState([])
    const role = 'customer'
    useEffect(() =>{
        getCustomers()
    },[])

    const getCustomers = () =>{
        fetchCustomers(role).then((res) =>{
            setCustomers(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    }

    return(
        <div>
            <h2>View Customers</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </thead>
                <tbody>
                        {
                            customers.map((row) =>(
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.phone}</td>
                                    <td>{row.email}</td>
                                </tr>
                            ))
                        }    
                </tbody>
            </table>
        </div>
    )
}