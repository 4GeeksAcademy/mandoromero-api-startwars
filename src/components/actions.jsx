
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';


export const addToFavorites = (entity) => ({
  type: ADD_TO_FAVORITES,
  payload: entity,
});

export const removeFromFavorites = (entity) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: entity,
});