import { useState, useEffect } from "react";
import { getCategories, getPackages } from "../services/api";

const useProducts = () => {
  const [categories, setCategories] = useState([]);
  const [packages, setPackages] = useState([]);
  const [packageDetails, setPackageDetails] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(2154552);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setError(null);
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getPackages(selectedCategoryId);
        setPackages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadPackages();
  }, [selectedCategoryId]);

  function showDetails(id) {
    const product = packages.find((item) => item.id === id);
    setPackageDetails(product || null);
  }

  function closeDetails() {
    setPackageDetails(null);
  }

  return {
    categories,
    packages,
    packageDetails,
    selectedCategoryId,
    isLoading,
    error,
    setSelectedCategoryId,
    showDetails,
    closeDetails
  };
};

export default useProducts;
