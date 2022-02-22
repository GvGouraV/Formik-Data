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
    products:[
        {name:"I Pad 4 Mini",price:500.01,qty:2},
        {name:"H&M T-Shirt White",price:10.99,qty:10},
        {name:"Charli XCX-Sucker CD",price:1999,qty:5}
    ],
    stocks : []
}
 const reducer = (state = initialState,action)=>{
     console.log(state,action)
     if(action.type==="SELL"){
         const products = state.products
         const stocks = state.stocks
         let s1 = stocks.find(itm=>itm.name==action.payload.name)
         if(s1){
             let s2 = products.find(itm=>itm.qty==s1.qty&&itm.name==s1.name)
             if(s2){

             }else{
                 const stocks1 = stocks.map(item=> item.name===action.payload.name?{...item,qty:item.qty+1}:item)
                 return {stocks : stocks1,products:products};
           }
         }else{
            const stocks1 = [...stocks,action.payload]         
            return {stocks : stocks1,products:products};
         }
     }
 
     return state
     
 }

 export default reducer;