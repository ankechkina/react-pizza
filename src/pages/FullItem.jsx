import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FullItem() {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(`https://66b4c00c9f9169621ea4362e.mockapi.io/items/${id}`);
        setItem(data);
      } catch (e) {
        console.log('Ошибка при получении товара: ', e);
        navigate('/');
      }
    }
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container">
      <img src={item.imageUrl} alt="изображение товара" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>{item.price} руб.</h3>
    </div>
  );
}

export default FullItem;
