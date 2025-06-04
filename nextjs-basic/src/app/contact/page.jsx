'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const page = () => {
    const params = useSearchParams();

    return (
        <div>
            <h1>Contact page</h1>
            <h2>Name: {params.get('name')}</h2>
            <h2>Price: {params.get('price')}</h2>
        </div>
    );
};

export default page;