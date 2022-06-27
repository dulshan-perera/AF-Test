import React, { useState } from 'react';
import { addPromotion } from '../api/promotion.api';

export default AddPromotion = () =>{
    const [promotion, setPromotion] = useState({
        name:"",
        description:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        addPromotion(promotion).then((res) =>{
          console.log(res.data)
          window.location = '/promotions'
        }).catch((err) =>{
            console.log(err);
        })
    }

    return(
        <div>
            <h2>Add Promotion</h2>
            <form>
                <label>Enter Promotion name</label>
                <input type="text" name='name' value={promotion.name} onChange={(e) => setPromotion({...promotion, name:e.target.value})}/> <br/>
                <label>Enter Promotion Description</label>
                <input type="text" name="description" value={promotion.description} onChange={(e) => setPromotion({...promotion, description:e.target.value})}/> <br/>
                
                <button type='submit' onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}