import React, { useEffect, useState } from 'react'
import { serverAddToCart, serverAddWishlistProduct, serverGetProductByCategoryId, serverGetProductUnderFive, serverGetProductUnderTen, serverGetProductUnderThree, serverGetProductUnderTwo, serverRemoveToCart, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../helper/UserHelper';
import { useCartContext } from '../../../hooks/CartContext';
import { useDialog } from '../../Dialog/DialogContext';

const useClassification = (category) => {
    const { openDialog } = useDialog();
    const { updateCartCount } = useCartContext();
    const navigate = useNavigate();
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProductData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            if (category?._id) {
                const res = await serverGetProductByCategoryId(category?._id, userData?._id);
                setProductData(res?.data);
            } else if (category?.tag === 2) {
                const res = await serverGetProductUnderTwo(userData?._id);
                setProductData(res?.data);
            } else if (category?.tag === 3) {
                const res = await serverGetProductUnderThree(userData?._id);
                setProductData(res?.data);
            } else if (category?.tag === 5) {
                const res = await serverGetProductUnderFive(userData?._id);
                setProductData(res?.data);
            } else if (category?.tag === 10) {
                const res = await serverGetProductUnderTen(userData?._id);
                setProductData(res?.data);
            }
        } catch (err) {
            console.log(err);
            setProductData([]);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    // Function to handle navigation
    const handleNavigation = (path, product) => {
        navigate(path, { state: { product } }); // Use history.push() for navigation
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
            openDialog();
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
            openDialog();
        }
    }

    useEffect(() => {
        getProductData();
    }, [category])

    return {
        productData,
        handleNavigation,
        loading,
        handleWishlist,
        handleCart
    }
}

export default useClassification