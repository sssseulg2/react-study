import {useState, useEffect} from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../data';
import { addList } from '../store/cartListSlice.js'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';

function Detail() {
    let state = useSelector((state)=> state)
    let dispatch = useDispatch();
    let [fade, setFade] = useState("");
    let [sale, setSale] = useState(true);
    let shoes = useState(data)[0];
    let {id} = useParams();
    let number = Number(id)+1;

    let [tab, setTab] = useState(0)

    useEffect(() => {
        setTimeout(() => { setFade("end")}, 100)
        setTimeout(() => { setSale(false); }, 2000)
        return () => {
            setFade("")
        }
    }, [])


    return(
        <div className={"container start " + fade}>
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
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addList({id : shoes[id].id, name : shoes[id].title, count : 1}))
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="btn0">
                <Nav.Item>
                    <Nav.Link eventKey="btn0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="btn1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="btn2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent shoes={shoes} tab={tab}/>
        </div> 
    )
}

function TabContent(props) {
    let [fade, setFade] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setFade("end")
        }, 100)
        return ()=> {
            setFade("")
        }
    }, [props.tab])
    return (<div className={"start " + fade}>
        {[ <div>{props.shoes[0].content}</div>, <div>내용1</div>, <div>내용2</div> ][props.tab]}
    </div>)
    
}

export default Detail;