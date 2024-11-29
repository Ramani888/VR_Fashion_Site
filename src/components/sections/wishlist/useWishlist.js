import React, { useEffect, useState } from 'react'
import { serverGetWishlistProduct, serverRemoveWishlistProduct } from '../../../services/serverApi';
import { getUserData } from '../../../helper/UserHelper';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const useWishlist = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [wishListData, setWishListData] = useState([]);

    const getWishlistData = async () => {
        try {
            const user = getUserData();
            if (user) {
                setLoading(true);
                const res = await serverGetWishlistProduct(user?._id);
                console.log('res', res)
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
        history.push(path, product); // Use history.push() for navigation
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

    useEffect(() => {
        getWishlistData();
    }, [])

    return {
        wishListData,
        handleNavigation,
        loading,
        handleRemoveWishlist
    }
}

export default useWishlist