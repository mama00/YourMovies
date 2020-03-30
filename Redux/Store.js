import {createStore} from 'redux';

const initialState={favoritesFilm:[]}

function reducerFavorites(state=initialState,action){
    switch(action.type){
        case 'TOOGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                // Le film est déjà dans les favoris, on le supprime de la liste
                nextState = {
                ...state,
                favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                nextState = {
                ...state,
                favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
            console.log('reducer')
            console.log(nextState||state)
                return nextState || state
        default:
            return state
        
    }

}

export default createStore(reducerFavorites);