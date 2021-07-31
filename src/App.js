
import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
class App extends React.Component{
  constructor(){
    super();
    this.state={
        products: [
            {
                price: 100,
                title: "Watch",
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id: 1
            }
            ,
            {
                price: 1000,
                title: "Computer",
                qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price: 1100,
                title: "Phone",
                qty: 2,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:3
            }
        ]
    }
}
handleIncreaseQuantity = (product)=>{
  const {products} = this.state;
  const index = products.indexOf(product);
  products[index].qty+=1;
  this.setState({
      products:products
  })

}
handleDecreaseQuantity= (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0){
return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct = (id)=>{

    const {products} = this.state;
    const items =products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
count+=product.qty;
  })
  return count;
}
getTotalcount=()=>{
  const {products}=this.state;
  let price=0;
  products.forEach((products)=>{
    price+=(products.qty*products.price);
  })
  return price;
}
render(){
  const {products}=this.state;
  
  return (
    <div className="App">
    <NavBar count={this.getCartCount()}/>

     <Cart
        onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
          products={products}
     />
     <div style={{fontSize:20,padding:10}}>Total: {this.getTotalcount()}</div>
    </div>
  );
}
  
}

export default App;
