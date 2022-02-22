import React ,{Component} from "react";
import {Formik,Field,Form} from "formik";
import http from "../services/http";
import auth from "../services/authServices";
class SigninForm extends Component{
state={
error:""
}
    postData=(obj)=>{
        console.log(obj)
        let {users} = this.props
          let find = users.find(op=>op.email==obj.email&&op.password==obj.password)
          if(find){
              let obj={name:find.name,email:find.email,role:find.role}
              auth.login(obj)
            this.props.history.push("/products")
          }else{
            let err = "Invalid email or password"
            this.setState({error:err})
          }   
       }
    render(){
        let {error} = this.state      
        return(<div><h3 className="text-center">Sign In</h3>
        <Formik initialValues={{
            email:"",password:""}}
            onSubmit={(values)=>{       
                this.postData(values);
               }}>   
             {()=>(
            <Form>
                          <label>Email</label>
                          <Field name="email" type="text"  className="form-control"/>
                          <label>Password</label>
                          <Field name="password" type="password"  className="form-control"/>
                         {error?<span className="text-danger">error</span>:""}<br/>
                         <div className="text-center">
                         <button type="submit" className="btn btn-primary">SignIn</button>
                             </div>
             </Form>      
             )}                    
        </Formik>       
        </div>)
    }
} 
export default SigninForm;