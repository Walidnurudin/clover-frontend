const initialState = {
  idUser: "",
  isError: false,
  isLoading: false,
  msg: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        idUser: action.payload.data.data.id,
        msg: action.payload.data.msg
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        idUser: "",
        msg: action.payload.response.data.msg
      };
    }
    case "LOGOUT_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: ""
      };
    }
    case "LOGOUT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "LOGOUT_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    case "CBFORGOTPASS_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: ""
      };
    }
    case "CBFORGOTPASS_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "CBFORGOTPASS_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    case "RESETPASSWORD_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: ""
      };
    }
    case "RESETPASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg
      };
    }
    case "RESETPASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        msg: action.payload.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
