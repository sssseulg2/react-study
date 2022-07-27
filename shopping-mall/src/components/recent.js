import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Recent({shoes}) {
    let recentList = JSON.parse(localStorage.getItem('watched'));
    recentList = recentList.map((r) => {return parseInt(r, 10)})
    let recentIndexList = recentList.map((n) => {return shoes.findIndex((s) => s.id === n)})
    console.log(shoes)


    return(
        <Card border="light" className='recent'>
        <Card.Header>최근 본 항목</Card.Header>
        <Card.Body>
            {
                recentIndexList.map((index) => {
                    let number = index+1
                    return(
                        <div key ={index}>
                        <Link to={`/detail/${index}`} className="item">
                        <Card.Title>{shoes[index].title}</Card.Title>
                        <Card.Text><img src={"https://codingapple1.github.io/shop/shoes"+ number +".jpg"} width="80%" alt=""/></Card.Text>
                        </Link>
                        </div>
                    )
                })
            }
        </Card.Body>
      </Card>
    )
}
export default Recent