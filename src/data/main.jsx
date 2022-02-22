import React,{useState} from "react";
import Person from "./personForm2";

    
 
    function Main(){
        let {tableData} = require("./dataArr.js")
        const [table,setTable] = useState(tableData)
        let {dataArr} = table

     function handleQuantity(val){
         console.log(val)
         let newArr = [...dataArr]
         newArr=val
         setTable({...table,dataArr:newArr})
     }


        return(
         <div className="container">
             <Person dataArr={dataArr} onChange={handleQuantity}/>
         </div>)
}
 export default Main;