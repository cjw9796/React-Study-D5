/** useReducer : state 가 너무 많아지거나 부모와 자식간의 관계가 복잡한 경우에 
 *                  관리를 해줘서 빠르게 작업할 수 있게 도와주는 Hook
 * 
 * dispatch(타입의 이벤트를 발생시키는 역할)가 reducer를 호출함 
 *      reducer는 store에 가서 현재 state값을 가져와서 그리고 새로운 state 반환해줌 
 *      Component -(dispatch) -> Action -> Reducer -> Store 
 *       dispatch({type:'값'}); 
 *       dispatch({type:'값', data: '변경될 값'}); 
 *   
 * 
*/


import { useReducer } from "react";

function reducer(state, action){
    switch(action.type) {
        case 'PLUS': 
            return state +1; 
        case 'MINUS':   
            return state -1; 
        default:
            return state;        
    }
}

export default function Count(){
    // const [상태객체, 디스패치함수] = useReducer(reducer함수, 초기상태)
    const [number, dispatch] = useReducer(reducer,0)

    const onPlus = () => {
        dispatch({type:'PLUS'}); 
    }

    const onMinus = () => {
        dispatch({type:'MINUS'}); 
    }
    

    return(
        <div>
            <h3>{number}</h3>
            <button onClick={onPlus}> +1 </button>
            <button onClick={onMinus}> -1 </button>
        </div>
    )
}
// export default function Uredec () {
//     return(
//         <div>
            
//         </div>
//     );
// }