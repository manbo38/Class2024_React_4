import React from "react";

// props로 값 전달하기
// function MyComponent2(props){
const MyComponent2 = (props) => {
    return(
        <div>
            <h1>안녕하세요?</h1>
            <h1>제 이름은 {props.name}입니다.</h1>

        </div>

    );

}

export default MyComponent2;