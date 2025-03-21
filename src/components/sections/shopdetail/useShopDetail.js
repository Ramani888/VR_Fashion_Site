import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverAddWishlistProduct, serverGetCategoryById, serverGetProductByCategoryId, serverGetProductById, serverRemoveToCart, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../helper/UserHelper';
import { useCartContext } from '../../../hooks/CartContext';
import { useDialog } from '../../Dialog/DialogContext';

const useShopDetail = (product) => {
    const { openDialog } = useDialog();
    const { updateCartCount } = useCartContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [categoryProductData, setCategoryProductData] = useState([]);
    const [clicks, setClicks] = useState(1);
    const [alert, setAlert] = useState(false);
    const [selectedZize, setSelectedSize] = useState();

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
        navigate(path, product); // Use history.push() for navigation
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
                navigate('/cart');
            } else {
                setAlert(true);
                if(selectedZize) {
                    handleAddToCart(item)
                }
            }
            updateCartCount();
        } else {
            openDialog();
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
            updateCartCount();
        } else {
            openDialog();
            return;
        }
    }

    const handleWishlist = async (item) => {
        const userData = getUserData();
        if (!userData) {
            openDialog();
            return;
        }

        try {
            setLoading(true);
            if (item?.isWishlist) {
                await serverRemoveWishlistProduct(userData?._id, item?._id);
            } else {
                await serverAddWishlistProduct({ userId: userData?._id, productId: item?._id });
            }
            getCategoryProductData(); // Refresh product data
        } catch (err) {
            console.error('Error handling wishlist:', err);
        } finally {
            setLoading(false);
        }
    };

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
        handleCartRelated,
        loading,
        handleWishlist,
        alert,
        setAlert,
        selectedZize,
        setSelectedSize
    }
}

export default useShopDetail