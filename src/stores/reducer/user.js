const initialState = {
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
    case "SORTFULLTIMEJOB_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: ""
      };
    }
    case "SORTFULLTIMEJOB_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.msg
      };
    }
    case "SORTFULLTIMEJOB_REJECTED": {
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
