import React from 'react';
import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, lik, inc, onDelete, onIncrease, onLike }) => {
  let style = 'listGroupItem'
  if (inc) {
    style += " increase"
  }
  if (lik) {
    style += " like"
  }

  return (
    <li className={style} >
      <span className="list-group-item-label" onClick={onLike}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm " onClick={onIncrease}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm "
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li >
  )
}

export default EmployeesListItem;