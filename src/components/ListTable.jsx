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
        <table>
          <tbody>
            <tr key={id}>
              <td>{name}</td>
              <td>{id}</td>
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
          </tbody>
        </table>
      );
    }
  );

  return <div className="listTable">List Table {groceryItems}</div>;
};

export default ListTable;
