import { useState } from "react";
import "./App.css";

function App() {

  let [title, titleModify] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [good, goodModify] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>블로그</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy = copy.sort();
        titleModify(copy);
      }}>정렬</button>

      <div className="list">
        <h4>{title[0]} <span onClick={() => {goodModify(good+1)}}>👍🏻</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />

    </div>
  );
}

/*
컴포넌트 언제쓰냐
반복적인 html 축약할때
큰 페이지들
자주 변경되는 것들

컴포넌트 단점
다른 함수 변수 가져다 쓸수 없음 state 갖다쓸때

let Modal = () => {}
const Modal = () => {}
*/
function Modal(){
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>detail</p>
    </div>
  )
}

export default App;
