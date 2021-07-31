import React from 'react'
const CartItem=(props)=>{
    console.log(props);
        const {price,title,qty} = props.product  ;
        console.log(price);
        const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
            <div className="left-block">
            <img  style={Styles.image} src={product.img}/>
            </div>
            <div className="right-block">
              <div style={{fontSize:25}}>{title}</div>
              <div style={{color:'#777'}}>Rs {price}</div>
              <div style={{color:'#777'}}>Qty: {qty}</div>
              <div className="cart-item-actions">
              {/*Buttons*/}
              <img onClick = {()=>onIncreaseQuantity(product)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828926.png"></img>
              <img 
               onClick = {()=>onDecreaseQuantity(product)}
              alt="decrease"
               className="action-icons" 
               src="https://image.flaticon.com/icons/png/128/1828/1828906.png">
               </img>
              <img 
              alt="delete"
               className="action-icons"
               onClick = {()=>onDeleteProduct(product.id)}
               src="https://image.flaticon.com/icons/png/128/1214/1214428.png">
                </img>
              </div>
            </div>

            </div>
        )
    }

const Styles={
    image: {
        height: 110,
        width: 100,
        borderRadius: 4,
        background: '#777'
    }
}
export default CartItem;