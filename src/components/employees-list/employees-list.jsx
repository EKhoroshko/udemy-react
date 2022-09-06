import React from 'react';
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ list, onDelete, onIncrease, onLike }) => {

  return (
    <ul className="app-list list-group">
      {list && list.map(item => {
        return <EmployeesListItem
          key={item.id}
          name={item.name}
          salary={item.salary}
          lik={item.like}
          inc={item.isIncrease}
          onDelete={() => onDelete(item.id)}
          onIncrease={() => onIncrease(item.id)}
          onLike={() => onLike(item.id)}
        />
      })}
    </ul>
  )
}

export default EmployeesList;