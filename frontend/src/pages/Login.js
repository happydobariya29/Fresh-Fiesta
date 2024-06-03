import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupanimation from "../assests/login-animation.gif";


const Login = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    console.log(data);

    const handleShowPassword = () => {
        setshowPassword((preve) => !preve)
    }



    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, email, password, confirmPassword } = data
        if (firstname && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert("Successfull");
            }
            else {
                alert("Password and confirm password not equal");
            }
        }
        else {
            alert("Please Enter required fields");
        }
    }
    return (
        <div className="p-3 md:p-4">
            <div className="w-full bg-white max-w-lg m-auto flex flex-col p-4  shadow-md drop-shadow-md rounded">
                {/* <h1 className="text-center text-2xl">Sign Up</h1> */}
                <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
                    <img src={signupanimation} className="w-full" alt="" />
                </div>

                <form className="w-full py-3 flex flex-col pb-4" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type={"text"} id="email" name="email" className="w-full bg-slate-200 rounded mt-1 px-1 py-2" value={data.email} onChange={handleOnChange}></input>

                    <label htmlFor="password">Password</label>
                    <div className="flex px-1 py-2 bg-slate-200 rounded ">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full bg-slate-200 outline-none" value={data.password} onChange={handleOnChange}></input>
                        <span className='flex flex-row items-center text-xl cursor-pointer px-2' onClick={handleShowPassword}>{showPassword ? <p>Hide</p> : <p>Show</p>}</span>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 mt-9 cursor-pointer max-w-[150px] pt-3 pb-3 m-auto rounded-full w-full text-white text-xl">Login</button>
                </form>
                <p className="text-left text-sm">Don't have an Account ? <Link to={"/signup"} className="text-red-500 underline">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login
