'use client'

import React, {useEffect, useState} from 'react';

const page = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        (async() => {
            let response = await  fetch('https://dummyjson.com/products')
            let json = await response.json()
            setProducts(json['products'])
        })()
    }, [])

    return (
        <div>
            <h1>Client Side Rendering</h1>
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {products?.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <a href='#'>Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default page;