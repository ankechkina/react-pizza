import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';
import Pagination from '../components/Pagination';
//import { SearchContext } from '../App';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const { searchValue } = React.useContext(SearchContext);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности ↓',
    sortProperty: 'rating&order=desc',
  });

  React.useEffect(() => {
    const category = categoryId > 0 ? `?category=${categoryId}` : '';
    const separator = category ? '&' : '?';

    fetch(
      `https://66b4c00c9f9169621ea4362e.mockapi.io/items${category}${separator}sortBy=${sortType.sortProperty}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(sorting) => setSortType(sorting)} />
      </div>
      <h2 className="content__title">Все роллы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index}></Skeleton>)
          : items.map((item) => <SushiBlock key={item.imageUrl} {...item}></SushiBlock>)}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
