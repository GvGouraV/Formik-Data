import React,{Component} from "react"
import {Formik,Field,Form,ErrorMessage} from "formik";
const personValidation = (values)=>{
       
    const errors={};
    if(!values.name) errors.name="Name is required";
    else if (values.name.length<6)
     errors.name="Name Should have minimum 6 charactor";
    if(!values.age) errors.age ="Age is required";
    else if(isNaN(+values.age)) errors.age = "Age should be a number";
    else if (+values.age<0) errors.age = "Age cannot be less the 0";
    else if(+values>100) errors.age="Age cannot be greater then 100";
    if(!values.country) errors.country  ="Country is required"
    if(values.tech.length===0) errors.tech ="Choose at leat 1 technology"
    if(!values.currentStatus) errors.currentStatus = "Select the current Status"
    return errors 

}
class PersonForm extends Component{

    state={
        contries:["USA","France","Canada","India","England"],
        technologies:["Javascript","Node.js","Angulsr","React.js"],
        currentStatus :["Student","Working","Looking for a Job"]
    }
   
  render(){
      let {persons} = this.props
      let {index} = this.props.match.params
      let person= index ? persons[+index]:{}
      let {contries,technologies,currentStatus} = this.state
      let contries1 = contries.map((c1)=>({value:c1,display:c1}));
      contries1.unshift({value:"",display:"Select the Country"});
      return(
          <Formik initialValues={{
            name:person.name||"",
            age:person.age||"",
            country:person.country||"",
            tech : person.tech || [],
            currentStatus : person.currentStatus || ""
          }}
          validate = {personValidation}
          onSubmit={(values)=>{       
              this.props.onSubmit(values,index);
              this.props.history.push("/")
          }}
          >
          {()=>(
            <Form>
                <h4>Details of the Person</h4>
                <div className="form-group">
                 <label>Name</label>
                <Field name="name" type="text"  className="form-control"/>
                </div>
                <div className="text-danger">
                    <ErrorMessage name="name"/>
                </div>
                <div className="form-group">
                 <label>Age</label>
                <Field name="age" type="text"  className="form-control"/>
                </div>
                <div className="text-danger">
                    <ErrorMessage name="age"/>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <Field name="country" as="select" className="form-control">
                        {contries1.map((c1)=>(<option value={c1.value} key={c1.display}>{c1.display}</option>))}

                    </Field>

                </div>
                <div className="text-danger">
                    <ErrorMessage name="country"/>
                </div>
                <br/>
                <div className="for-group">
                        <label className="m-0 pr-3">Technology Known</label><br/>
                    {technologies.map(t1=>(
                         <div className="form-check form-check-inline">
                             <Field 
                              name="tech" 
                              type="checkbox"
                              value={t1}
                              className="form-check-input">
                              </Field>
                          <label className="form-check-label">{t1}</label>
                         </div>
                    ))}
                    </div>
                    <div className="text-danger">
                    <ErrorMessage name="tech"/>
                </div>
                    <div className="for-group">
                        <label className="m-0 pr-3">Technology Known</label><br/>
                    {currentStatus.map(t1=>(
                         <div className="form-check form-check-inline">
                             <Field 
                              name="currentStatus" 
                              type="radio"
                              value={t1}
                              className="form-check-input">
                              </Field>
                          <label className="form-check-label">{t1}</label>
                         </div>
                    ))}
                    </div>
                    <div className="text-danger">
                    <ErrorMessage name="currentStatus"/>
                </div>
              
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