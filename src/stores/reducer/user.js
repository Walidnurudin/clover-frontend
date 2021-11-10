const initialState = {
  userProfile: {},
  users: [],
  isLoading: false,
  isError: false,
  message: "",
  pageInfo: {}
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
    case "SEARCHUSER_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SEARCHUSER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "SEARCHUSER_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        message: action.payload.data.msg
      };
    }
    case "GETALLUSERS_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "GETALLUSERS_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload.data.data,
        message: action.payload.data.message,
        pageInfo: action.payload.data.pagination
      };
    }
    case "GETALLUSERS_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        message: action.payload.data.msg
      };
    }
    case "SORTSKILL_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SORTSKILL_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        users: action.payload.data.data,
        message: action.payload.data.msg
      };
    }
    case "SORTSKILL_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "SORTNAME_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SORTNAME_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        users: action.payload.data.data,
        message: action.payload.data.msg
      };
    }
    case "SORTNAME_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "SORTLOCATION_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SORTLOCATION_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        users: action.payload.data.data,
        message: action.payload.data.msg
      };
    }
    case "SORTLOCATION_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }

    // GET PROFILE
    case "GET_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
        userProfile: {}
      };
    }
    case "GET_PROFILE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userProfile: action.payload.data.data[0],
        message: action.payload.data.msg
      };
    }
    case "GET_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        userProfile: {},
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

    // UPDATE USER IMAGE
    case "UPDATE_USER_IMAGE_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "UPDATE_USER_IMAGE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "UPDATE_USER_IMAGE_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
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
      return state;
    }
  }
}
