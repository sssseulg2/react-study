import { useState } from "react";
import "./App.css";

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [titleNum, setTitleNum] = useState(0)
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (

    <div className="App">
      <div className="nav">
        <h4>블로그</h4>
      </div>

      {
        title.map(function(n, i){
          return (
            <div className="list" key={i}>
            <h4 onClick={() => { setModal(!modal); setTitleNum(i); }}>{title[i]}</h4>
            <span onClick={() => {
              let copy = [...good];
              copy[i] = copy[i]+1;
              setGood(copy);
              }}>👍🏻 {good[i]}</span>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }


      <button onClick={() => {
        let copy = [...title];
        copy = copy.sort();
        setTitle(copy);
      }}>정렬</button>

      <button onClick={() => {
        // modal == true ? setModal(false) : setModal(true);
        setModal(!modal);
      }}>modal</button>

      {
        modal == false ? null : <Modal title={title} setTitle={setTitle} titleNum={titleNum}/>
      }

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

function Modal(props){
  return (
    <div className="modal">
      <h4>{props.title[props.titleNum]}</h4>
      <p>date</p>
      <p>detail</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;
