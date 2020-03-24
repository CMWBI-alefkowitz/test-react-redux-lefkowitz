import React from "react";

export const ListTable = ({ groceryList }) => {
  const groceryItems = groceryList.map(
    ({ id, name, category, deliveryMethod }) => {
      return (
        <table>
          <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{category}</td>
            <td>{deliveryMethod}</td>
            <td>
              <button>remove</button>
            </td>
            <td>
              <button>select</button>
            </td>
            <td>
              <button>deselect</button>
            </td>
          </tr>
        </table>
      );
    }
  );

  return <div className="listTable">List Table {groceryItems}</div>;
};

export default ListTable;
