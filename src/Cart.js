import React from 'react'
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products: [
                {
                    price: 100,
                    title: "Watch",
                    qty: 1,
                    img: '',
                    id: 1
                }
                ,
                {
                    price: 1000,
                    title: "Computer",
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 1100,
                    title: "Phone",
                    qty: 2,
                    img: '',
                    id:3
                }
            ]
        }
    }
render(){
    const {products} = this.state;
    return(
      
     <div className="cart">
     {products.map((product)=>{
         return <CartItem product={product} key={product.id}/>
     })}
     </div>
       
     
    );
}
}
export default Cart;