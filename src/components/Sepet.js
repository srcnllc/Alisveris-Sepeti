import React, { useContext } from 'react'
import { Container, Row } from 'reactstrap'
import { AiFillStar } from "react-icons/ai" ;
import { ImLocation2 } from "react-icons/im" ;
import { MdAddShoppingCart } from "react-icons/md" ;
import { ProductContext } from '../App';
import { Link } from 'react-router-dom';
import datalist from "../foto/datalist.png";
import user from "../foto/user.png";


const Sepet = props =>{

    const context = useContext(ProductContext);
    
    console.log(context);

    return(
        <div>
            
            <Container className='border-none'>
                <Row >
                    {context.state.productList.map(product =>
                    <div key={product.count}>
                        <div className='d-flex mt-1 '>
                        <img src={product.image} className='w-25 rounded-3' alt={product.name} />
                        <div className=' w-100'>
                                <h4 className='d-block ms-3 mt-2'>{product.name}</h4>
                                <h6 className='ms-3 mt-2 opacity-75'>{product.explanation}</h6>
                                <div className='mt-4 ms-3'>
                                    <div className='d-inline cursor'><AiFillStar className='text-warning'/><span className='ms-2'>{product.star}</span></div>
                                    <div className='d-inline cursor'><ImLocation2 className='text-info ms-5'/><span className='ms-2'>{product.distance} km</span></div>
                                </div>
                                <div className='d-inline ms-5'>Fiyat : {product.price} tl</div>
                        </div>
                    </div>
                    <Row>
                    <div className=' mt-2 '>
                        <button className='w-100 border border-white text-danger bg bg-white text-center ' onClick={()=>context.addToCart(product)}><MdAddShoppingCart className='me-2' /> SEPETE EKLE</button>
                        <hr/>
                    </div>
                    </Row>
                    </div>)}
                </Row>
            </Container>
            <div className=' d-flex w-50 mx-auto'>
                                <Link to="/toplam">
                                <img src={datalist} className="w-25 ms-5 cursor" alt='sepet'/>
                                <h4 className=' ms-5'>Sepet</h4>
                                
                </Link><span><div className='border w-50'>
                                <img src={user} className="w-25 cursor" alt='user' />
                                <h4>Ürünler</h4>
                                </div>
                    </span></div>
        </div>
        
    );
};
export default Sepet;
