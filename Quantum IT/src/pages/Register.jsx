import React, { useEffect, useState } from 'react'
import shadow from "../assets/shadow.png"
import wave from "../assets/wave.svg"
import profile from "../assets/account.png"
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
    const [render, setRender] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard')
        }
        setRender(true)
    }, [])

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        dob: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/createuser', data).then((value) => {
            if (value.data.success) {
                localStorage.setItem('token', value.data.authToken)
                toast.success('You are registered')
                navigate('/dashboard')
            }
        }).catch((error)=>{
            toast.error(error)
        })
    }
    return (<>
    <div><Toaster/></div>
    {render ? <><div className='w-full h-[100vh] bg-custom flex justify-center items-center gap-1 flex-col'>
        <div className='sm:w-[400px] sm:h-[550px] w-[300px] h-[500px] bg-[#1d2c4f] rounded-lg shadow-md relative -z-2 flex flex-col justify-start items-center px-4 gap-4'>
            <div className="signin bg-[#00f5e1] text-xl w-[150px] h-[50px] absolute z-10 -top-4 flex justify-center items-center rounded-sm font-medium text-gray-600">Sign-Up</div>
            <img src={wave} alt="" className='opacity-20 absolute sm:top-2 top-4 -z-1' />
            <img src={profile} className='opacity-30 z-10 invert sm:mt-[70px] mt-14 sm:w-[100px] w-[80px] max-w-[100px]' />
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full justify-center items-center'>
                <div className="inputbox w-full flex justify-center items-center relative mt-3">
                    <input type="text" placeholder='name' className='h-[45px] sm:w-[95%] w-full flex border-none rounded-md bg-[#4d5974] backdrop-blur-sm text-lg pl-12 text-[#919cb6]'
                        onChange={(e) => { setData((prev) => { return { ...prev, name: e.target.value } }) }}
                        value={data.name}
                        required />
                    <div className="absolute sm:left-5 left-3 flex justify-center items-center">
                        <FaUser color={"#919cb6"} size={15} className="m-0 p-0" />
                        <TbMinusVertical color="#919cb6" size={25} />
                    </div>
                </div>
                <div className="inputbox w-full flex justify-center items-center relative">
                    <input type="date" placeholder='DOB' className='h-[45px] sm:w-[95%] w-full flex border-none rounded-md bg-[#4d5974] backdrop-blur-sm text-lg pl-12 pr-3 text-[#919cb6]'
                        onChange={(e) => { setData((prev) => { return { ...prev, dob: e.target.value } }) }}
                        value={data.dob}
                        required />
                    <div className="absolute sm:left-5 left-3 flex justify-center items-center">
                        <MdDateRange color={"#919cb6"} size={15} className="m-0 p-0" />
                        <TbMinusVertical color="#919cb6" size={25} />
                    </div>
                </div>
                <div className="inputbox w-full flex justify-center items-center relative">
                    <input type="email" placeholder='email' className='h-[45px] sm:w-[95%] w-full flex border-none rounded-md bg-[#4d5974] backdrop-blur-sm text-lg pl-12 text-[#919cb6]'
                        onChange={(e) => { setData((prev) => { return { ...prev, email: e.target.value } }) }}
                        value={data.email}
                        required />
                    <div className="absolute sm:left-5 left-3 flex justify-center items-center">
                        <MdEmail color={"#919cb6"} size={15} className="m-0 p-0" />
                        <TbMinusVertical color="#919cb6" size={25} />
                    </div>
                </div>
                <div className="inputbox w-full flex justify-center items-center relative">
                    <input type="password" placeholder='password' className='h-[45px] sm:w-[95%] w-full flex border-none rounded-md bg-[#4d5974] backdrop-blur-sm text-lg pl-12 text-[#919cb6]'
                        onChange={(e) => { setData((prev) => { return { ...prev, password: e.target.value } }) }}
                        value={data.password}
                        required />
                    <div className="absolute sm:left-5 left-3 flex justify-center items-center">
                        <FaLock color={"#919cb6"} size={15} className="m-0 p-0" />
                        <TbMinusVertical color="#919cb6" size={25} />
                    </div>
                </div>
                <div><Link to={'/login'}><h2 className='text-[#00f5e1] text-sm'>Already have an account?</h2></Link></div>

                <button className='bg-[#00f5e1] px-3 py-2 sm:w-[300px] w-[200px] min-h-[50px] sm:mt-2 mt-1 rounded-lg text-xl border-none text-gray-600 font-medium'>Register</button></form>
        </div>
        <div className='w-[300px] h-[50px] opacity-20'><img src={shadow} alt="" className='h-full w-full' /></div>
    </div></> : <></>}</>

    )
}

export default Register
