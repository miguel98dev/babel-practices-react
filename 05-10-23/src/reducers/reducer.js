/* eslint-disable no-case-declarations */
export const initialState = {
  list: [],
  selectedItem: undefined
}

// const sampleAction = {
//   type: 'list/addItem',
//   payload: {
//     name: 'no se que',
//     conditions: true,
//     city: 'Barcelona',
//     id: 5
//   }
// }

// function createAddItemAction(name, conditions, city, id) {
//   const payload = { name, conditions, city, id }

//   return {
//     payload,
//     type: 'list/addItem',
//   }
// }

// const action1 = createAddItemAction("no se que", true, "Barcelona", 5)
// const action2 = createAddItemAction("no se cuantos", false, "Madrid", 6)
// dispatch(action)

const reducer = (state, action) => {
  switch (action.type) {
    case 'list/addItem':
      // action =
      //  type: 'list/addItem'
      //  payload: { name, conditions, city, id }

      const newList = [...state.list]
      newList.push(action.payload)

      // return {
      //   list: newList,
      //   selectedItem: state.selectedItem
      // }
      return {
        ...state,
        list: newList
      }
    case 'list/selectItem':
      // action =
      //  type: 'list/selectItem'
      //  payload: { id }

      return {
        ...state,
        selectedItem: action.payload.id
      }
    default:
      break
  }
}

export default reducer
