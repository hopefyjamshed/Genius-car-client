import React, { useEffect, useState } from 'react';
import { FaElementor } from 'react-icons/fa';

const OrdersTable = ({ order, }) => {
    const [orderServ, setOrderServ] = useState([])
    const { customer, title, serviceName, price, phone, _id, service, email, message } = order

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json()
                .then(data => { setOrderServ(data) }))
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            {orderServ?.img &&
                                <img src={orderServ.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default OrdersTable;