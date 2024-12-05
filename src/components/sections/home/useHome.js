import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverAddWishlistProduct, serverGetCategory, serverGetPramotionProduct, serverRemoveToCart, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getUserData } from '../../../helper/UserHelper';

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
            const userData = getUserData();
            const res = await serverGetPramotionProduct(userData?._id);
            setPramotionProductData(res?.data);
            setIsFetched(true); // Set the fetched flag to true after fetching
        } catch (err) {
            console.error(err);
            setPramotionProductData([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAddWishlist = async (productId) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                await serverAddWishlistProduct({userId: userData?._id, productId: productId});
                getPramotionProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleRemoveWishlist = async (productId) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                await serverRemoveWishlistProduct(userData?._id, productId);
                getPramotionProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleWishlist = (item) => {
        const userData = getUserData();
        if (userData) {
            if (item?.isWishlist) {
                handleRemoveWishlist(item?._id);
            } else {
                handleAddWishlist(item?._id);
            }
        } else {
            history.push('/login');
        }
    }

    const handleAddToCart = async (item) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                const bodyData = {
                    userId: userData?._id,
                    productId: item?._id,
                    qty: 1
                }
                await serverAddToCart(bodyData);
                getPramotionProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleRemoveToCart = async (item) => {
        try {
            setLoading(false);
            const userData = getUserData();
            if (userData) {
                await serverRemoveToCart(userData?._id, item?._id);
                getPramotionProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleCart = (item) => {
        const userData = getUserData();
        if (userData) {
            if (item?.isCart) {
                handleRemoveToCart(item)
            } else {
                handleAddToCart(item)
            }
        } else {
            history.push('/login');
        }
    }

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
        loading,
        handleWishlist,
        handleCart
    };
};

export default useHome;
