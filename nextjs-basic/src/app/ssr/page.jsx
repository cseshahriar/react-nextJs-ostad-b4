import React from 'react';

async function getData() {
    let response = await  fetch('https://dummyjson.com/products');
    let json = await response.json();
    return json['products'];
}

const page = async() => {
    const products = await getData()
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