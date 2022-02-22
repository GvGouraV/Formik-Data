import React , {Component} from "react"
import {connect} from "react-redux"
class FormShow extends Component{
     sell=(name)=> this.props.dispatch(sellAction(name))
     buy=(name)=> this.props.dispatch(buyAction(name))
     render(){
         console.log(this.props)
         return(
         <div className="container">  
         <div className="row border">  
              {this.props.stocks.map(op=>(
                                 
                  <div className="col-3 border bg-info  text-center">
                      <h4 > {op.name}</h4>
                      <h5 >Code : {op.code}</h5>
                      <h5>Price : {op.price}</h5>
                      <h5>Quantity : {op.Quantity}</h5>
                      <button className="btn btn-light mx-3 btn-sm" onClick={()=>this.sell(op.name)}>Increase</button>
                      <button className="btn btn-light mx-3 btn-sm" disabled={op.Quantity==0} onClick={()=>this.buy(op.name)}>Decrease</button>
                  </div>
                 
              ))}    
               </div>
         </div>)
    }}
const sellAction = (name) =>({
    type:"SELL",
    payload:{name:name}
})
const buyAction = (name) =>({
    type:"BUY",
    payload:{name:name}
})
const mapStateToProps = (state) =>{
     return { stocks:state.stocks}
}
export default connect(mapStateToProps)(FormShow);