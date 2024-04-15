import './styles.css'
import {
  SetWebstoreIdentifier,
  GetCategories,
  GetCategory,
  GetPackages,
  GetPackage,
  CreateMinecraftBasket,
  GetBasket
} from "tebex_headless";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
SetWebstoreIdentifier("l9j9-cf13199dfe8cadbcdbb253df6ad3b7c001042512");

const Products = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const categoriesData = await GetCategories(false);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);




  //////////////////////
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packageData = await GetPackages();
        setPackages(packageData);
        console.log(packageData)
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);
  ///////////////////





  return (
    <section className='categories-section'>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button className='category-button'>{category.name}</button>
          </li>
        ))}
      </ul>
      <div className="product-grid">
        {packages.map((packageItem) => (
          <div key={packageItem.id} className="product-item">
            <Link to={`./${packageItem.id}`}>
              <img className='product-image' src={packageItem.image} alt="" />
              <h5>{packageItem.name}</h5>
            </Link>
            <div className='product-sale'>
              <p>{packageItem.total_price} {packageItem.currency}</p>
              <Link to={`./${packageItem.id}`}>Comprar</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
