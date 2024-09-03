
// props
// 1. props는 부모 컴포넌트에서 자식 컴포넌트에게 데이터를 전달할 때 사용한다.
// 2. props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없다.

// 자식 컴포넌트
// function Book(props) {
const Book=(props)=>{

    return(
        <div>
            <h1>이 책의 이름은 {props.name}입니다.</h1>
            <h2>이 책은 총 {props.numOfPage}페이지로 되어 있습니다.</h2><br/>
        </div>
    );
}
export default Book;