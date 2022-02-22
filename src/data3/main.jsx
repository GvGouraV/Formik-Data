import React, {Component} from "react";
import FormPage from "./formPage2";
class Main extends  Component{
  
    state={
        dataArr:[
            {country: "India",cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]},
            {country: "USA",cities: ["Los Angeles", "Chicago", "New York", "Seattle"]},
            {country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"]},
            {country: "Japan", cities: ["Tokyo", "Kyoto"]},
            {country: "China", cities: ["Shanghai", "Beijing", "Shenzen"]}]
       }

    render(){
      let {dataArr} = this.state
        return(
        <div className="container">
             <FormPage dataArr={dataArr}/>
        </div>)
    }
}
export default Main;