import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import myKey from "./KhaltiKey";
import { createPayment } from "../../redux/actions/paymentaction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Khalti({
    cart,
    address
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let config = {
        publicKey: myKey.publicTestKey,
        productIdentity: "12355321",
        productName: "Kalij-Food",
        productUrl: "http://localhost:3000/cart",
        eventHandler: {
            onSuccess() {
                let paymentID = "KhaltiPay_" + Math.floor(Math.random() * 1000000);
                dispatch(createPayment(cart, paymentID, address));
                navigate("/food");
            },
            onError(error) {
                // handle errors
                console.log(error.message);
            },
            onClose() {
                console.log("widget is closing");
            },
        },
        paymentPreference: [
            "KHALTI",
        ],
    };
    let checkout = new KhaltiCheckout(config);
    let buttonStyles = {
        // backgroundColor: '#ED9F64',
        // padding: '13px 10px',
        border: '0px solid white',
        // borderRadius: '12px',
        color: 'white',
        fontSize: '16px',
        letterSpacing: '2px',
        fontWeight: 'bold',
        width: '100%',
        display: 'block',
        '&:hover': {
            backgroundColor: '#ED9F64',
        },
    }
    return (
        <div>
            <button
                onClick={() => { checkout.show({ amount: 1000 }); }}
                style={buttonStyles}
            >
                Khalti Pay
            </button>
        </div>
    );
}