import React ,{Component} from "react"
import auth from "../services/authServices";
class SignOut extends Component{


    render(){ 
        auth.logout()
      window.location=("/signIn")
     return""
    }
}
export default SignOut;