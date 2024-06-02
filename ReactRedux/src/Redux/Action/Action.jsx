export const Add =(items)=>{
    return {
        type : "add-data",
        payload :items
    }
}
export const Remove =(id)=>{
    return {
        type : "rmv-data",
        payload :id
    }
}
export const Updates =(items,id)=>{
    return {
        type : "upd-data",
        payload : items,
        d : id
    }
}