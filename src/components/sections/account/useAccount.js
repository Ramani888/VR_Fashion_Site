import React, { useEffect } from 'react'
import { useState } from 'react'
import { serverGetOrder } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';

const useAccount = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();
    const [orderData, setOrderData] = useState([]);

    const checkUser = () => {
        const user = localStorage.getItem('user');
        const res = JSON.parse(user);
        if (res) {
            setUserData(res)
        } else {
            setUserData(null)
        }
    }

    const getUserOrder = async () => {
        try {
            setLoading(true);
            const res = await serverGetOrder(userData?._id);
            setOrderData(res?.data);
        } catch (err) {
            console.error(err);
            setOrderData([]);
            setLoading(false)
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login')
    }

    useEffect(() => {
        checkUser();
    }, [])

    useEffect(() => {
        getUserOrder();
    }, [userData])

    return {
        userData,
        orderData,
        loading,
        handleLogout
    }
}

export default useAccount