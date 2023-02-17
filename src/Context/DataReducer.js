const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_DATA": {
      return {
        data: state,
      };
    }
    case "FILTER_BY_NAME": {
      const filteredByName = state.filter((item) =>
        item.toLowerCase.includes(action.payload)
      );
      return {
        data: filteredByName,
      };
    }
    default:
      return state;
  }
};

export default DataReducer;
