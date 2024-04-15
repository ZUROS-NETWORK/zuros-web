import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
    SetWebstoreIdentifier,
    GetCategories,
    GetCategory,
    GetPackages,
    GetPackage,
    CreateMinecraftBasket,
    GetBasket 
  } from "tebex_headless";
const ProductDetails = () =>{
    const [Package, setPackage] = useState([]);
    const params = useParams();
    
    const fetchCategories = async () => {
      try {
        const PackageData = await GetPackage(params.prodcutId);
        console.log(PackageData)
        setPackage(PackageData);
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }
    };
  
    useEffect(() => {
      fetchCategories();
    }, []);









    return (
        <aside className=''>
            <figure className=''>
                <figcaption className=''>
                    {Package.name}
                </figcaption>
                <figcaption className='font-medium text-xl'>
                    {Package.total_price}
                </figcaption>
            </figure>

            <p className="my-16">
                {Package.description}
            </p>
        </aside>
      );
}

export default ProductDetails;