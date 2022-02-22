import React, {Component} from "react";
import {Formik,Field,Form} from "formik"
import auth from "../services/authServices";
class ShowData extends Component{
    handleSelectChange = (event,values,handleChange)=>{
        let {name,value} = event.currentTarget;     
        this.props.history.push(`/products/${value}`)
        handleChange(event)
    }
     state={
         arrShow:["Dining","Drawing","Bedroom","Study"],
     }
    
    async componentDidMount() {
        this.setState()
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) this.componentDidMount();
      }

     showProduct = (cat,code) =>{
         let {category} = this.props.match.params
         if(category){
            this.props.history.push(`/products/${category}/${code}`)
           
         }else{
            this.props.history.push(`/products/${cat}/${code}`) 
         }
     }

     addCartProduct=(code)=>{
         let {storeData}  = this.props
         let find = storeData.find(op=>op.prodCode==code)
         this.props.onSubmit(find)
     }
     editproducts = (code) =>{
       let {storeData} = this.props
        let index = storeData.findIndex(op=>op.prodCode==code)
        this.props.history.push(`/products/${index}/edit`)
     }

    render(){
        let user = auth.getUser()
    let {storeData} = this.props
    let {arrShow} = this.state
    let {category,prodCode} = this.props.match.params
    storeData=category?storeData.filter(op=>op.category==category):storeData
    let showdata={}
    if(prodCode){
        showdata=storeData.find(op=>op.prodCode==prodCode)
    }
        return(
        <div className="container">
               <div className="row">
                     <div className="col-2">
                     <Formik initialValues={{selArr:category||""}}>
                           {({values,handleChange})=>(
                                <div className="for-group border">
                               <h4 className="text-center">Option</h4>
                            {arrShow.map(t1=>(<div className="border">
                                 <div className="form-check  mt-3">
                                     <Field 
                                      name="selArr" 
                                      type="radio"
                                      value={t1}                               
                                      onChange={(e)=>{this.handleSelectChange(e,values,handleChange)}}>
                                      </Field>
                                  <label className="form-check-label">{t1}</label>
                                 </div></div>
                            ))}
                            </div>
                           )}
                     </Formik>
                     </div>
                     <div className="col-6">                      
                              <div className="row">                              
                              {storeData.map((op,index)=>( 
                                 <div className="col-5 m-2 mx-3">
                                      <img src={op.img} onClick={()=>this.showProduct(op.category,op.prodCode)}></img> 
                                    
                                  </div>
                               ))}                             
                              </div>                      
                     </div>
                     <div className="col-4">
                         
                        {prodCode
                          ?<div className="mt-5 mx-5">
                              {user
                          ?user.role=="admin"
                          ?<div>
                              <button className="btn btn-warning btn-sm" onClick={()=>this.editproducts(showdata.prodCode)}>Edit Product</button>
                              <button className="btn btn-danger btn-sm">Delete Product</button></div>
                              :""
                            :""}
                              <img src={showdata.img}></img>
                              <h3>{showdata.title}</h3>
                              {showdata.desc.map(op=>(
                                 <h6>{op}</h6>
                              ))}
                              <h4>Items in Product</h4>
                              {showdata.ingredients.map(op=>(
                                  <div>
                                  <span>- {op.ingName} : {op.qty}</span><br/>
                                  </div>
                              ))}{
                                  user
                                  ?user.role=="user"
                                  ?<button className="btn btn-success" onClick={()=>this.addCartProduct(prodCode)}>Add to Cart</button>
                                :""
                                :""
                                }                              
                          </div>:""}
                     </div>
               </div>
        </div>)
    }
}export default ShowData;