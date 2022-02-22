import React,{Component} from "react"
import {Formik,Field,Form,ErrorMessage} from "formik";
import *  as yup from "yup";
 const personValidationSchema = yup.object().shape({
     name : yup.string().required("Name is required").min(6,"Name Should have minimum 6 charactor"),
     gender : yup.string().required("Choose your gender"),
      delivery: yup.string().required("Choose your delivery option"),
      payment: yup.array().max(2,"Choose least two  payment option").min(1,"Choose your payment option "),
      time:yup.string().required("Select the time slot"),
        });

class PersonForm extends Component{

    state={
        timeArr:["10AM-2PM", "2PM-6PM", "6PM-10PM"],
        genderArr:["Male","Female","other"],
        deliveryArr :["Home","Office","Pickup"],
        paymentArr:["Credit Card","Debit Card","Net Banking"]
    }
   
  render(){
      let {persons} = this.props
      let {index} = this.props.match.params
      let person= index ? persons[+index]:{}
      let {timeArr,deliveryArr,genderArr,paymentArr} = this.state
      let timeArr1 = timeArr.map((c1)=>({value:c1,display:c1}));
      timeArr1.unshift({value:"",display:"Select the time Slot"});
      return(
          <Formik initialValues={{
            name:person.name||"",
            gender:person.gender||"",
            delivery:person.delivery||"",
            payment : person.payment || [],
            time : person.time || ""
          }}Select the time slot
          validationSchema = {personValidationSchema}
          onSubmit={(values)=>{       
              this.props.onSubmit(values,index);
              this.props.history.push("/")
          }}
          >
          {()=>(
            <Form>
                <h4>Details of the Person</h4>
                <div className="form-group">
                 <label>Name</label>BrowserRouter 
                <Field name="name" type="text"  className="form-control"/>
                </div>
                <div className="text-danger">
                    <ErrorMessage name="name"/>
                </div>
                <div className="for-group">
                        <label className="m-0 pr-3">Gender</label><br/>
                    {genderArr.map(t1=>(
                         <div className="form-check form-check-inline">
                             <Field 
                              name="gender" 
                              type="radio"
                              value={t1}
                              className="form-check-input">
                              </Field>
                          <label className="form-check-label">{t1}</label>
                         </div>
                    ))}
                    </div>
                <div className="text-danger">
                    <ErrorMessage name="gender"/>
                </div>
                <div className="for-group">
                        <label className="m-0 pr-3">Chosse your delivery option</label><br/>
                    {deliveryArr.map(t1=>(
                         <div className="form-check form-check-inline">
                             <Field 
                              name="delivery" 
                              type="radio"
                              value={t1}
                              className="form-check-input">
                              </Field>
                          <label className="form-check-label">{t1}</label>
                         </div>
                    ))}
                    </div>
                    <div className="text-danger">
                    <ErrorMessage name="delivery"/>
                </div>
                    <div className="for-group">
                        <label className="m-0 pr-3">Chosse your payment option</label><br/>
                    {paymentArr.map(t1=>(
                         <div className="form-check form-check-inline">
                             <Field 
                              name="payment" 
                              type="checkbox"
                              value={t1}
                              className="form-check-input">
                              </Field>
                          <label className="form-check-label">{t1}</label>
                         </div>
                    ))}
                    </div>
                    <div className="text-danger">
                    <ErrorMessage name="payment"/>
                </div>
                <div className="form-group">
                    <label>Select Time Slot</label>
                    <Field name="time" as="select" className="form-control">
                        {timeArr1.map((c1)=>(<option value={c1.value} key={c1.display}>{c1.display}</option>))}

                    </Field>

                </div>
                <div className="text-danger">
                    <ErrorMessage name="time"/>
                </div>
                <br/>
              
                <div className="form-group">  <div className="form-check form-check-inline"></div>
                    <button type="submit" className="btn btn-primary mr-2">
                        {index?"Edit":"Add"}</button>
                </div>
            </Form>
          )}
          </Formik>
      )
  }
}
export default PersonForm;