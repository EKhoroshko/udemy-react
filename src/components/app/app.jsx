import React, { useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Morgan Freeman", salary: 5000, isIncrease: false, like: false },
    { id: 2, name: "Batman", salary: 500, isIncrease: true, like: false },
    { id: 3, name: "Stiven King", salary: 3200, isIncrease: false, like: false },
    { id: 4, name: "Nik Perymov", salary: 900, isIncrease: false, like: true },
  ]);
  const [search, setSearch] = useState('');
  const [btnName, setBtnName] = useState('all');

  const increased = list.filter(item => item.isIncrease).length;

  const handleAddEmployees = (newWorker) => {
    const newList = [...list, newWorker];
    setList(newList);
  }

  const handleDelete = (id) => {
    const updateList = list.filter(item => item.id !== id);
    setList(updateList);
  }

  const changeIsIncrease = (id) => {
    setList(list.filter(item => {
      if (item.id === id) {
        item.isIncrease = !item.isIncrease
      }
      return item;
    }))
  }

  const likeEmployeer = (id) => {
    setList(list.filter(item => {
      if (item.id === id) {
        item.like = !item.like
      }
      return item;
    }))
  }

  const searchValue = (value) => {
    setSearch(value);
  }

  const filterList = (arr, value) => {
    if (value.length === 0) {
      return arr;
    }
    return arr.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
  }

  const onFilterSelect = (name) => {
    setBtnName(name);
  }

  const sortedList = (arr, name) => {
    switch (name) {
      case 'rise':
        return arr.filter(item => item.isIncrease);
      case 'moreThen1000':
        return arr.filter(item => item.salary > 1000);
      default:
        return arr;
    }
  }

  const visibleData = sortedList(filterList(list, search), btnName);

  return (
    <div className="app">
      <AppInfo employees={list.length} increased={increased} />

      <div className="search-panel">
        <SearchPanel onSearchEmploeer={searchValue} />
        <AppFilter onFilterSelect={onFilterSelect} btnName={btnName} />
      </div>

      <EmployeesList
        list={visibleData}
        onDelete={handleDelete}
        onIncrease={changeIsIncrease}
        onLike={likeEmployeer} />
      <EmployeesAddForm handleAddEmployees={handleAddEmployees} />
    </div>
  );
}

export default App;