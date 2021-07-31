import React from 'react'
class CartItem extends React.Component{
   
    increaseQuantity =() =>{
        console.log('this',this.state);
      //  this.state.qty = this.state.qty+1;
        // this.setState({
        //    qty :  this.state.qty + 1
        // });
        this.setState((prevState)=>{
        return { qty: prevState.qty+1
        }
        },()=>{
            console.log('this.state',this.state);
        });
       
                    
    }
    decreaseQuantity =() =>{
          this.setState((prevState)=>{
              return {
                qty: prevState.qty>0?  prevState.qty-1 : prevState.qty
              }
          });
    }
    render(){
        console.log('this',this.props); 
        const {price,title,qty} = this.props.product  ;
        return (
            <div className="cart-item">
            <div className="left-block">
            <img  style={Styles.image}/>
            </div>
            <div className="right-block">
              <div style={{fontSize:25}}>{title}</div>
              <div style={{color:'#777'}}>Rs {price}</div>
              <div style={{color:'#777'}}>Qty: {qty}</div>
              <div className="cart-item-actions">
              {/*Buttons*/}
              <img onClick = {this.increaseQuantity} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/128/1828/1828926.png"></img>
              <img 
               onClick = {this.decreaseQuantity}
              alt="decrease"
               className="action-icons" 
               src="https://image.flaticon.com/icons/png/128/1828/1828906.png">
               </img>
              <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/128/1214/1214428.png"></img>
              </div>
            </div>

            </div>
        )
    }
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