import React ,{Component} from "react"
import {Formik,Field,Form} from "formik"
class FormPage extends Component{
   handleSelectChange = (event,values,handleChange)=>{
       let {name,value} = event.currentTarget;
       switch (name){
           case "sel1":
              values.sel2=values.sel1
              break;
           
       }
       handleChange(event)
   }
    state={
        dataArr:[
            {country: "India",cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
            {country: "USA",cities: ["Los Angeles", "Chicago", "New York", "Seattle"]},
            {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
            {country: "Japan", cities: ["Tokyo", "Kyoto"]},
            {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]}]
       }

    render(){
      let {dataArr} = this.state
         return(<Formik initialValues={{sel1:"",sel2:""}}>
             {({values,handleChange})=>(
            <Form>
         <div className="form-group">
<label>Select Time Country</label>
   <Field 
        name="sel1"
        as="select"
        className="form-control" 
        onChange={(e)=>{this.handleSelectChange(e,values,handleChange)}}>
            <option>Select Your Country</option>
            {dataArr.map((c1)=>(
                
            <option value={c1.country} key={c1.country}>{c1.country}</option>
            ))}
      </Field>
    </div>
<div className="form-group">
<label>Select Time Country</label>
   <Field 
        name="sel2"
        as="select"
        className="form-control" 
        onChange={(e)=>{this.handleSelectChange(e,values,handleChange)}}>
             <option>Select Your City</option>
            {dataArr.map((c1)=>(c1.country==values.sel1
            ?c1.cities.map(op=> <option value={op} key={op}>{op}</option>)
            :""
            ))}
      </Field>
    </div>    
          </Form>
             )}           
         </Formik>) 
    }
}
export default FormPage;