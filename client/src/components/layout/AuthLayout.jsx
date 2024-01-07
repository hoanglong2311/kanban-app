import React, {useState} from 'react';
import {Outlet, useNavigate, user} from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);



    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;