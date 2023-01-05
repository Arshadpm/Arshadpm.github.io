// export const initialState = true;

// export const reducer = (state,action) => {
//     if(action.type === "USER") {
//         return action.payload;
//     }
//     return state;
// }



export const initialState ={
    "login":true,
    name:"",
    role:""
    }

export const reducer = (state,action) => {
    if(action.type === "USER") {
        return {...state, login: action.payload}
    }else if(action.type === "NAME"){
        return {...state,name: action.payload}
    }
    else if(action.type === "ROLE"){
            return {...state,role: action.payload}
    }
    return state;
}

