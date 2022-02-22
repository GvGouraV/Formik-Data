import React ,{Component} from "react";
import {Link} from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import auth from "../services/authServices";
class NavBar1 extends Component{


    render(){
      let user = auth.getUser()
        return(<nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand  text-light" href="/">Furniture Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  "style={{color:"#adaba5"}} to="/products">Products</Link>
              </li>
              <li className="nav-item">
                {
                  user?user.role=="user"?<Link className="nav-link" style={{color:"#adaba5"}} to="/cart">Cart</Link>:"":""
                }
             
              </li>
              <li className="nav-item">
                {
                  user?user.role=="admin"?<Link className="nav-link" style={{color:"#adaba5"}} to="/add">Add new Product</Link>:"":""
                }
             
              </li>
            </ul>
            <form className="d-flex">
              {user
              ?<Link className="nav-link " style={{color:"#adaba5"}} to="/signout">SignOut</Link>
            :<Link className="nav-link " style={{color:"#adaba5"}} to="/signIn">SignIn</Link>}
            
            </form>
          </div>
        </div>
      </nav>)


    }
}
export default NavBar1;