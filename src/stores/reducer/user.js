const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  message: ""
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "POSTHIRE_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "POSTHIRE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "POSTHIRE_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        message: action.payload.data.msg
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
