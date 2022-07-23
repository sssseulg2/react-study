import { Row, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import data from '../data';
import Item from '../components/Item.js'
import axios from 'axios';
import '../App.css';



function Main() {
    let [shoes, setShoes] = useState(data);
    let [buttonCount, setButtonCount] = useState(0);

    function onClickButton() {
        buttonCount === 0 
        ? (axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
            setShoes(shoes.concat(result.data));

        }))
        : (axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((result) => {
            setShoes(shoes.concat(result.data));
        }))
        
        setButtonCount(buttonCount+1);
    }
    return(
        <>
        <div className="main-bg"></div>
        <Container>
            <Row className="item-row">
                {shoes.map(function(n,i){
                    return (
                        <Item shoes={n} number={i+1}></Item>
                    )
                })}
            </Row>
            {
                buttonCount !== 2
                ?
                <Button variant="outline-secondary" onClick={onClickButton}>더보기</Button>
                : null
            }
            
        </Container>
        </>
    )
}

export default Main;