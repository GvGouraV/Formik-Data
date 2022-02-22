import React , {useState,useEffect} from "react"


function FormPage2(props){
   let [sel1,setSel1] = useState("")
   let [sel2,setSel2] = useState("")
   sel2=sel1
   let dataArr = props.dataArr
   console.log(dataArr)

    return(
    <div className="container">
              <div className="form-group">
                 <label>Select Time Country</label>
     <select
        name="sel1"      
        className="form-control" 
        onChange={(e)=>{setSel1(e.currentTarget.value)}}>
            <option>Select Your Country</option>
            {dataArr.map((c1)=>(               
            <option value={c1.country} key={c1.country}>{c1.country}</option>
            ))}
      </select>
    </div>
    <div className="form-group">
              <label>Select Time Country</label>
   <select
        name="sel2"
        className="form-control" 
        onChange={(e)=>{setSel2(e.currentTarget.value)}}>
             <option>Select Your City</option>
            {dataArr.map((c1)=>(c1.country==sel1
            ?c1.cities.map(op=> <option value={op} key={op}>{op}</option>)
            :""
            ))}
      </select>
    </div>  <br/>
    <button className="btn btn-primary">Submit</button>  
    </div>)
}
export default FormPage2;