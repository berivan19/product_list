import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from "react-icons/fa6";
import "./ProductCard.scss" ;
import { useState } from 'react';





function ProductCard({item}) {
    

const [liked, setLiked] = useState(false)

const handleLikeClick = () => {
    setLiked(!liked)
}

  return (
    <Card className='productcard col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 gap-3'>


<div className='cardtop bg-secondary text-black p-1 fs-0'>

<Card.Header className='bg-secondary d-flex justify-content-between'>{item.price} $  

<button onClick={handleLikeClick} type="button" class="btn btn-light">
          <FaHeart color={liked ? "red" : "black"} />
        </button>
 </Card.Header>
</div>

     

      
      <Card.Img className='img' variant="top" src= {item.image}/>
      

      <div className="title bg-secondary">
                            <p>{item.title}</p>

                        </div>

    </Card>
  );
}

export default ProductCard;

