import React, { useState } from 'react'


// const [inputValue,setInputValue] = useState("");
const Search = ({inputValue,setInputValue}) => {


  return (
    <div className='container m-auto text-center p-3'>
        <input type="text" className='m-auto form-control w-75 ' placeholder="search here ..." onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    </div>
  )
}

export default Search;