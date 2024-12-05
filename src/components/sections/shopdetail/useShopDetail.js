import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverGetCategoryById, serverGetProductByCategoryId, serverGetProductById, serverRemoveToCart } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getUserData } from '../../../helper/UserHelper';

const useShopDetail = (product) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [categoryProductData, setCategoryProductData] = useState([]);
    const [clicks, setClicks] = useState(1);

    const IncrementItem = () => {
        setClicks((prevClicks) => prevClicks + 1);
    };
    
    const DecreaseItem = () => {
        setClicks((prevClicks) => (prevClicks > 1 ? prevClicks - 1 : 1));
    };
    
    const handleChange = (event) => {
        setClicks(event.target.value);
    };

    const getProductData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetProductById(product?._id, userData?._id);
            setProductData(res?.data[0]);
        } catch (err) {
            console.error(err);
            setLoading(false);
            setProductData(null);
        } finally {
            setLoading(false);
        }
    }

    const getCategoryData = async () => {
        try {
            setLoading(true);
            const res = await serverGetCategoryById(product?.categoryId);
            setCategoryData(res?.data[0]);
        } catch (err) {
            setLoading(false);
            console.error(err);

        } finally {
            setLoading(false);
        }
    }

    const getCategoryProductData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetProductByCategoryId(product?.categoryId, userData?._id);
            setCategoryProductData(res?.data);
        } catch (err) {
            console.log(err);
            setCategoryProductData([]);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    // Function to handle navigation
    const handleNavigation = (path, product) => {
        history.push(path, product); // Use history.push() for navigation
    };

    const handleAddToCart = async (item) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                const bodyData = {
                    userId: userData?._id,
                    productId: item?._id,
                    qty: clicks
                }
                await serverAddToCart(bodyData);
                getProductData();
                getCategoryData();
                getCategoryProductData();
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
                history.push('/cart');
            } else {
                handleAddToCart(item)
            }
        } else {
            history.push('/login');
        }
    }

    const handleAddToCartRelated = async (item) => {
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
                getProductData();
                getCategoryData();
                getCategoryProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleRemoveToCartRelated = async (item) => {
        try {
            setLoading(false);
            const userData = getUserData();
            if (userData) {
                await serverRemoveToCart(userData?._id, item?._id);
                getProductData();
                getCategoryData();
                getCategoryProductData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleCartRelated = (item) => {
        const userData = getUserData();
        if (userData) {
            if (item?.isCart) {
                handleRemoveToCartRelated(item)
            } else {
                handleAddToCartRelated(item)
            }
        } else {
            history.push('/login');
        }
    }

    useEffect(() => {
        getProductData();
        getCategoryData();
        getCategoryProductData();
    }, [product])

    return {
        productData,
        categoryData,
        categoryProductData,
        handleNavigation,
        loading,
        handleCart,
        handleCart,
        handleChange,
        IncrementItem,
        DecreaseItem,
        clicks,
        handleCartRelated
    }
}

export default useShopDetail