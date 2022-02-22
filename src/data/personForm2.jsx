 import React ,{useState,useEffect} from "react";
import { data } from "./dataArr";
 
 
 function PersonForm2(props){
   let dataArr =  props.dataArr
   let arr = []
   for(let i=0;i<=99;i++){
       arr.push(i)
   }
   function handleQuantity(val,ind){
         
         if(val=="sub"){
             dataArr.map((op,index)=>{
                        if(index==ind){
                            op.quantity=op.quantity-1
                        }
             })
         }else if(val=="add"){
          dataArr.map((op,index)=>{
                if(index==ind){
                    op.quantity=op.quantity+1
                }
            })
         }else{
              dataArr.splice(ind,1)
         }
         console.log(dataArr)
         props.onChange(dataArr)
   }
   function handleChange(e){
       console.log(e.currentTarget.name)
       dataArr.map((op,index)=>{
        if(index==+e.currentTarget.name){
            op.quantity=e.currentTarget.value
        }
    })
    props.onChange(dataArr)
   }

   return(
       <div className="container mt-5">
             {dataArr.map((op,index)=>(
                 <div className="row border ">
                     <div className="col-3 border">Product : {op.product} </div>
                     <div className="col-2 border">Quantity : {op.quantity}  </div>
                     <div className="col-2 border">Value : {op.quantity*op.price}  </div>
                     <div className="col-3 border"> 
                         <div className="row ">
                             <div className="col-2"></div>
                             <div className="col-2"><button className="btn btn-success" onClick={()=>handleQuantity("add",index)}>1+</button></div>
                             <div className="col-2"><button className="btn btn-warning" onClick={()=>handleQuantity("sub",index)}>1-</button></div>
                             <div className="col-2"><button className="btn btn-danger"  onClick={()=>handleQuantity("splice",index)}>x</button ></div>
                         </div> 
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select name={`${index}`} className="form-control" onChange={handleChange} value={op.quantity}>
                                 {arr.map(p=>(<option>{p}</option>))}
                            </select>
                        </div>
                    </div>


                 </div>
             ))} 
       </div>)

 }
 export default PersonForm2;