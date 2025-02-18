
export const translateReducer = (state, action) => {

    switch (action.type) {
        case 'set-translate':
            return { ...state, translate: action.payload };
        case 'set-translated':
            return { ...state, translated: action.payload }
        default:
            return state;
    }

}