import React,{Component} from "react";
 class DisplayDetails extends Component{

    addPerson=()=>{
       this.props.history.push("/persons/add");
    }
    editPerson=(index)=>{
        this.props.history.push(`/persons/${index}/edit`)
    }

    render(){
        const {persons} = this.props
        console.log(persons)
        return(<React.Fragment>
            <h4>Details of Persons</h4>
            <div className="row bg-dark text-light" >
                     <div className="col-2 border">Name</div>
                     <div className="col-2 border">Gender</div>
                     <div className="col-2 border">Delivery</div> 
                     <div className="col-3 border">Payment</div> 
                     <div className="col-2 border">Time-Slot</div>   
                     <div className="col-1 border">   
                    </div>                 
                </div>
            {persons.map((p1,index)=>(
                <div className="row" key={index}>
                     <div className="col-2 border">{p1.name}</div>
                     <div className="col-2 border">{p1.gender}</div>
                     <div className="col-2 border">{p1.delivery}</div> 
                     <div className="col-3 border">{p1.payment.join(",")}</div> 
                     <div className="col-2 border">{p1.time}</div>   
                     <div className="col-1 border">
                       <button className="btn btn-warning" onClick={()=>this.editPerson(index)}>
                           Edit
                        </button>     
                    </div>                 
                </div>
            ))}
            <button className="btn btn-primary" onClick={()=>this.addPerson()}>Add new Persons</button>
        </React.Fragment>)
    }
 }
 export default DisplayDetails;