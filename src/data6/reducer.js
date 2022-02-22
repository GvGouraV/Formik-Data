//const initialState = {
   // players:[
    //    {name:"jack",score:20},
//{name:"Steve",score:25},
     //   {name:"Martha",score:22},
      //  {name:"Bob",score:26},
        //{name:"Gourav",score:30}
    //  ]
//}
const initialState = {
    stocks : [
        {name:"Coca Cola",code:"C332",price:20,Quantity:10},
        {name:"5 Star",code:"P168",price:15,Quantity:0},
        {name:"Maggi",code:"M228",price:28,Quantity:22},
        {name:"Pepsi",code:"P228",price:20,Quantity:18},
        {name:"Dairy Milk",code:"D311",price:40,Quantity:0},
        {name:"Mirinda",code:"M301",price:25,Quantity:8},
        {name:"Kitkat",code:"K477",price:16,Quantity:11},
        {name:"Red Bull",code:"R544",price:90,Quantity:3},
    ]
}
 const reducer = (state = initialState,action)=>{
     console.log(state,action)
     if(action.type==="SELL"){
         const stocks = state.stocks
        const stocks1 = stocks.map(item=> item.name===action.payload.name
             ?{...item , Quantity:item.Quantity+1}
             :item )
          return {stocks : stocks1};
     }
     else if(action.type==="BUY"){
        const stocks = state.stocks
       const stocks1 = stocks.map(item=> item.name===action.payload.name
            ?{...item , Quantity:item.Quantity-1}
            :item )
         return {stocks : stocks1};
    }
     return state
     
 }

 export default reducer;