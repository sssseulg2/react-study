import { Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import data from '../data';
import Item from '../components/Item.js'


function Main() {
    let shoes = useState(data);

    return(
        <>
        <div className="main-bg"></div>
        <Container>
            <Row>
                {data.map(function(n,i){
                    return (
                        <Item shoes={n} number={i+1}></Item>
                    )
                })}
            </Row>
        </Container>
        </>
    )
}

export default Main;