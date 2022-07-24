import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice.js';
import { changeCount, deleteList } from '../store/cartListSlice.js';

function Cart() {

    let state = useSelector((state)=> state)
    let dispatch = useDispatch();

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>추가하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
            {
              state.cartList.map((n, i)=>(
                <tr key={i}>
                  <td>{n.id}</td>
                  <td>{n.name}</td>
                  <td>{n.count}</td>
                  <td><button onClick={() => {
                    dispatch(changeCount(n.id))
                  }}>추가 </button></td>
                  <td><button onClick={() => {
                    dispatch(deleteList(n.id))
                  }}>삭제</button></td>
                </tr>
              ))
            }
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
