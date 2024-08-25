let initialStrate = {
  // 초기값 설정
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialStrate, action) {
  // reducer는 항상 return 해야 함

  // console.log("action은 뭘까?", action);
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 }; // ...state 를 통해서 기존 state 객체 내용을 복사해 새로운 객체에 전달, 기본으로 작성한다고 생각해야 함
  // }
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };

    case "INCREMENT":
      // return { ...state, count: state.count + 1 };
      return { ...state, count: state.count + action.payload.num };

    case "DECREASE":
      return { ...state, count: state.count - action.payload.num };

    default:
      return { ...state };
  }
}

export default reducer;
