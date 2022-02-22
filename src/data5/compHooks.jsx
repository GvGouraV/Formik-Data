import React ,{useEffect,useState} from "react";
import http from "../services/http";
import {Link} from "react-router-dom";


function CompHooks(props){
let [info,setInfo] = useState(null);
let id = props.match.params.id
useEffect(async()=>{
    let response = await http.get(`/displayinfo/${id}`)
     let {data} = response
     setInfo(data)
},[id])

return(<div className="container">
    Hooks Code <br/>
    id : {id} <br/>
    info : {info}<br/>
    <Link to={`/display/${+id+1}`}>Next</Link>
</div>)

}
export default CompHooks;