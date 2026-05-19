import {
  Calendar,
  Trash2,
  Eye,
  ArrowLeft,
  Pencil,
  PenSquare,
} from "lucide-react";
import { useState } from "react";
import Pagination from "../components/Pagination";
import CommonButton from "../components/CommonButton";
import foodPlate from "../assest/images/dashboard2.png";

const initialReservations = [
  {
    id: 1,
    reservedBy: "Mithesh Jain",
    reservationId: "RESV1903",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "07/05/2025",
    visitDate: "09/05/2025",
    reservedFor: "Lunch",
    timeSlot: "02:00PM",
    guests: "03",
    status: "Booked",
    email: "example@gmail.com",
  },
  {
    id: 2,
    reservedBy: "Karunakar Singh",
    reservationId: "RESV1902",
    phone: "+91 98564 88231",
    branch: "Noida",
    reservedOn: "06/05/2025",
    visitDate: "07/05/2025",
    reservedFor: "Lunch",
    timeSlot: "02:00PM",
    guests: "04",
    status: "Booked",
    email: "example@gmail.com",
  },
  {
    id: 3,
    reservedBy: "Devis Leous",
    reservationId: "RESV1901",
    phone: "+91 77859 88231",
    branch: "Noida",
    reservedOn: "02/05/2025",
    visitDate: "10/05/2025",
    reservedFor: "Breakfast",
    timeSlot: "10:00AM",
    guests: "02",
    status: "Booked",
    email: "example@gmail.com",
  },
  {
    id: 4,
    reservedBy: "Deepak Calzoni",
    reservationId: "RESV1900",
    phone: "+91 88937 79851",
    branch: "Noida",
    reservedOn: "01/05/2025",
    visitDate: "08/05/2025",
    reservedFor: "Dinner",
    timeSlot: "08:00PM",
    guests: "08",
    status: "Booked",
    email: "example@gmail.com",
  },
  {
    id: 5,
    reservedBy: "Saris James",
    reservationId: "RESV1899",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "12/04/2025",
    visitDate: "15/04/2025",
    reservedFor: "Dinner",
    timeSlot: "10:00PM",
    guests: "06",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 6,
    reservedBy: "Rozy Philips",
    reservationId: "RESV1898",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "13/05/2025",
    visitDate: "21/04/2025",
    reservedFor: "Lunch",
    timeSlot: "03:00PM",
    guests: "04",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 7,
    reservedBy: "Akanksh Thapa",
    reservationId: "RESV1897",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "18/04/2025",
    visitDate: "22/04/2025",
    reservedFor: "Breakfast",
    timeSlot: "11:00PM",
    guests: "01",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 8,
    reservedBy: "Martin Geidt",
    reservationId: "RESV1896",
    phone: "+91 88937 88231",
    branch: "Agra",
    reservedOn: "19/04/2025",
    visitDate: "23/04/2025",
    reservedFor: "Dinner",
    timeSlot: "10:00PM",
    guests: "08",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 9,
    reservedBy: "Davis Levin",
    reservationId: "RESV1895",
    phone: "+91 88937 88231",
    branch: "Agra",
    reservedOn: "01/04/2025",
    visitDate: "05/04/2025",
    reservedFor: "Dinner",
    timeSlot: "09:00PM",
    guests: "12",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 10,
    reservedBy: "Carter Vaccaro",
    reservationId: "RESV1894",
    phone: "+91 88937 88231",
    branch: "Delhi",
    reservedOn: "31/03/2025",
    visitDate: "01/04/2025",
    reservedFor: "Breakfast",
    timeSlot: "10:00AM",
    guests: "10",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 11,
    reservedBy: "Miracle Westervelt",
    reservationId: "RESV1893",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "29/03/2025",
    visitDate: "31/03/2025",
    reservedFor: "Lunch",
    timeSlot: "02:00PM",
    guests: "06",
    status: "Completed",
    email: "example@gmail.com",
  },
  {
    id: 12,
    reservedBy: "Dulce Bator",
    reservationId: "RESV1892",
    phone: "+91 88937 88231",
    branch: "Noida",
    reservedOn: "22/03/2025",
    visitDate: "04/03/2025",
    reservedFor: "Breakfast",
    timeSlot: "11:00AM",
    guests: "04",
    status: "Completed",
    email: "example@gmail.com",
  },
];

