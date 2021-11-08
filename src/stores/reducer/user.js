const initialState = {
  users: {},
  isLoading: false,
  isError: false,
  message: ""
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "POSTHIRE_PENDING": {
      return {
        ...state,
        isLoading: true,
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
        isLoading: false,
        isError: true,
        message: action.payload.data.msg
      };
    }

    // GET USER
    case "GET_ALL_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
        users: []
      };
    }
    case "GET_ALL_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload.data.data,
        message: action.payload.data.msg
      };
    }
    case "GET_ALL_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        users: [],
        message: action.payload.data.msg
      };
    }

    // GET_USER_BY_ID
    case "GET_USER_BY_ID_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
        users: []
      };
    }
    case "GET_USER_BY_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload.data.data[0],
        message: action.payload.data.msg
      };
    }
    case "GET_USER_BY_ID_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        users: [],
        message: action.payload.data.msg
      };
    }

    // UPDATE USER
    case "UPDATE_USER_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "UPDATE_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "UPDATE_USER_REJECTED": {
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
