import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

function Detail() {
    let [sale, setSale] = useState(true);
    let [inputValue, setInputValue] = useState('');
    let [alert, setAlert] = useState(false);
    let shoes = useState(data)[0];
    let {id} = useParams();
    let number = Number(id)+1;

    useEffect(() => {
        setTimeout(() => { setSale(false); }, 2000)
        isNaN(inputValue) !== false ? setAlert(true) : setAlert(false)
    }, [inputValue])


    return(
        <div className="container">
            {
                sale === true
                ? <div className='alert alert-warning'>2초 이내 구매시 할인</div>
                : null
            }
            
            <div className="row">
                
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ number +".jpg"} width="100%" alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes[id].title}</h4>
                    <p>{shoes[id].content}</p>
                    <p>{shoes[id].price}</p>
                    <div><input value={inputValue} onChange={(e) => {setInputValue(e.target.value);}}></input></div>
                    { alert ? <div className='alert alert-warning'> 숫자만 입력하세요 ㅡ ㅡ </div> : null}
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;