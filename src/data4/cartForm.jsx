import React,{Component} from "react";
class CartForm extends Component {
    
    state={
        cartData:[]
    }

    addQuantity = (code,qty) =>{
         let {cart} = this.props
         let find = cart.find(op=>op.prodCode==code)
       
         find.ingredients.map(p=>{
             p.qty=p.qty+p.qty
           
         })
         find.quantity++
         this.props.onAdd(code,find)

    }
    subQuantity = (code,qty) =>{
        let {cart} = this.props
        let find = cart.find(op=>op.prodCode==code)
        find.ingredients.map(p=>{
            p.qty=p.qty-p.qty
            
        })
         find.quantity--
        this.props.onAdd(code,find)

   }
    render(){
         let {cart} = this.props
         let cartItem=[]
        let tot=[] 
       
        {cart.map(op=>(
            op.ingredients.map(p=>{tot.push(p)})           
        )
        )}
 
         var uniqueArr = tot.filter((li, idx, self) => {
             if(self.map(itm => itm.ingName).indexOf(li.ingName) === idx){
                 return li
             }
            })
            
  
        return(< div className="container">
            <h4  className="text-center">Products of Shoping Carts</h4>
            {cart.map(op=>(
                <div className="row border">
                    <div className="col-2"><img src={op.img} width="50px" height="50px"></img></div>
                    <div className="col-8"><h5>{op.title}</h5></div> 
                    <div className="col-1">
                    <div className="row mt-2">
                            <div className="col-4"><button className="btn btn-success btn-sm" onClick={()=>this.addQuantity(op.prodCode,op.quantity)}>+</button></div>
                            <div className="col-2 text-center">{op.quantity}</div>
                            <div className="col-4"><button className="btn btn-danger btn-sm"onClick={()=>this.subQuantity(op.prodCode,op.quantity)}>-</button></div>
                    </div>
                    </div>
                </div>
            ))}
            <h4 className="text-center">List of items of Cart </h4>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                <div className="row border bg-dark text-light">
                    <div className="col-6">IngName</div>
                    <div className="col-6">Quantity</div>
                </div>
                     {uniqueArr.map(op=>(
                <div className="row border">
                    <div className="col-6">{op.ingName}</div>
                    <div className="col-6">{op.qty}</div>
                </div>
            ))}</div>
                <div className="col-3"></div>
            </div>
           
            

        </div>)

     }
}
export default CartForm