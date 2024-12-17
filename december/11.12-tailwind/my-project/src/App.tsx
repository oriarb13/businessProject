import './App.css';
import productImage from './assets/images/image-product-desktop.jpg';
import productImage1 from './assets/images/image-product-mobile.jpg';
import { FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <div className='min-h-screen w-full bg-cream text-sm'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src={window.innerWidth < 768 ? productImage1 : productImage}
            alt="Product"
            className="h-full w-full object-cover rounded-tl-lg rounded-bl-lg"
          />
        </div>

        <div className="flex-1 bg-white rounded-tr-lg rounded-br-lg p-6">
          <div className="w-full md:w-[80%] mx-auto">
            <h1 className="text-darkGrayishBlue tracking-[0.2em] uppercase">
              {'Perfume'}
            </h1>
            <h2 className="mt-4 text-veryDarkBlue font-bold text-3xl leading-8">
              Gabrielle Essence Eau De Parfum
            </h2>
            <p className="text-darkGrayishBlue mt-10 tracking-[0.07em]">
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex mt-12">
              <h1 className="text-darkCyan text-2xl">$149.99</h1>
              <span className="text-darkGrayishBlue line-through ml-8 text-xl">$169.99</span>
            </div>

            <div className="mt-10 flex bg-darkCyan text-white rounded-xl px-4 py-4 text-center justify-center items-center cursor-pointer">
              <FaShoppingCart className="mr-4" />
              <span>Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
