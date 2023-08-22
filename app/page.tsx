'use client'
import React from 'react';
import {format} from 'date-fns';

const dynamic = 'force-dynamic';

const Home = () => {
    const today = new Date();

    return (
        <div>
            <p>{format(today, "dd-MM-yyyy h:m:s")}</p>
        </div>
    );
};

export default Home;
