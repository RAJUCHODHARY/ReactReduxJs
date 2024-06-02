const initilastate={
    user_data :[]
}

export const Tosoreduser=(state=initilastate,action)=>{
    switch(action.type){
        case "add-data" :
            return {
                ...state,
                user_data :[...state.user_data,action.payload]
            }
        case "rmv-data":
            const dltdata=state.user_data.filter((ele,k)=>k !==action.payload)
            return{
                ...state,
                user_data :dltdata
            }
        case "upd-data":
            const updetedata=state.user_data.map((ele,k)=> k  == action.d ? action.payload : ele)
            return{
                ...state,
                user_data :updetedata
            }
        default:
                return state 
    }
}
