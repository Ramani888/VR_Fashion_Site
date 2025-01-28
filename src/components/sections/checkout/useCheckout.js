import React, { useEffect, useState } from 'react'
import { getUserData } from '../../../helper/UserHelper';
import { serverAddDeliveryAddressData, serverCreateOrder, serverGetCartData, serverGetDeliveryAddressData, serverGetRewardData, serverTestingOrder } from '../../../services/serverApi';
import { useNavigate } from 'react-router-dom';

const useCheckout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cartData, setCartData] = useState([]);
    const [deliveryAddressData, setDeliveryAddressData] = useState([]);
    const [openAddressForm, setOpenAddressForm] = useState(false);
    const InitialFormData = {
        addressFirst: "",
        addressSecond: "",
        area: "",
        landmark: "",
        country: "India",
        state: "",
        city: "",
        pinCode: "",
    }
    const [formData, setFormData] = useState(InitialFormData);
    const [walletData, setWalletData] = useState();
    const [useWallet, setUseWallet] = useState(false);

    const handleOpenAddressForm = () => {
        setOpenAddressForm(true);
        setFormData(InitialFormData);
    };

    const handleCloseAddressForm = () => {
        setOpenAddressForm(false);
        setFormData(InitialFormData);
    };

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

    const getDeliveryAddressData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetDeliveryAddressData(userData?._id);
            setDeliveryAddressData(res?.deliveryAddressData);
            handleCloseAddressForm();
        } catch (err) {
            console.log(err);
            setLoading(false);
            setDeliveryAddressData([]);
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmitAddress = async (e) => {
        e.preventDefault(); 
        try {
            setLoading(true);
            const userData = getUserData();
            await serverAddDeliveryAddressData({...formData, userId: userData?._id})
            getDeliveryAddressData();
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
            setFormData(InitialFormData);
        }
    }

    const getRewardData = async () => {
        try {
            setLoading(true);
            const userData = getUserData();
            const res = await serverGetRewardData(userData?._id);
            setWalletData(res?.data)
        } catch (err) {
            console.log(err);
            setLoading(false);
            setWalletData(undefined);
        } finally {
            setLoading(false);
        }
    }

    const handlePlaceOrder = async (paymentId, finalPrice) => {
        try {
            setLoading(true);
            const userData = getUserData();
            const productData = cartData?.data?.map((item) => {
                return {
                    id: item?.product?._id,
                    qty: item?.qty,
                    price: item?.product?.price,
                    deliveryCharge: item?.product?.deliveryCharge,
                    reward: item?.reward ?? 0,
                }
            })
            const data = {
                userId: userData?._id,
                totalAmount: finalPrice,
                product: productData,
                paymentId: paymentId,
                isWallet: useWallet
            };
            await serverCreateOrder(data);
            navigate('/account');
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const razorPayPayment = async (finalPrice) => {
        const userData = getUserData();
        const options = {
          key: 'rzp_live_g5FHxyE0FQivlu', // Your Razorpay key
          amount: finalPrice * 100, // Amount in smallest currency unit
          currency: 'INR',
          name: 'VR Fashion',
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          theme: {color: '#1e1e20'},
          handler: (response) => {
            const paymentId = response?.razorpay_payment_id;
            handlePlaceOrder(paymentId, finalPrice)
            // Example: { razorpay_payment_id: 'pay_29QQoUBi66xm2f' }
            // Add backend verification here using response.razorpay_payment_id
          },
          prefill: {
            name: userData?.name,
            email: userData?.email,
            contact: userData?.mobileNumber,
          },
        };
      
        const rzp = new window.Razorpay(options);
        rzp.open();
      
        rzp.on('payment.failed', (response) => {
          console.error('Payment Failed:', response);
        });
    };
      

    useEffect(() => {
        getCartData();
        getDeliveryAddressData();
        getRewardData();
    }, [])

    return {
        cartData,
        loading,
        deliveryAddressData,
        openAddressForm,
        handleOpenAddressForm,
        handleCloseAddressForm,
        handleInputChange,
        formData,
        handleSubmitAddress,
        walletData,
        setUseWallet,
        useWallet,
        razorPayPayment
    }
}

export default useCheckout