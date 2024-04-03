import React,{useEffect, useState} from 'react'
import axios from 'axios'
 


const Header = ({categories,setCategories}) => {

   const [cate,setCate] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res=>{
            
           setCate(["all",...res.data]);
            
        })
    },[])
console.log(categories);
  return (
    <div >
        <h1 className='text-secondary text-center mt-5'>Product List</h1>
        <div className='btns d-flex align-items-center justify-content-center gap-2 text-nowrap flex-wrap'>{
            cate.map((item,index)=>{
                return(
                    <button onClick={()=>setCategories(item)} className='btn btn-primary' key={index}>{item}</button>
                )
            })
        }</div>

    </div>
  )
}

export default Header