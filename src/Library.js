import Book from "./Book";

// 부모 컴포넌트
// function Library() {
const Library=()=>{
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage="{300}" />
            <Book name="처음 만난 AWS" numOfPage="{600}" />
            <Book name="처음 만난 리액트" numOfPage="{800}" />
        </div>
    );
}
export default Library;