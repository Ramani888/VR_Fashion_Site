import React, { useEffect, useState } from 'react'
import { serverGetProductByCategoryId, serverGetProductUnderFive, serverGetProductUnderTen, serverGetProductUnderThree, serverGetProductUnderTwo } from '../../../services/serverApi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useClassification = (category) => {
    const history = useHistory();
    console.log('use category', category)
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProductData = async () => {
        try {
            setLoading(true);
            if (category?._id) {
                const res = await serverGetProductByCategoryId(category?._id);
                setProductData(res?.data);
            } else if (category?.tag === 2) {
                const res = await serverGetProductUnderTwo();
                setProductData(res?.data);
            } else if (category?.tag === 3) {
                const res = await serverGetProductUnderThree();
                setProductData(res?.data);
            } else if (category?.tag === 5) {
                const res = await serverGetProductUnderFive();
                setProductData(res?.data);
            } else if (category?.tag === 10) {
                const res = await serverGetProductUnderTen();
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

    useEffect(() => {
        getProductData();
    }, [category])

    return {
        productData,
        handleNavigation,
        loading
    }
}

export default useClassification