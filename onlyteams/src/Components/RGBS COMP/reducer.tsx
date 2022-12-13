type stateType = {
  red: number;
  blue: number;
  green: number;
};

type ActionType = {
  type: "ADJUST_RED" | "ADJUST_BLUE" | "ADJUST_GREEN";
  payload: number;
};

export const reducer = (state: stateType, action: ActionType) => {
  switch (action.type) {
    case "ADJUST_RED":
      return {
        ...state,
        red: action.payload,
      };
    case "ADJUST_BLUE":
      return {
        ...state,
        blue: action.payload,
      };
    case "ADJUST_GREEN":
      return {
        ...state,
        green: action.payload,
      };
    default:
      return state;
  }
};
