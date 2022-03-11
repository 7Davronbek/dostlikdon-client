

const initialState = {
    pageLoading: true
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case "CHANGE_LOADING":
            return{
                ...state, ...action.payload
            }

        default: return state;
    }
}