import React, { useEffect } from 'react'
import { useState } from 'react'
import { serverGetOrder, serverOrderStatus, serverRefundPayment } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';

const useAccount = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();
    const [orderData, setOrderData] = useState([]);
    const [open, setOpen] = useState(false);
    const [orderId, setOrderId] = useState('');

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

    const showAlert = (orderId, paymentId, totalAmount) => {
        const isConfirmed = window.confirm("Are you sure you want to cancel this order?");
        if (isConfirmed) {
          handleOrderCancel(orderId, paymentId, totalAmount);
        }
    };

    const handleOrderCancel = async (orderId, paymentId, totalAmount) => {
        try {
            setLoading(true);
            await serverOrderStatus(orderId, 'Cancelled');

            const rawData = {
                paymentId: paymentId,
                payment: totalAmount,
            };

            await serverRefundPayment(rawData);
            getUserOrder();
            setLoading(false);
        } catch (e) {
            console.log("Error", e);
            setLoading(false);
        }
    };

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
        handleLogout,
        showAlert,
        setOpen,
        open,
        setOrderId,
        orderId,
    }
}

export default useAccount