export default function Reservations() {
  const [page, setPage] = useState(1);

  const [reservations, setReservations] = useState(
    initialReservations
  );

  const [showActive, setShowActive] =
    useState(false);

  const [selectedReservation, setSelectedReservation] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);

  const [isEditable, setIsEditable] =
    useState(false);

  const [formData, setFormData] = useState({});

  const handleDelete = (id) => {
    setReservations((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleView = (item) => {
    setSelectedReservation(item);

    setFormData({
      ...item,
      hotelName:
        "The Salt Cafe, Sector-104 Noida",
      manager: "Rohith Genny",
      street: "Street Name",
      city: "Landmark, City,",
      zip: "574528",
      country: "India",
    });

    setShowDetails(true);

    setIsEditable(false);
  };

  const handleChange = (
    field,
    value
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="relative">
      <img src={foodPlate} alt="card background" className="w-[150px] absolute right-0 -top-10 z-[0] rotate-20 opacity-50" />

      {!showDetails ? (
        <div className="flex flex-col justify-between z-10 relative">

          <div>

            <div className="flex items-center justify-between gap-5">

              <h1 className="text-[22px] leading-none font-semibold text-black">
                Bookings / Reservations
              </h1>

              <button
                onClick={() =>
                  setShowActive((s) => !s)
                }
                className={`h-12 px-5 z-10 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[16px] font-semibold ${
                  showActive
                    ? "bg-[#C86F40] text-white"
                    : "bg-white text-[#C86F40]"
                }`}
              >
                <Calendar size={18} />

                {showActive
                  ? "Showing: Booked"
                  : "Active Reservations"}
              </button>

            </div>

            <div className="mt-5 z-10 overflow-x-auto h-[calc(100vh-255px)] w-[calc(100vw-340px)] scroll-hide bg-white rounded-lg">

              <table className="z-10 w-full min-w-[2000px] border-separate border-spacing-0 overflow-hidden rounded-lg">

                <thead>

                  <tr className="bg-[#C86F40]">

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase rounded-tl-lg">
                      Reserved By
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Reservation ID
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Phone Number
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Hotel Branch
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Reserved On
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Date Of Visit
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Reserved For
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Time Slot
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      No. Of Guests
                    </th>

                    <th className="text-center text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Status
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Email
                    </th>

                    <th className="text-center text-white text-[16px] font-bold px-5 py-[20px] uppercase rounded-tr-lg">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {(showActive
                    ? reservations.filter(
                        (r) =>
                          r.status ===
                          "Booked"
                      )
                    : reservations
                  ).map((item) => (

                    <tr key={item.id}>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.reservedBy}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.reservationId}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.phone}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.branch}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.reservedOn}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.visitDate}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.reservedFor}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.timeSlot}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.guests}
                      </td>

                      <td
                        className={`px-5 py-[18px] border border-[#E5E5E5] border-t-0 ${
                          item.status ===
                          "Booked"
                            ? "bg-[#EDF8EF]"
                            : "bg-[#FFF1F1]"
                        }`}
                      >

                        <div className="flex justify-center">

                          <span
                            className={`text-[16px] font-semibold ${
                              item.status ===
                              "Booked"
                                ? "text-[#008236]"
                                : "text-[#D60000]"
                            }`}
                          >
                            {item.status}
                          </span>

                        </div>

                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.email}
                      </td>

                      <td className="px-5 py-[18px] border border-[#E5E5E5] border-t-0">

                        <div className="flex items-center justify-center gap-5">

                          <button
                            onClick={() =>
                              handleView(
                                item
                              )
                            }
                            className="text-[#C86F40]"
                          >
                            <Eye
                              size={22}
                            />
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(
                                item.id
                              )
                            }
                            className="text-[#FF4B5C]"
                          >
                            <Trash2
                              size={22}
                            />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          <div className="mt-5">

            <Pagination
              currentPage={page}
              totalPages={10}
              totalEntries={100}
              startEntry={1}
              endEntry={10}
              onPageChange={setPage}
            />

          </div>

        </div>
      ) : (
        <div className="z-10 relative">

          <div className="flex items-center gap-5">

            <button
              onClick={() =>
                setShowDetails(
                  false
                )
              }
            >
              <ArrowLeft
                size={24}
              />
            </button>

            <h1 className="text-[20px] font-semibold text-black">
              {isEditable
                ? "Edit Reservation Slots"
                : "Reservation Details"}
            </h1>

          </div>

          <div className="mt-8 rounded-xl border border-[#D9D9D9] bg-white shadow-sm">

            <div className="relative p-5">

              <div className="absolute right-14 top-[-25px] h-[50px] min-w-[240px] rounded-lg bg-[#14A344] shadow-lg flex items-center justify-center">

                <p className="text-white text-[18px] font-bold">
                  Status : Booked
                </p>

              </div>

              {!isEditable && (
                <button
                  onClick={() =>
                    setIsEditable(
                      true
                    )
                  }
                  className="absolute right-14 top-16 text-[#C86F40]"
                >
                  <PenSquare
                    size={42}
                  />
                </button>
              )}

              <div className="w-[400px] h-[60px] rounded-tr-[2rem] bg-[#C86F40] flex items-center px-14">

                <h2 className="text-white text-[24px] font-bold">
                  Reservation Details
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-6 pt-14">

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Reserved By
                  </label>

                  <input
                    value={
                      formData.reservedBy
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Phone Number
                  </label>

                  <input
                    value={
                      formData.phone
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Phone Number
                  </label>

                  <input
                    value={
                      formData.phone
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Booking Id
                  </label>

                  <input
                    value={
                      formData.reservationId
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Branch
                  </label>

                  <input
                    value={
                      formData.branch
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-black outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    No of Guests
                  </label>

                  <input
                    value={
                      formData.guests
                    }
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[18px] font-semibold text-black outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Reserved On
                  </label>

                  <input
                    value={
                      formData.reservedOn
                    }
                    onChange={(e) =>
                      handleChange(
                        "reservedOn",
                        e.target.value
                      )
                    }
                    disabled={
                      !isEditable
                    }
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[18px] font-semibold text-black outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Date Of Visit
                  </label>

                  <input
                    value={
                      formData.visitDate
                    }
                    onChange={(e) =>
                      handleChange(
                        "visitDate",
                        e.target.value
                      )
                    }
                    disabled={
                      !isEditable
                    }
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[18px] font-semibold text-black outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Reserved For
                  </label>

                  <input
                    value={
                      formData.reservedFor
                    }
                    onChange={(e) =>
                      handleChange(
                        "reservedFor",
                        e.target.value
                      )
                    }
                    disabled={
                      !isEditable
                    }
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[18px] font-semibold text-black outline-none"
                  />

                </div>

                <div>

                  <label className="text-[18px] font-medium text-[#2B2B2B]">
                    Time Slot
                  </label>

                  <input
                    value={
                      formData.timeSlot
                    }
                    onChange={(e) =>
                      handleChange(
                        "timeSlot",
                        e.target.value
                      )
                    }
                    disabled={
                      !isEditable
                    }
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[18px] font-semibold text-black outline-none"
                  />

                </div>

              </div>

              <div className="mt-12">

                <div className="w-[400px] h-[60px] rounded-tr-[2rem] bg-[#C86F40] flex items-center px-14">

                  <h2 className="text-white text-[24px] font-bold">
                    Hotel Details
                  </h2>

                </div>

                <div className="grid grid-cols-2 gap-6 pt-14">

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      Hotel Name
                    </label>

                    <input
                      value={
                        formData.hotelName
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      Branch Manager:
                    </label>

                    <input
                      value={
                        formData.manager
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                </div>

                <h2 className="text-[24px] font-semibold text-[#B7B7B7] mt-10">
                  Address
                </h2>

                <div className="grid grid-cols-2 gap-6 pt-8">

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      Street Address
                    </label>

                    <input
                      value={
                        formData.street
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      City
                    </label>

                    <input
                      value={
                        formData.city
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      Zip
                    </label>

                    <input
                      value={
                        formData.zip
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                  <div>

                    <label className="text-[18px] font-medium text-[#2B2B2B]">
                      Country
                    </label>

                    <input
                      value={
                        formData.country
                      }
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />

                  </div>

                </div>

                {isEditable && (
                  <div className="flex justify-center mt-16">

                    <CommonButton
                      onClick={() =>
                        setIsEditable(
                          false
                        )
                      }
                      className="h-[60px]"
                    >
                      Save Changes
                    </CommonButton>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}

