import React, { useState } from 'react';
import './employees-add-form.css';

const EmployeesAddForm = ({ handleAddEmployees }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeSalary = (e) => {
    setSalary(e.target.value)
  }

  const clearInput = () => {
    setName('');
    setSalary('');
  }

  const addEmployeer = (e) => {
    e.preventDefault();
    const data = Date.now()
    if (name.length > 0 && salary !== '') {
      const newWorker = {
        id: data,
        name,
        salary,
        isIncrease: false,
        like: false
      }
      handleAddEmployees(newWorker);
      clearInput();
    }
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={addEmployeer}
        className="add-form d-flex">
        <input type="text"
          value={name}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={onChangeName} />
        <input type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          value={salary}
          onChange={onChangeSalary} />

        <button type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  )
}

export default EmployeesAddForm;