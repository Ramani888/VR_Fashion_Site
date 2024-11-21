import React, { useEffect, useState } from 'react'
import { serverGetAllProduct } from '../../../services/serverApi';

const useShopLeft = () => {
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);

    const getProductData = async () => {
        try {
            setLoading(true);
            const res = await serverGetAllProduct();
            setProductData(res?.data);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setProductData([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
    }, [])

    return {
        productData,
        loading
    }
}

export default useShopLeft