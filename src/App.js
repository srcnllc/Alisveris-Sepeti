import React,{createContext ,useState} from "react";
import "./index.css";
import {Route, Routes} from "react-router-dom";
import Sepet from "./components/Sepet";
import Toplam from "./components/Toplam";
import { data } from "./data";
import LoginForm from "./components/LoginForm";
export const ProductContext = createContext();
export default function App() {

  const [state,setState] = useState({
    productList: data,
    cart:[]
  });

  const addToCart = product => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === product.id)
    ? state.cart.map(cartItem => cartItem.id === product.id ? {...cartItem, count: cartItem.count+1 } : cartItem)
    :[...state.cart, { ...product, count: 1}]
  });

  const removeFromCart = id => setState({
    ...state,
    cart:state.cart.filter(cartItem => cartItem.id !== id )
  })

  const increase = id => {
    setState({
      ...state,
      cart:state.cart.map(cartItem => cartItem.id === id ? {...cartItem,count:
      cartItem.count + 1 } : cartItem)
    });
  };
  const decrease = id => {
    setState({
      ...state,
      cart:state.cart.map(cartItem => cartItem.id === id ? {...cartItem,count:
        cartItem.count > 1 ? cartItem.count - 1 : 1 } : cartItem)
    });
  };
  const adminUser={
    email:"srcn_llc_@hotmail.com",
    password:"sercan123"
  }

  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");
  
  const Login = details =>{
    console.log(details);
    if ( details.email===adminUser.email && details.password===adminUser.password){
      console.log("Logget in");
      setUser({
        name:details.email,
        email:details.email
      });
    }else {
      console.log("Details do not match!");
      setError("E-posta veya password hatalı!!");
    }
  }

  const Logout = () =>{
    setUser({name:"",email:""});
  }
  return (
    <ProductContext.Provider value={{state: state, addToCart,increase,decrease,removeFromCart}}>
      <div className="App">
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>Welcome,<br/> <span>{user.name}</span></h2>

          <div className="d-grid gap-2 mt-5">
              <button className="bacground bg-danger" type="submit" onClick={Logout}>Sign out</button>
          </div>
          <div className="App">

        <Routes>
          <Route  exact path="/" element={<Sepet/>} ></Route>
          <Route  path="/sepet" element={<Sepet/>} ></Route>
          <Route  path="/toplam" element={<Toplam/>} ></Route>
        </Routes>
      </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
      
    </ProductContext.Provider>
  );
}
