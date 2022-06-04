const task = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("200 ok");
  } else {
    reject("404 not found");
  }
});

import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  task.then(
    (resp) => console.log(resp),
    (err) => console.log(err)
  );
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1}></ItemCount>
    </div>
  );
};

export default ItemListContainer;
