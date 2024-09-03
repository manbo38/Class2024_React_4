import React from "react";

// ES6의 비구조화 할당 문법을 사용하여 내부의 값 추출하기
// function MyCompnent4(props){
const MyCompnent4 = (props) => {
    // props로 받은 값을 name과 childrens변수에 할당
    const {name,children} = props;
    return(
        <div>
            <h1>안녕하세요?</h1>
            <h1>제 이름은 {name}입니다.<br/>
                children 값은 {children}입니다.            
            </h1>
        </div>
    );
}

export default MyCompnent4;