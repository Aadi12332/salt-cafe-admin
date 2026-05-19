import {
  Eye,
  Trash2,
  UserPlus
} from "lucide-react";
import foodPlate from "../assest/images/dashboard2.png";

import { useMemo, useState } from "react";

import Pagination from "../components/Pagination";

const initialUsers = [
  {
    id: 1,
    name: "Aniket K",
    userId: "UC1478239",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "02/05/2025",
  },
  {
    id: 2,
    name: "Ganpatrao",
    userId: "UC1478239",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "06/05/2025",
  },
  {
    id: 3,
    name: "Hriday Das",
    userId: "UC1478239",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "01/05/2025",
  },
  {
    id: 4,
    name: "Nanaji Calzon",
    userId: "UB1478536",
    phone: "+1 7768 945 630",
    type: "Billing Manager",
    branch: "Noida",
    email: "example@gmail.com",
    joining: "12/04/2025",
  },
  {
    id: 5,
    name: "James Bibin",
    userId: "UC845210",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "06/04/2025",
  },
  {
    id: 6,
    name: "Manmohan",
    userId: "UC478536",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "26/04/2025",
  },
  {
    id: 7,
    name: "Vimala Levin",
    userId: "UC478536",
    phone: "+1 7768 945 630",
    type: "Super Admin",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "12/03/2025",
  },
  {
    id: 8,
    name: "Jaipal Martin",
    userId: "UB845210",
    phone: "+1 7768 945 630",
    type: "Billing Manager",
    branch: "Noida",
    email: "example@gmail.com",
    joining: "16/03/2025",
  },
  {
    id: 9,
    name: "Jorge Levin",
    userId: "US478536",
    phone: "+1 7768 945 630",
    type: "Super Admin",
    branch: "Noida",
    email: "example@gmail.com",
    joining: "25/03/2025",
  },
  {
    id: 10,
    name: "Arun Murthy",
    userId: "UC845210",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "06/02/2025",
  },
  {
    id: 11,
    name: "Jeevan Westervelt",
    userId: "UC845210",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "31/01/2025",
  },
  {
    id: 12,
    name: "Jivesh Pal",
    userId: "UC478239",
    phone: "+1 7768 945 630",
    type: "Customer",
    branch: "N/A",
    email: "example@gmail.com",
    joining: "12/01/2025",
  },
];

const tabs = [
  {
    label: "All Users",
    count: 360,
  },
  {
    label: "Super Admin",
    count: 3,
  },
  {
    label: "Billing Manager",
    count: 7,
  },
  {
    label: "Customers",
    count: 300,
  },
  {
    label: "New Users",
    count: 50,
  },
];

export default function UsersPage() {
  const [page, setPage] = useState(1);

  const [activeTab, setActiveTab] =
    useState("New Users");

  const [users, setUsers] =
    useState(initialUsers);

  const filteredUsers = useMemo(() => {
    if (activeTab === "All Users") {
      return users;
    }

    if (activeTab === "Customers") {
      return users.filter(
        (item) =>
          item.type === "Customer"
      );
    }

    if (
      activeTab === "New Users"
    ) {
      return users.slice(0, 5);
    }

    return users.filter(
      (item) =>
        item.type === activeTab
    );
  }, [activeTab, users]);

  const handleDelete = (id) => {
    setUsers((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="flex flex-col justify-between relative">
      <img src={foodPlate} alt="card background" className="w-[150px] absolute right-0 -top-10 z-[0] rotate-20 opacity-50" />

      <div className="relative z-10">

        <div className="flex items-center justify-between gap-5">

          <div className="flex items-center justify-between w-full gap-5">

            <h1 className="text-[22px] leading-none font-semibold text-black">
              Users
            </h1>

            <button className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[#9E4718] text-[16px] font-semibold bg-white">
              <UserPlus size={18} />
              Add New User
            </button>

          </div>

        </div>

        <div className="flex items-center gap-10 mt-5 overflow-auto scroll-hide">

          {tabs.map((item) => (
            <button
              key={item.label}
              onClick={() =>
                setActiveTab(
                  item.label
                )
              }
              className={`flex items-center gap-3 pb-2 whitespace-nowrap border-b-2 transition-all ${
                activeTab ===
                item.label
                  ? "border-[#9E4718]"
                  : "border-transparent"
              }`}
            >

              <span
                className={`text-[16px] font-medium ${
                  activeTab ===
                  item.label
                    ? "text-[#9E4718]"
                    : "text-[#7E7E7E]"
                }`}
              >
                {item.label}
              </span>

              <div
                className={`min-w-[40px] h-7 px-2 rounded-md border flex items-center justify-center text-[14px] ${
                  activeTab ===
                  item.label
                    ? "border-[#9E4718] text-[#9E4718]"
                    : "border-[#9A9A9A] text-[#7E7E7E]"
                }`}
              >
                {item.count}
              </div>

            </button>
          ))}

        </div>

        <div className="mt-5 overflow-x-auto h-[calc(100vh-310px)] scroll-hide bg-white rounded-lg w-[calc(100vw-340px)]">

          <table className="border-separate border-spacing-0 overflow-hidden rounded-lg">

            <thead>

              <tr className="bg-[#C86F40]">

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase rounded-tl-lg min-w-[250px]">
                  Name
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[180px]">
                  User ID
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[240px]">
                  Phone Number
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[200px]">
                  User Type
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[220px]">
                  Branch Work In
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[280px]">
                  Email
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase min-w-[220px]">
                  Date Of Joining
                </th>

                <th className="text-center text-white text-[16px] font-bold px-5 py-[22px] uppercase rounded-tr-lg min-w-[140px]">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map(
                (item) => (
                  <tr key={item.id}>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.name}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.userId}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.phone}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.type}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.branch}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.email}
                    </td>

                    <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                      {item.joining}
                    </td>

                    <td className="px-5 py-[18px] border border-[#E5E5E5] border-t-0">

                      <div className="flex items-center justify-center gap-6">

                        <button className="text-[#C86F40]">
                          <Eye size={24} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              item.id
                            )
                          }
                          className="text-[#FF4B5C]"
                        >
                          <Trash2 size={24} />
                        </button>

                      </div>

                    </td>

                  </tr>
                )
              )}

              {filteredUsers.length ===
                0 && (
                <tr>

                  <td
                    colSpan={8}
                    className="text-center py-10 text-[18px] text-[#4A4A4A]"
                  >
                    No Users Found
                  </td>

                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      <div className="mt-5">

        <Pagination
          currentPage={page}
          totalPages={70}
          totalEntries={840}
          startEntry={1}
          endEntry={12}
          onPageChange={setPage}
        />

      </div>

    </div>
  );
}