
export const translateReducer = (state, action) => {

    console.log(state);


    switch (action.type) {
        case 'set-translate':
            return { ...state, translate: action.payload };
        case 'set-translated':
            return { ...state, translated: action.payload }
        case 'set-languaje-origin':
            return { ...state, languageOrigin: action.payload }
        case 'set-languaje-target':
            return { ...state, languageTarget: action.payload }
        case 'set-reverse':
            return { ...state, languageTarget: state.languageOrigin, languageOrigin: state.languageTarget, translate: state.translated }
        default:
            return state;
    }

}