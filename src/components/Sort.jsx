import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSorting } from '../store/entities/filterSlice';

export const sortingList = [
  { name: 'популярности ↓', sortProperty: 'rating&order=desc' },
  { name: 'популярности ↑', sortProperty: 'rating&order=asc' },
  { name: 'цене ↓', sortProperty: 'price&order=desc' },
  { name: 'цене ↑', sortProperty: 'price&order=asc' },
  { name: 'алфавиту ↓', sortProperty: 'title&order=desc' },
  { name: 'алфавиту ↑', sortProperty: 'title&order=asc' },
];

function Sort() {
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const currentSorting = useSelector((state) => state.filter.currentSorting);

  const sortRef = React.useRef(null);

  const handleElementClick = (sortingObj) => {
    dispatch(setCurrentSorting(sortingObj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{currentSorting.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortingList.map((element, i) => (
              <li
                key={i}
                onClick={() => handleElementClick(element)}
                className={currentSorting.sortProperty === element.sortProperty ? 'active' : ''}>
                {element.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
