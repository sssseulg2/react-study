import { createSlice } from '@reduxjs/toolkit'


let cartList = createSlice({
    name: 'cartList',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
      changeCount(state, action){
        let index = state.findIndex((a)=>{ return a.id === action.payload })
        state[index].count++
      },
      addList(state, action) {
        let index = state.findIndex((a)=>{ return a.id === action.payload.id })
        index === -1 ? state.push(action.payload) : state[index].count ++;
      },
      deleteList(state, action) {
        let index = state.findIndex((a)=>{ return a.id === action.payload })
        state.splice(index, 1)
      }
    },
})

export let {changeCount, addList, deleteList} = cartList.actions;

export default cartList