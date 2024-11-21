import React, { useEffect, useState } from 'react'
import { serverGetCategory, serverGetPramotionProduct } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const useHome = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [pramotionProductData, setPramotionProductData] = useState([]);
    const [currentPramotionProductData, setCurrentPramotionProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFetched, setIsFetched] = useState(false);  // New state to track data fetching

    // Pagination settings
    const productsPerPage = 8;
    const totalPages = Math.ceil(pramotionProductData?.length / productsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch category data
    const getCategoryData = async () => {
        try {
            setLoading(true);
            const res = await serverGetCategory();
            setCategoryData(res?.data);
        } catch (err) {
            console.error(err);
            setCategoryData([]);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle navigation
    const handleNavigation = (path, product) => {
        history.push(path, product); // Use history.push() for navigation
    };

    // Fetch promotion product data
    const getPramotionProductData = async () => {
        try {
            setLoading(true);
            const res = await serverGetPramotionProduct();
            setPramotionProductData(res?.data);
            setIsFetched(true); // Set the fetched flag to true after fetching
        } catch (err) {
            console.error(err);
            setPramotionProductData([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on initial render
    useEffect(() => {
        getCategoryData();
        getPramotionProductData();
    }, []);

    // Update current promotion products when `currentPage` or `pramotionProductData` changes, but only if data has been fetched
    useEffect(() => {
        if (isFetched) {  // Only run when `isFetched` is true
            const startIndex = (currentPage - 1) * productsPerPage;
            const currentProducts = pramotionProductData?.slice(startIndex, startIndex + productsPerPage);
            setCurrentPramotionProductData(currentProducts);
        }
    }, [currentPage, pramotionProductData, isFetched]);

    return {
        categoryData,
        pramotionProductData,
        handlePageChange,
        currentPage,
        totalPages,
        currentPramotionProductData,
        handleNavigation,
        loading
    };
};

export default useHome;
