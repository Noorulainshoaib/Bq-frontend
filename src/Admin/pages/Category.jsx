import React, { useEffect, useState } from 'react'
import CategoryModal from "../components/CategoryModal";
import axios from 'axios'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'


export default function Category(){


 const [category,setCategory] = useState ([])

// useEffect (() => {
   // axios.get ('') //remove comment adter add backend api of get-all-categories
    //.then((json) => setCategory(json.data.categories))
    //.catch((err) => console.log (err))
 //} ,[])

 //const dummy = (params) => console.log("Called" , params)

    return(
        <div className="container">
            <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: '#34495e' }}>
                <span className="fs-4 fw-bold text-white" >Categories</span>
                
                <CategoryModal recallData={setCategory}/>
         </div>
<div className="container">

<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Category Name</th>
      <th scope="col">Category Image</th>
    </tr>
  </thead>
  <tbody>
   {
      category.map((val,key)=>
      <tr key={key}>
      <th scope="row">{val._id}</th>
      <th>{val.Category.Name}</th>
      <th><img src={val.CategoryImage} className='image-fluid' style={{height: '5vh', objectFit: 'contain' }} alt="" srcSet=""/></th>
      <td>
      <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
      <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.CategoryName)}><AiFillDelete /></button>
       </td>
    
    </tr>
      )
}
  </tbody>
</table>


</div>

        </div>
    )
}
