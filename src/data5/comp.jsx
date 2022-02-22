import React , {useState} from "react"


const  Comp = (props) =>{
   
   let [data,setData] = useState([
    {name:"Coca Cola",code:"C332",price:20,qty:10},
    {name:"5 Star",code:"F188",price:15,qty:0},
    {name:"Maggi",code:"M228",price:28,qty:22},
    {name:"Pepsi",code:"P288",price:20,qty:18},
    {name:"Dairy Milk",code:"D311",price:40,qty:0},
    {name:"Mirinda",code:"M301",price:25,qty:8},
    {name:"Kitkat",code:"K477",price:16,qty:11},
    {name:"Red Bull",code:"R544",price:90,qty:3},
])
   function addqty(ind,name){
    
     if(name=="add"){
      data.map((op,index)=>{
            if(ind==index){
              op.qty=op.qty+1
            }
     })
    
     }else{
       data.map((op,index)=>{
        if(ind==index){
          op.qty=op.qty-1
        }
    })
   
     }
     
    
     setData(data)
   }
   console.log(data)
  return(<div className="container">
      <div className="row bg-info border">
        {data.map((op,index)=>(
            <div className="col-3 text-center  border">
              <h5>{op.name}</h5>
              <span>Code : {op.code}</span><br/>
              <span>Price : {op.price}</span><br/>
              <span>Quantity : {op.qty}</span><br/>
              <button className="btn btn-light btn-sm m-2"  onClick={()=>addqty(index,"add")}>Increase</button>
              <button className="btn btn-light m-2 btn-sm " disabled={op.qty==0} onClick={()=>addqty(index,"sub")}>Decrease</button>
            </div>
        ))}
      </div>
  </div>)
}
export default Comp;