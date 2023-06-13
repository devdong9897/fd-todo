import React from "react";
import ListItem from "./ListItem";

const List = ({ todoData, setTodoData }) => {
  console.log("List 랜더링");
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

export default React.memo(List);
