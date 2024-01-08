import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate, user} from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {

        }
    }, []);


    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;