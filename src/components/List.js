import React from "react";
import ListItem from "./ListItem";

const List = ({ todoData, setTodoData }) => {
  // console.log("List 랜더링");
  return (
    <div>
      {todoData.map(item => (
        // key는 반복문에서 unique 해야한다.
        <ListItem
          key={item.id}
          todoData={todoData}
          setTodoData={setTodoData}
          item={item}
        />
      ))}
    </div>
  );
};

// 리랜더링 최적화를 위한 코드
export default React.memo(List);
