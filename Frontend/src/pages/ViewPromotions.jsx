import React, {useState, useEffect} from 'react' ;
import { fetchPromotions } from '../api/promotion.api';

export default ViewPromotions = () =>{
    const [promotions, setPromotions] = useState([]);

    useEffect(() =>{
        getPromotions()
    }, [])

    const getPromotions = () =>{
        fetchPromotions().then((res) =>{
            setPromotions(res.data)
        }).catch((err) =>{
            console.log(err);
        })
    }   

    return (
        <div>
            <h2>Promotions</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Description</th>
                </thead>
                <tbody>
                        {
                            promotions.map((row) =>(
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.description}</td>
                                </tr>
                            ))
                        }    
                </tbody>
            </table>
        </div>
    )
}