const reducer = (state, action) => {
    
    switch (action.type){
        case 'SET_ITEM_MINICART':
            return{
                ...state,
                miniCart: [...state.miniCart, action.payload]
            }
        case 'DELETE_ITEM_MINICART':
            return{
                ...state,
                miniCart: state.miniCart.filter(items => items.minicart.id !== action.payload)
            }
        default:
            return state;
    }

}

export default reducer