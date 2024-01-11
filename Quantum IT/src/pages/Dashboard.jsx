import React, { useEffect, useState } from "react";
import women from "../assets/womenProfile.png";
import men from "../assets/men.png";
import { FaCircle } from "react-icons/fa";
import { IoIosSettings, IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TableRow = ({ status, img, number, date, role, name }) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-3 font-medium">{number}</td>
      <td className="whitespace-nowrap px-6 py-3">
        <div className="flex justify-start gap-3 text-base items-center">
          <img src={img} alt="" className="h-[40px]" />
          <h2>{name}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-3 text-base">{date}</td>
      <td className="whitespace-nowrap px-6 py-3 text-base">{role}</td>
      <td className="whitespace-nowrap px-6 py-3">
        <div className="flex justify-start gap-2 text-base items-center">
          <FaCircle color={`${status === "inactive" ? "red" : "green"}`} size={10} />
          <h2>{status}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-3">
        <div className="flex justify-start gap-2 text-base items-center">
          <IoIosSettings color={"#3e9ef5"} size={20} className="cursor-pointer" />
          <IoIosCloseCircle color={"#f7594d"} size={20} className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};
const Dashboard = () => {
  const [render, setRender] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.post('http://localhost:5000/api/auth/getuser', {}, {
        headers: {
          "auth-token": token
        }
      }).then((value) => {
        if (value.status === 200) {
          setRender(true)
        }
      }).catch((error)=>{
        localStorage.removeItem('token')
        navigate('/')
      })
    }
 else{
  navigate('/')
 }
  }, [])
  const logout=()=>{
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <>
    {render?<><div className="flex flex-col overflow-x-auto">
    <div onClick={logout}  className="bg-gray-700 text-xl w-[150px] cursor-pointer text-white m-4 px-2 py-1 text-center rounded-lg shadow-sm font-medium ml-auto shadow-black">Log-out</div>
        <div className="">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date created
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    status={"active"}
                    img={men}
                    number={1}
                    date={"20-11-2023"}
                    role={"Manager"}
                    name={"Ethan Anderson"}
                  />
                  <TableRow
                    status={"active"}
                    img={women}
                    number={2}
                    date={"23-05-2023"}
                    role={"Developer"}
                    name={"Olivia Mitchell"}
                  />
                  <TableRow
                    status={"inactive"}
                    img={men}
                    number={3}
                    date={"19-01-2023"}
                    role={"Tester"}
                    name={"Mason Turner"}
                  />
                  <TableRow
                    status={"active"}
                    img={women}
                    number={4}
                    date={"07-12-2023"}
                    role={"Team Lead"}
                    name={"Sophia Hayes"}
                  />
                  <TableRow
                    status={"active"}
                    img={men}
                    number={5}
                    date={"06-07-2023"}
                    role={"Intern"}
                    name={"Logan Reynolds"}
                  />
                  <TableRow
                    status={"inactive"}
                    img={women}
                    number={6}
                    date={"01-11-2023"}
                    role={"Staff"}
                    name={"Ava Mitchell"}
                  />
                  <TableRow
                    status={"active"}
                    img={men}
                    number={7}
                    date={"30-08-2023"}
                    role={"Developer"}
                    name={"Jackson Parker"}
                  />
                  <TableRow
                    status={"active"}
                    img={men}
                    number={8}
                    date={"12-03-2023"}
                    role={"Tester"}
                    name={"Grace Thompson"}
                  />
                  <TableRow
                    status={"active"}
                    img={women}
                    number={9}
                    date={"16-02-2023"}
                    role={"Developer"}
                    name={"Wyatt Foster"}
                  />
                  <TableRow
                    status={"inactive"}
                    img={men}
                    number={10}
                    date={"22-01-2023"}
                    role={"Designer"}
                    name={"Harper Bennett"}
                  />
                  <TableRow
                    status={"active"}
                    img={women}
                    number={11}
                    date={"07-09-2023"}
                    role={"Animator"}
                    name={"Caleb Sullivan"}
                  />
                  <TableRow
                    status={"inactive"}
                    img={men}
                    number={12}
                    date={"03-10-2023"}
                    role={"Staff"}
                    name={"Zoe Richardson"}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></>:<></>}
      
    </>
  );
};

export default Dashboard;
