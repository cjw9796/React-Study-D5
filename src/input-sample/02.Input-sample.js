import { useState } from "react";
function Inputmain() {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        /*변환될 값*/
        setText(event.target.value);
    }
    const handleReset = () => {
        //setText 괄호 안이 "" 이기 때문에 초기화 버튼을 누르면 값이 사라짐
        setText("");
    }
    return(
        <div>
            <input onChange={handleChange} value={text}/>
            <button onClick={handleReset}> 초기화 </button>
            <div>
                <b> 값 : {text} </b>
            </div>
        </div>
    );
}
export default Inputmain;