import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content: content,
            completed: false,
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload
      const todo = state.byIds[id]
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...todo,
            completed: !todo.completed
          }
        }
      };
    }
    default:
      return state;
  }
}