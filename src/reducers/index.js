//action = {
//    type: 'CREATE_EVENT',
//    title:'2020東京オリンピックのお知らせ'
//    body:'2020東京オリンピックを開催します。つきまして、、'
//}
// before
// state = []
//
// #after
// state = [
//     {id: 1, title: 'タイトル1', body: 'ボディー1'}
//     {id: 2, title: 'タイトル2', body: 'ボディー2'}
//     {id: 3, title: 'タイトル3', body: 'ボディー3'}
// ]
//
// #before
// state = [
//     {id: 1, title: 'タイトル1', body: 'ボディー1'}
//     {id: 2, title: 'タイトル2', body: 'ボディー2'}
//     {id: 3, title: 'タイトル3', body: 'ボディー3'}
// ]
// #after
// state = [
//     {id: 1, title: 'タイトル1', body: 'ボディー1'}
//     {id: 2, title: 'タイトル2', body: 'ボディー2'}
//     {id: 3, title: 'タイトル3', body: 'ボディー3'}
//     {id: 4,
//     title:'2020東京オリンピックのお知らせ'
//     body:'2020東京オリンピックを開催します。つきまして、、'
// }
// ]
//    type: 'CREATE_EVENT',
//    title:'2020東京オリンピックのお知らせ'
//    body:'2020東京オリンピックを開催します。つきまして、、'
//}
const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}


export default events