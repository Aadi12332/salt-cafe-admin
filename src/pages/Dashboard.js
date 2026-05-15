import {
  Users,
  ShoppingBag,
  CalendarDays,
  Building2,
  Pencil,
  Trash2,
  TrendingUp,
  TrendingDown,
  ChevronUp,
} from "lucide-react";
import ReactECharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
import cardBg from "../assest/images/dashboard1.png";
import foodPlate from "../assest/images/dashboard2.png";
const usersStats = [
  {
    title: "New Users",
    value: "50",
    percentage: "51%",
    iconBg: "#FBC3C3",
    textColor: "#D51010",
    trend: "down",
  },
  {
    title: "Old Users",
    value: "310",
    percentage: "20%",
    iconBg: "#E3FFF0",
    textColor: "#11B364",
    trend: "up",
  },
];
const statsCards = [
  {
    title: "Orders",
    value: "230",
    increase: "+ 120",
    icon: ShoppingBag,
    path: "/orders",
  },
  {
    title: "Reservations",
    value: "25",
    increase: "+ 20",
    icon: CalendarDays,
    path: "/reservations",
  },
  {
    title: "Branches",
    value: "3",
    increase: "+ 2",
    icon: Building2,
    path: "/branches",
  },
];

const users = [
  {
    name: "Jakob John",
    date: "12/05/2025",
    email: "example@gamil.com",
    id: "UC1478239",
  },
  {
    name: "Jaxson Mango",
    date: "10/05/2025",
    email: "example@gamil.com",
    id: "UC1478239",
  },
  {
    name: "Martin Dias",
    date: "08/05/2025",
    email: "example@gamil.com",
    id: "UC1478239",
  },
  {
    name: "Lincoln Calzoni",
    date: "06/05/2025",
    email: "example@gamil.com",
    id: "UB1478536",
  },
];

export default function DashboardHome() {
  const navigate = useNavigate();
  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      bottom: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "12%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Noida", "Agra", "Delhi"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "2025",
        type: "bar",
        data: [38, 85, 48],
        itemStyle: {
          color: "#8D7AE8",
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: "2024",
        type: "bar",
        data: [22, 25, 56],
        itemStyle: {
          color: "#F4A09C",
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: "2023",
        type: "bar",
        data: [97, 53, 75],
        itemStyle: {
          color: "#58C4DD",
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: "2022",
        type: "bar",
        data: [98, 80, 20],
        itemStyle: {
          color: "#F3B660",
          borderRadius: [8, 8, 0, 0],
        },
      },
    ],
  };

  return (
    <div className="space-y-5 relative">
      <img src={foodPlate} alt="card background" className="w-[150px] absolute right-0 -top-10 z-[0] rotate-20 opacity-50" />
      <h1 className="text-[22px] leading-none font-semibold text-black">
        Dashboard
      </h1>


      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-6">
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #F7B086 0%, #B74B00 100%)",
              boxShadow: "4px 8px 15px 0px #BDBDBD30",
            }}
          >
            <div className="relative z-10">
              <p className="text-[#6F2400] text-[20px] font-semibold">
                Total Users
              </p>

              <h2 className="text-[#6F2400] text-[48px] font-bold leading-none mt-2">
                360
              </h2>

              <div className="flex gap-5 mt-6">
                {usersStats.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-md rounded-xl p-5 w-[180px]"
                    style={{
                      boxShadow: "4px 8px 15px 0px #BDBDBD30",
                    }}
                  >
                    <p className="text-[#9E4718] text-[14px] font-medium">
                      {item.title}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <h3 className="text-[28px] leading-none font-medium text-[#9E4718]">
                        {item.value}
                      </h3>

                      <div
                        className="px-3 py-2 rounded-full flex text-[#1C1C1C] justify-center gap-2 text-xs font-semibold min-w-max"
                        style={{
                          background: item.iconBg,
                          color: item.textColor,
                        }}
                      >
                        {item.percentage}

                        {item.trend === "up" ? (
                          <TrendingUp size={16} />
                        ) : (
                          <TrendingDown size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img src={cardBg} alt="card background" className="w-[250px] absolute right-0 -bottom-2.5" />
          </div>

          <div className="grid grid-cols-3 gap-5 mt-5">
            {statsCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="bg-white border border-[#E7A57F] rounded-xl p-5 cursor-pointer"
                  style={{
                    boxShadow: "4px 8px 15px 0px #BDBDBD30",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#FFE7D9] flex items-center justify-center">
                    <Icon size={28} color="#9E4718" />
                  </div>

                  <p className="text-[#666666] mt-5">{item.title}</p>

                  <div className="flex items-center justify-between mt-4 leading-[1]">
                    <h3 className="text-[20px] font-semibold">{item.value}</h3>

                    <div className="flex items-center text-xs gap-2 text-[#A11B50] font-medium min-w-max">
                      <ChevronUp size={16} fill="#A11B50" />
                      {item.increase}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="bg-white rounded-xl mt-5 overflow-hidden border border-[#E7A57F]"
            style={{
              boxShadow: "4px 8px 15px 0px #BDBDBD30",
            }}
          >
            <div className="px-5 py-2 border-b border-[#E7A57F]">
              <h2 className="text-[20px] font-semibold">New Users</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E7A57F]">
                    <th className="text-left text-[#A9A9A9] font-medium text-xs pl-5 pr-2 py-3">
                      User Name
                    </th>

                    <th className="text-left text-[#A9A9A9] font-medium text-xs px-2 py-3">
                      Date In
                    </th>

                    <th className="text-left text-[#A9A9A9] font-medium text-xs px-2 py-3">
                      Email
                    </th>

                    <th className="text-left text-[#A9A9A9] font-medium text-xs px-2 py-3">
                      User ID
                    </th>

                    <th className="text-left text-[#A9A9A9] font-medium text-xs px-2 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#FFF8F4] transition-all duration-200"
                    >
                      <td className="pl-5 pr-2 py-3 text-xs font-semibold text-[#1C1C1C]">
                        {user.name}
                      </td>

                      <td className="px-2 py-3 text-xs text-[##A9A9A9]">
                        {user.date}
                      </td>

                      <td className="px-2 py-3 text-xs text-[##A9A9A9]">
                        {user.email}
                      </td>

                      <td className="px-2 py-3 text-xs text-[##A9A9A9]">
                        {user.id}
                      </td>

                      <td className="px-2 py-3">
                        <div className="flex items-center gap-3">
                          <button className="w-6 h-6 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#FFE7D9] transition-all">
                            <Pencil size={14} className="text-[#9A9A9A]" />
                          </button>

                          <button className="w-6 h-6 rounded-lg bg-[#FFF1F1] flex items-center justify-center hover:bg-[#FFDADA] transition-all">
                            <Trash2 size={14} className="text-[#FF5B5B]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6 z-10">
          <div
            className="bg-white rounded-xl border border-[#E7A57F] p-5"
            style={{
              boxShadow: "4px 8px 15px 0px #BDBDBD30",
            }}
          >
            <h2 className="text-center text-[#6F2400] text-[20px] font-semibold mb-4">
              Sales Per Branch
            </h2>

            <ReactECharts
              option={option}
              style={{
                height: "300px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
