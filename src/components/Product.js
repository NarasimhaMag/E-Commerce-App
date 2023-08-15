import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';



const Product = () => {
    const dispatch = useDispatch();
    const {data: products} = useSelector(state => state.products);
    useEffect(() => {
      dispatch(getProducts());
       
    }, []);
    const addTocart = (product) => {
      dispatch(add(product))
    }
    const cards = products.map(product => (
      
      <div className="col-md-3" style={{marginBottom: '10px'}}>
        <Card key={product.id} className='h-100'>
          <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:"100px", height:"120px"}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
           INR : {product.price}
        </Card.Text> 
      </Card.Body>
      <Card.Footer>
      <Button variant="primary" onClick={() => addTocart(product)}>Add To cart</Button>
      </Card.Footer>
      </Card>
      
    </div>
    ))
  return (
    <>   
    <div className="row">
       {cards}
     </div>
    </>
  )
}

export default Product