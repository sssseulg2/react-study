import {Card} from 'react-bootstrap'

function Recent() {
    return(
        <Card border="light" className='recent'>
        <Card.Header>최근 본 항목</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Recent