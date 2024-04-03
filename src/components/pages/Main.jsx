import React,{useEffect,useState} from 'react'
import axios from "axios"
import Header from '../header/Header'
import ProductCard from '../productCard/ProductCard'
import Search from '../search/Search'


const Main = () => {

    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState("all")

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
           setProducts(res.data);
            
        })
    },[])



const filterPro = (()=>{
    if(categories==="all"){
        return products
    }else{
        return products.filter(item=>item.category===categories)
    }
})()

const [inputValue,setInputValue] = useState("");

const filteredSearch = filterPro.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase().trim())) ;

console.log(filterPro);
  return (
    
    <div>
        <Header categories={categories}  setCategories={setCategories}  />
        <div className="cardContainer row container m-auto">

            <Search inputValue={inputValue} setInputValue={setInputValue}/>



<div className='cardContainer row container m-auto'>
{
            filteredSearch.map(item=>(
                <ProductCard item={item} />
            ))
           }
</div>

           
        </div>

    </div>
  )
}

export default Main