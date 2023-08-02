//1) 이름 변경하는 컴포넌트 만들기
// 과제  2번 
import { useState } from "react";

function Inputname(){
    const[name, setName] = useState("");
    const [text, setText] = useState("");

    const handleJoin = () => {
        setName(text);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleReset = () => {
        setText("");
    }

return(
    <div>
        
        {name === ""?(
            <input
            onChange={handleChange}
            placeholder="이름 입력"
            value={text}
            />
        ):(
            <div>{name}님 환영합니다.</div>
        )}
        <div>
            <b>값 : {text} </b>
        </div>
        <button onClick={handleJoin}> 등록 </button>
        <button onClick={handleReset}>초기화</button>

        <br/><br/><br/>
    </div>
);
}
export default Inputname;