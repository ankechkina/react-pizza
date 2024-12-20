import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCurrentPage } from '../store/entities/filterSlice';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.currentSorting);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  React.useEffect(() => {
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    axios
      .get(
        `https://66b4c00c9f9169621ea4362e.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortType.sortProperty}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, currentPage]);

  const filteredSushi = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item) => <SushiBlock key={item.imageUrl} {...item}></SushiBlock>);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index}></Skeleton>);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все роллы</h2>
      <div className="content__items">
        {isLoading ? (
          skeletons
        ) : filteredSushi.length > 0 ? (
          filteredSushi
        ) : (
          <p className="not-found-text">К сожалению, ничего не найдено 😔</p>
        )}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
