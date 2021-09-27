const notesReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        list: [...state.list, action.noteText],
      };
    case 'REMOVE_NOTE':
      return {
        list: [...state.list.slice(0, action.index), ...state.list.slice(action.index + 1)],
      };
    default:
      return state;
  }
};

export default notesReducer;
