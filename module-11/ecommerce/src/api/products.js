// endpoints pagination => [GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=10
// endpoint for all products = [GET] https://api.escuelajs.co/api/v1/products
export const getProduct = async (offset, limit) => {
    const productUrl = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;
    // Fetch total number of products
    const totalProductResponse = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const totalProductsData = await totalProductResponse.json();
    const totalItems = totalProductsData?.length || 0;

    // Fetch paginated products
    const response = await fetch(productUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const products = await response.json();

    return { products, totalItems };
  };


// get all product
export const getAllProduct = async () => {
    const productUrl = `https://api.escuelajs.co/api/v1/products`;
    const response = await fetch(productUrl);
    const products = await response.json();
    return products;
};


//  create product
export const createProduct = async (product) => {
    const productUrl = `https://api.escuelajs.co/api/v1/products`;
    const response = await fetch(productUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    return response.json();
};

//  update product
export const updateProduct = async (product) => {
    const productUrl = `https://api.escuelajs.co/api/v1/products/${product.id}`;
    const response = await fetch(productUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    return response.json();
};

// delete method
export const deleteProduct = async (product) => {
    const productUrl = `https://api.escuelajs.co/api/v1/products/${product.id}`;
    const response = await fetch(productUrl, {
      method: 'DELETE',
    });
    return response.json();
};
