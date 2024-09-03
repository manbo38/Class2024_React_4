import React from "react";

// 부모 컴포넌트에서 태그 사이의 값을 받을때는 props.childeren으로 받는다.

// function MyComponent3(props){
const MyComponent3 = (props) => {
    return(

        <div>
            <h1>안녕하세요?</h1>
            <h1>제 이름은 {props.name}입니다.<br/>
                children 값은 {props.children}입니다.
            </h1>
        </div>
    );

}

export default MyComponent3;