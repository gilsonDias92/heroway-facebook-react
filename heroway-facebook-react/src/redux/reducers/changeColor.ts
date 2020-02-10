const INITIAL_STATE = {
  color: "white",
};

export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "CHANGE_COLOR":
      console.log("CHANGE COLORRRRR");
      return {
        color: action.color,
      };

    default:
      console.log("default...");
      return state;
  }
}

//ACTION
export function changeColorAction(color: string) {
  return {
    type: "CHANGE_COLOR",
    color: color,
  };
}

// const INITIAL_STATE = {
//   color: "white"
// };

// export default function reducer(state = INITIAL_STATE, action: any) {
//   //state = state!== undefined ? state : {};

//   switch (action.type) {
//     case "CHANGE_COLOR": {
//       return {
//         // color: 'red' ou...
//         color: action.color
//       };
//     }
//     default:
//       return state;
//   }
// }

// // const action = changeColorAction();
// // reducer({}, action);

// // ACTION
// export function changeColorAction() {
//   return {
//     type: "CHANGE_COLOR",
//     color: "red"
//   };
// }
