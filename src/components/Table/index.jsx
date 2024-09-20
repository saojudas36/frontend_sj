import React from "react";
import styles from "./Table.module.css";
import Actions from "../Actions";
import AddButton from "../AddButton";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import Avatar from "../Avatar";

export default function Table({
  columns,
  data,
  className,
  onDeleteSelected,
  onDelete,
  onSelect,
  additionalColumn,
  selectedIds = [],
}) {
  return (
    <>
      <Actions>
        <AddButton path={"/management/register"} />
        <DeleteButton onClick={onDeleteSelected} />
      </Actions>
      <table className={`${styles.table} ${className}`}>
        <thead>
          <tr>
            <th>X</th>
            {columns.map((column, index) => (
              <th className={styles.disappeared} key={index}>
                {column}
              </th>
            ))}
            <th className={styles.appearead}></th>
            <th className={styles.appearead}>{additionalColumn}</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => onSelect(row.id)}
                />
              </td>
              <td className={styles.appearead}>
                <Avatar nome={row.nome} className={styles.avatar}/>
              </td>
              {columns.map((column, colIndex) => (
                <td className={styles.perfil} key={colIndex}>
                  {row[column.toLowerCase()]}
                </td>
              ))}
              <td>
                <div className={styles.btns}>
                  <EditButton />
                  <DeleteButton onClick={() => onDelete(row.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
