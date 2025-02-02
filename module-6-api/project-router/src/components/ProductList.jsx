import React, { useCallback, useMemo, useState } from 'react'

const ProductList = ({ products = [], dispatch}) => {
    const [searchItem, setSearchItem] = useState("");
    const [minPrice, setMinPrice] = useState(0);

    const filterProducts = useMemo(() => {
        // console.log('filtering...')
        return products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchItem.toLowerCase()) &&
            product.price > minPrice
        )
    }, [products, searchItem, minPrice]) // if products, search, minPrice change then call


    const handleSearchItemChange = useCallback((e) => {
        console.log('handleSearchItemChange');
        setSearchItem(e.target.value);
    }, []);

    // const handleMinPrice = (e) => {
    //     setMinPrice(e.target.value);
    // }

    const handleMinPrice = useCallback((e) => {
        console.log('handleSearchItemChange');
        setMinPrice(e.target.value);
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div>
                <input type="text"
                    placeholder='Search by Name...'
                    value={searchItem}
                    onChange={handleSearchItemChange}
                />
                <input type="text"
                    placeholder='Search by price...'
                    value={minPrice}
                    onChange={handleMinPrice}
                />
                {/**  handleMinPrice or onChange={(e) => setMinPrice(e.target.value)}  re-render issue */}
                <button onClick={() => dispatch({type: 'add', payload: {id: Math.random(), name:`I phone ${Math.random()}`, price: 100 }})}>Add Product</button>
            </div>

            <ul>
                { filterProducts.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price} - <button onClick={() => dispatch({type: 'delete', payload: item})}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList