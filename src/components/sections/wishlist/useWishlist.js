import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverGetWishlistProduct, serverRemoveToCart, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { getUserData } from '../../../helper/UserHelper';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../../hooks/CartContext';

const useWishlist = () => {
    const { updateCartCount } = useCartContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [wishListData, setWishListData] = useState([]);

    const getWishlistData = async () => {
        try {
            const user = getUserData();
            if (user) {
                setLoading(true);
                const res = await serverGetWishlistProduct(user?._id);
                setWishListData(res?.data);
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setWishListData([]);
        } finally {
            setLoading(false);
        }
    }

    // Function to handle navigation
    const handleNavigation = (path, product) => {
        navigate(path, product); // Use history.push() for navigation
    };

    const handleRemoveWishlist = async (productId) => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (userData) {
                await serverRemoveWishlistProduct(userData?._id, productId);
                getWishlistData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
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
                getWishlistData();
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
                getWishlistData();
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
        getWishlistData();
    }, [])

    return {
        wishListData,
        handleNavigation,
        loading,
        handleRemoveWishlist,
        handleCart
    }
}

export default useWishlist