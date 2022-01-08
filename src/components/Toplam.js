import React, { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import{ProductContext} from "../App";
import { Link } from 'react-router-dom';
import datalist from "../foto/datalist.png";
import user from "../foto/user.png";


const Toplam = () => {
    const context = useContext(ProductContext);

    const totalCartAmount = context.state.cart.reduce( (total,product) => total = total + (product.price*product.count),0 
    );
    console.log("totalCartAmount" , totalCartAmount);
    return(
        <div>
                <Container className='border-none'>
                    <Row >
                        <h1>Ürünlerin Toplamı:</h1>
                        <p>Vergiler + Kargo: 21,45 TL </p>
                        <h2>Genel Toplam:{totalCartAmount + (21.45)} TL </h2>
                        {context.state.cart.map(product =>(
                            <div>
                                <p>Sepette {product.name} ürününden {product.count} adet vardır.</p>
                                <p>Toplam: {product.price * product.count}</p>
                                <button onClick={() => context.decrease(product.id)}>-</button>
                                <button onClick={() => context.removeFromCart(product.id)}>Sepetten Çıkar</button>
                                <button onClick={() => context.increase(product.id)}>+</button>

                            </div>
                        ))}
                        
                    </Row>
                </Container>
                <div className=' d-flex w-50 mx-auto fixed-bottom'>
                    <div className='w-50'>
                                <img src={datalist} className="w-25 ms-5 cursor" alt='sepet'/>
                                <h4 className=' ms-5'>Sepet</h4></div>
                                
                <span>
                    <div className=' w-50'><Link to="/sepet">
                                <img src={user} className="w-25 cursor" alt='user' />
                                <h4>Ürünler</h4></Link>

                                </div>                
                    </span>
                    </div>
            </div>
    )
}
export default Toplam;