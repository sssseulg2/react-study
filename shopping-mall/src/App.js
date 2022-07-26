import { Nav, Navbar, Container} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Event from './pages/Event';
import Cart from './pages/Cart';
import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify( [] ))
    }
  }, [])
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">슬구 shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/event" element= {<Event/>}>
          <Route path="one" element={<div>첫 주문시 양말 서비스</div>}/>
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
