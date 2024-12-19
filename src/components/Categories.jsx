import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../store/entities/filterSlice';

function Categories() {
  const categories = ['Все', 'Классические', 'Запеченные', 'Маки', 'Сашими', 'Гунканы', 'Нигири'];

  const dispatch = useDispatch();
  const currentCategoryId = useSelector((state) => state.filter.categoryId);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={currentCategoryId === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
