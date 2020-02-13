const USER_TYPING_ACTION_TYPE = '@profile/USER_TYPING';

interface IState {
  typing: boolean;
}

const INITIAL_STATE: IState = {
  typing: false
};

interface IAction {
  type: string;
  payload: {
    isTyping: boolean;
  };
}

export default function reducer(
  state = INITIAL_STATE,
  action: IAction
): IState {
  switch (action.type) {
    case USER_TYPING_ACTION_TYPE:
      console.log('user typing...');
      return {
        typing: action.payload.isTyping
      };

    default:
      console.log("default...");
      return state;
  }
}

//ACTION
export function setUserTyping(isTyping: IState["typing"]): IAction {
  return {
    type: USER_TYPING_ACTION_TYPE,
    payload: {
      isTyping: isTyping
    }
  };
}