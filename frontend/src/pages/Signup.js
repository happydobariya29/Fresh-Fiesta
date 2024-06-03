import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupanimation from "../assests/login-animation.gif";
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        image : ""
    });
    console.log(data);

    const handleShowPassword = () => {
        setshowPassword((preve) => !preve)
    }

    const handlShowConfirmPassword = () => {
        setShowPassConfirm((preve) => !preve)
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

    const handleUploadProfileImage = async (e)=>{
        const data = await ImagetoBase64(e.target.files[0]);

        setData((preve)=>{
            return{
                ...preve,
                image : data
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, email, password, confirmPassword } = data;
        if (firstname && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const fetchData = await fetch (`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
                    method : "POST",
                    headers :{
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })

                if (!fetchData.ok) {
                    const errorData = await fetchData.json();
                    console.error("Error:", errorData);
                } else {
                    const responseData = await fetchData.json();
                    console.log(responseData);
                    alert("Successfully signed up");
                    navigate("/login");
                }

                // const dataRes = await fetchData.json()
                // console.log(dataRes)
                // alert("Successfull");
                // navigate("/login");
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
            <div className="flex flex-col w-full max-w-lg p-4 m-auto bg-white rounded shadow-md drop-shadow-md">
                {/* <h1 className="text-2xl text-center">Sign Up</h1> */}
                <div className="relative w-20 h-20 m-auto overflow-hidden rounded-full shadow-md drop-shadow-md">
                    <img src={data.image? data.image : signupanimation} className="w-full h-full" alt="" />
                    <label htmlFor="profileImage">
                        <div className="absolute bottom-0 w-full text-sm text-center bg-opacity-50 cursor-pointer h-1/3 bg-slate-400">
                            <p>Upload</p>
                        </div>
                    </label>
                    <input type={"file"} id="profileImage" className="hidden cursor-pointer" accept="image/*" onChange={handleUploadProfileImage}></input>
                </div>

                <form className="flex flex-col w-full py-3 pb-4" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name</label>
                    <input type={"text"} id="firstname" name="firstname" className="w-full px-1 py-2 mt-1 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300" value={data.firstname} onChange={handleOnChange}></input>

                    <label htmlFor="lastname">Last Name</label>
                    <input type={"text"} id="lastname" name="lastname" className="w-full px-1 py-2 mt-1 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300" value={data.lastname} onChange={handleOnChange}></input>

                    <label htmlFor="email">Email</label>
                    <input type={"text"} id="email" name="email" className="w-full px-1 py-2 mt-1 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300" value={data.email} onChange={handleOnChange}></input>

                    <label htmlFor="password">Password</label>
                    <div className="flex px-1 py-2 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full border-none outline-none bg-slate-200" value={data.password} onChange={handleOnChange}></input>
                        <span className='flex flex-row items-center px-2 text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <p>Hide</p> : <p>Show</p>}</span>
                    </div>

                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <div className="flex px-1 py-2 rounded bg-slate-200 focus-within:outline focus-within:outline-blue-300">
                        <input type={showPassConfirm ? "text" : "password"} id="confirmPassword" name="confirmPassword" className="w-full outline-none bg-slate-200" value={data.confirmPassword} onChange={handleOnChange}></input>
                        <span className='flex flex-row items-center px-2 text-xl cursor-pointer' onClick={handlShowConfirmPassword}>{showPassConfirm ? <p>Hide</p> : <p>Show</p>}</span>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 mt-9 cursor-pointer max-w-[150px] pt-3 pb-3 m-auto rounded-full w-full text-white text-xl">Sign Up</button>
                </form>
                <p className="text-sm text-left">Already have an Account ? <Link to={"/login"} className="text-red-500 underline">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup
