import React , {Component} from "react"
import {connect} from "react-redux"
class FormShow extends Component{

 
     sell=(name,price,qty)=> {
        
         this.props.dispatch(sellAction(name,price,qty=1))
        
         
        }

     render(){
       
       let tot=0.00
       this.props.stocks.map(op=>{
           tot=tot+op.price*op.qty
       })
         return(
         <div className="container mt-5">  
           {this.props.products.map(op=>(
               <div>
               <h6>{op.name} - ${op.price} x {op.qty}</h6>
               <button
                    disabled={this.props.stocks.find(itm=>itm.name==op.name&&itm.qty==op.qty)?true:false}
                    onClick={()=>this.sell(op.name,op.price,op.qty)}>
                   {this.props.stocks.find(itm=>itm.name==op.name&&itm.qty==op.qty)?"Sold Out":"Add to Cart"}</button><br/><br/></div>
         ))}      
         <hr/>  
         <h3>Your Cart</h3>
         {this.props.stocks.length==0
          ?<span>Please add some products to cart</span>
          :this.props.stocks.map(op=>(<div>
              <span>{op.name} - ${op.price} x {op.qty}</span><br/></div>
          ))}<br/>
          <span>Total : ${tot}</span><br/>
          <button>Checkout</button>
         </div>
        )
    }}
const sellAction = (name,price,qty) =>({
    type:"SELL",
    payload:{name:name,price:price,qty:qty}
})
const mapStateToProps = (state) =>{
     return { products:state.products,stocks:state.stocks}
}
export default connect(mapStateToProps)(FormShow);