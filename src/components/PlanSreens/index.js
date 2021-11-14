import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import db from '../../firebase';
import { selectUser } from '../reducer/useSlice';
import './PlanScreen.css';

const PlanScreen = () => {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection('products')
            .where('active', '==', true)
            .get()
            .then(querySnapshot => {
                const products = {};
                querySnapshot.forEach(async productDoc => {
                    prodducts[productDoc.id] = prod.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach(price => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data(),
                        };
                    });
                });
                setProducts(products);
            });
    }, []);
    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
            .doc(user.uid)
            .collection('checkout_sessions')
            .add({
                price: priceId,
                succerss_url: window.location.origin,
                cancel_url: window.location.origin,

            });
        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();
            if (error) {
                alert(`An error occured:${error.message}`);
            }
            if (sessionId) {
                const stripe = await loadStripe('pk_test_51JPPyrKBaFHmR4YyPVYF0EoZw1Vi2SzyIsMzGRRHkAUJuzk5K5lv5byAv77E8xN2uxX2tRFoOVoooZ3djjiGKPwI00GOOdYnj8')
            };
            stripe.redirectToCheckout({ sessionId })
        });
    };

    return (
        <div className='planscreen'>
            {Object.entries(products).map(([productId, productData]) => {
                return (
                    <div className='plansScreen_plan'>
                        <div className='plansScreen_info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={loadCheckout(productData.prices.priceId)}>
                            Subscribe
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default PlanScreen
