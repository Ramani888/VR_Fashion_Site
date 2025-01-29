import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverAddWishlistProduct, serverGetAllProduct, serverRemoveToCart, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../helper/UserHelper';
import { useCartContext } from '../../../hooks/CartContext';

const useShopLeft = () => {
    const { updateCartCount } = useCartContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    const getProductData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetAllProduct(userData?._id);
            setProductData(res?.data);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setProductData([]);
        } finally {
            setLoading(false);
        }
    }

    // Function to handle navigation
    const handleNavigation = (path, product) => {
        console.log(path, product);
        navigate(path, { state: { product: product } }); // Use history.push() for navigation
    };

    const handleAddWishlist = async (productId) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                await serverAddWishlistProduct({userId: userData?._id, productId: productId});
                getProductData();
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
                getProductData();
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
            navigate('/login');
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
                getProductData();
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
                getProductData();
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
            updateCartCount();
        } else {
            navigate('/login');
        }
    }

    useEffect(() => {
        getProductData();
    }, [])

    return {
        productData,
        loading,
        handleNavigation,
        handleWishlist,
        handleCart
    }
}

export default useShopLeft