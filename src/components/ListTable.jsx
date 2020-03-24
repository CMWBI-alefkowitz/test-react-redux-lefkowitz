import React from "react";

export const ListTable = ({
  groceryList,
  removeItem,
  selectItem,
  deselectItem
}) => {
  const groceryItems = groceryList.map(
    ({ id, name, category, deliveryMethod }) => {
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{category}</td>
          <td>{deliveryMethod}</td>
          <td>
            <button onClick={removeItem}>remove</button>
          </td>
          <td>
            <button onClick={selectItem}>select</button>
          </td>
          <td>
            <button onClick={deselectItem}>deselect</button>
          </td>
        </tr>
      );
    }
  );

  return (
    <div className="listTable">
      <table>
        <thead>
          <tr>
            <td>List Table</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Delivery Method</td>
          </tr>
        </thead>
        <tbody>{groceryItems}</tbody>
      </table>
    </div>
  );
};

export default ListTable;
