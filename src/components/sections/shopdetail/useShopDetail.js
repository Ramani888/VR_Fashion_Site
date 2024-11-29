import React, { useEffect, useState } from 'react'
import { serverGetCategoryById, serverGetProductByCategoryId, serverGetProductById } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const useShopDetail = (product) => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [categoryProductData, setCategoryProductData] = useState([]);

    const getProductData = async () => {
        try {
            setLoading(true);
            const res = await serverGetProductById(product?._id);
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
            const res = await serverGetProductByCategoryId(product?.categoryId);
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
        loading
    }
}

export default useShopDetail