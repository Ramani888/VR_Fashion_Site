import React, { useEffect, useState } from 'react'
import { serverGetCartData, serverRemoveToCart, serverUpdateCartData } from '../../../services/serverApi';
import { getUserData } from '../../../helper/UserHelper';

const useCart = () => {
    const [loading, setLoading] = useState(false);
    const [cartData, setCartData] = useState([]);

    const getCartData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetCartData(userData?._id);
            setCartData(res?.data);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setCartData([]);
        } finally {
            setLoading(false);
        }
    }

    const updateCartData = async (item, isIncreaseItem) => {
        try {
            setLoading(true);
            let qty;
            if (isIncreaseItem) {
                qty = item?.qty + 1;
            } else {
                qty = item?.qty > 1 ? item?.qty - 1 : 1;
            }
            await serverUpdateCartData(item?.productId, {qty: qty});
            getCartData();
        } catch (err) {
            console.log(err);
            setLoading(false);
            setCartData([]);
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
                getCartData();
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCartData();
    }, [])

    return {
        cartData,
        loading,
        handleRemoveToCart,
        updateCartData
    }
}

export default useCart