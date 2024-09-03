import React from "react";

// 함수의 매개변수로 바로 값 전달하기
// function MyComponent5({name, children, favoriteNumber}){
const MyComponent5 = ({name, children, favoriteNumber}) => {
    return(
        <div>
            <h1>안녕하세요?</h1>
            <h1>제 이름은 {name} 입니다.<br/>
                childeren 값은 {children} 입니다.
            </h1>
            <h1>제가 좋아하는 숫자는 {favoriteNumber}입니다.</h1>
        </div>
    );
}

export default MyComponent5;