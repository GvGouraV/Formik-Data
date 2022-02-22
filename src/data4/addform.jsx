import React,{Component} from "react"
import {Formik,Form,Field,FieldArray,ErrorMessage} from "formik";
import * as Yup from "yup"
 const listValidationSchema = Yup.object().shape({
     prodCode:Yup.string().required("Prod Code is Required"),
     title:Yup.string().required("Name is Required"),
     img:Yup.string().required("Imgage is REquired"),
     ingredients: Yup.array().of(
         Yup.object().shape({
            ingName: Yup.string()
                      .required("IngName is Required")
                      .min(3,"Ing Name is to short"),
            qty : Yup.number()
                   .required("Quantity is Required")
                   .integer("Quentity is onlu number")
                   .min(1,"Quantuty least 1"),

         })
     ).required("Items are required in the product list")
 })

class AddForm extends Component{

    render(){
        let {storeData} = this.props
        let {index} = this.props.match.params
        let list=index?storeData[index]:{}
        let arrShow=["Dining","Drawing","Bedroom","Study"]
        return(<Formik 
        initialValues={{
            prodCode:list.prodCode||"",
            title:list.title||"",
            img:list.img||"",
            category:list.category||"",
            desc:list.desc||[],
            ingredients:list.ingredients||[]
        }}
        validationSchema={listValidationSchema}
         onSubmit={(values)=>{
             this.props.onSubmit(values,index);
             this.props.history.push("/products")
         }}>
              {({values,errors})=>(
                  <Form>
                      <div className="row">
                         <div className="col-8">
                         <div className="form-group">
                          <label>Prod Code</label>
                          <Field 
                          name="prodCode"
                          type="text"
                          placeholder="Enter thet Product Code"
                          className="form-control"/>
                      </div>
                      <div className="text-danger">
                       <ErrorMessage name="prodCode"/>
                       </div>
                      <div className="form-group">
                          <label>Name</label>
                          <Field 
                          name="title"
                          type="text"
                          placeholder="Enter thet Product Name"
                          className="form-control"/>
                      </div>
                      <div className="text-danger">
                       <ErrorMessage name="title"/>
                       </div>
                      <div className="form-group">
                          <label>Image URL</label>
                          <Field 
                          name="img"
                          type="text"
                          placeholder="Enter thet Product Image URL"
                          className="form-control"/>
                      </div>
                      <div className="text-danger">
                       <ErrorMessage name="img"/>
                       </div>
                      <div className="form-group">
                          <label>Select Time Slot</label>
                             <Field name="category" as="select" className="form-control">
                                    <option>Select the category</option>
                                  {arrShow.map((c1)=>(<option value={c1} key={c1}>{c1}</option>))}
                             </Field>
                       </div>
                       <div className="text-danger">
                       <ErrorMessage name="category"/>
                       </div><br/>
                       <FieldArray name="desc"
                     render={(arrayHelper)=>(
                         <div>
                             {values.desc.map((t1,index)=>(
                                 <div className="row mb-2" key={index}>
                                     <div className="col-7">
                                         <Field 
                                         name={`desc[${index}]`}
                                         type="text"
                                         placeholder="Enter the Desc"
                                         className="form-control"
                                         />
                                     </div>
                                     <div className="col-2 align-middle">
                                         <button
                                         type="button"
                                          className="btn btn-danger mr-2 btn-sm"
                                          onClick={()=>arrayHelper.remove(index)}
                                          >Delete</button>
                                     </div>
                                 </div>
                             ))}
                             <button 
                             type="button"
                             className="btn btn-secondary mb-2"
                             onClick={()=> arrayHelper.push("")}>
                                        Add Dec to the Product List
                             </button>
                             
                         </div>
                     )}/>
                     <FieldArray name="ingredients"
                     render={(arrayHelper)=>(
                         <div>
                             {values.ingredients.map((t1,index)=>(
                                 <div className="row mb-2" key={index}>
                                     <div className="col-7">
                                         <Field 
                                         name={`ingredients[${index}].ingName`}
                                         type="text"
                                         placeholder="Enter the IngName"
                                         className="form-control"
                                         />
                                     </div>
                                     <div className="col-2">
                                         <Field 
                                         name={`ingredients[${index}].qty`}
                                         type="text"
                                         placeholder="Enter the Quantity"
                                         className="form-control"
                                         />
                                     </div>
                                     <div className="col-2 align-middle">
                                         <button
                                         type="button"
                                          className="btn btn-danger mr-2 btn-sm"
                                          onClick={()=>arrayHelper.remove(index)}
                                          >Delete</button>
                                     </div>
                                 </div>
                             ))}
                             <button 
                             type="button"
                             className="btn btn-secondary mb-2"
                             onClick={()=> arrayHelper.push("")}>
                                        Add Ing to the Product List
                             </button>
                             <div className="text-danger">
                                 {typeof errors.ingredients==="string"
                                  ?errors.ingredients
                                :errors.ingredients
                                ?errors.ingredients.reduce((acc,curr)=>(acc?acc:curr?curr.ingName||curr.qty:acc),"")
                            :""}

                             </div>
                         </div>
                     )}/>
                      <div className="form-group">
                          <button type="submit" className="btn btn-success mr-2">
                             {index?"Update":"Add"} 
                          </button>

                      </div>         
                         </div>
                         <div className="col-4">
                             {index?<img src={list.img} className="mt-5" width="300px" height="300px"/>:""}
                         </div>
                     </div>
                              
                  </Form>
              )}

        </Formik>)
             

    }
};
export default AddForm;