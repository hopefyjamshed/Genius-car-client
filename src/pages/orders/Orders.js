import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersTable from './OrdersTable';

const Orders = () => {

    const { user, loading } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    console.log(orders)


    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
                if (data.deletedCount < 0) {
                    alert('orders delted successfully')

                }


            })
            .catch(err => console.error(err))
    }, [user?.email])


    // const handleDelete = id => {
    //     if (loading) {
    //         return <h1>loading</h1>
    //     }
    //     const proceed = window.confirm('are you sure you want to delete this order?')
    //     if (proceed) {
    //         return fetch(`http://localhost:5000/orders/${id}`, {
    //             method: 'DELETE'


    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setOrders(data)
    //             if (data.deletedCount < 0) {
    //                 alert('delted successfully')
    //                 const remainning = orders.filter(odr => odr._id !== id)
    //                 setOrders(remainning)
    //             }


    //         })
    // }
    // }
    return (
        <div>
            <h1>total user: {orders.length}</h1>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th> Message</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map(order => <OrdersTable
                                    key={order._id}
                                    order={order}
                                // handleDelete={handleDelete}
                                ></OrdersTable>)
                            }



                        </tbody>

                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;