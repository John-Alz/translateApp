
export const translateReducer = (state, action) => {

    switch (action.type) {
        case 'set-translate':
            return { ...state, translate: action.payload };
        case 'set-translated':
            return { ...state, translated: action.payload }
        case 'set-languaje-origin':
            return { ...state, languageOrigin: action.payload }
        case 'set-languaje-target':
            return { ...state, languageTarget: action.payload }
        default:
            return state;
    }

}