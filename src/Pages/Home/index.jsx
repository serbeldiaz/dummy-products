import './index.css';
import Products from '../../components/Products';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Dummy Products Online</h1>
      <div className='product-list-container'>
        <Products />
      </div>
    </div>
  );
}

export default Home;
