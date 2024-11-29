import React, { useEffect, useState } from 'react'
import { serverAddWishlistProduct, serverGetProductByCategoryId, serverGetProductUnderFive, serverGetProductUnderTen, serverGetProductUnderThree, serverGetProductUnderTwo, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserData } from '../../../helper/UserHelper';

const useClassification = (category) => {
    const history = useHistory();
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
        history.push(path, product); // Use history.push() for navigation
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
            history.push('/login');
        }
    }

    useEffect(() => {
        getProductData();
    }, [category])

    return {
        productData,
        handleNavigation,
        loading,
        handleWishlist
    }
}

export default useClassification