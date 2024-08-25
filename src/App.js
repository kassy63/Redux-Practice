// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
  // const [count, setCount] = useState(0); // store로 사용
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "abc", password: "123" } });
    // setCount(count + 1);
  };
  const increase = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
    // setCount(count + 1);
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { num: 1 } });
    // setCount(count + 1);
  };

  return (
    <div>
      {id ? (
        <h1>
          ID: {id} , PW: {password}
        </h1>
      ) : (
        <h1></h1>
      )}

      <button onClick={login}>로그인</button>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
