import React, {Component} from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import PersonForm from "./personForm";
import DisplayDetails from "./displayDetails";
class MainComponent extends  Component{
  
    state={
        persons:[
            {name:"Brad Williams",gender:"Male",delivery:"Home",payment:["Credit Card","Debit Card"],time:"10AM-2PM"},
            {name:"Aditi Sharma",gender:"Felmale",delivery:"Office",payment:["Debit Card"],time:"2PM-6PM"},
        ]
    }
    handleSubmitPerson =(person,index) =>{
        const s1 = {...this.state}
        index
        ? (s1.persons[+index]=person) 
        : s1.persons.push(person)   
        console.log(s1.persons)
        this.setState(s1)
    }

    render(){
        let {persons} = this.state
        console.log(persons)
        return(
        <div className="container">
              <Switch>
                  <Route path="/persons/add" 
                  render={(props)=>(
                  <PersonForm {...props} onSubmit={this.handleSubmitPerson}/>
                  )}/>
                   <Route path="/persons/:index/edit" 
                  render={(props)=>(
                  <PersonForm {...props} persons={persons} onSubmit={this.handleSubmitPerson}/>
                  )}/>
                  <Route path="/" 
                  render={(props)=>(
                  <DisplayDetails {...props} persons={persons}/>
                  )}/>
              </Switch>
        </div>)
    }
}
export default MainComponent;