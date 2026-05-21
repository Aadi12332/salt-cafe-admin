import {
  Calendar,
  Trash2,
  Eye,
  ArrowLeft,
  Pencil,
  PenSquare,
  Send,
  Search,
} from "lucide-react";
import { useState } from "react";
import Pagination from "../components/Pagination";
import CommonButton from "../components/CommonButton";
import foodPlate from "../assest/images/dashboard2.png";
import CommonModal from "../components/CommonModal";

const initialOrders = [
  {
    id: 1,
    orderId: "ORD230",
    status: "In-Progress",
    itemOrdered: "Bristo Pizza",
    quantity: 3,
    orderedBy: "Raghav Taneja",
    orderedOn: "08/05/2025",
    foodCategory: "Pizza",
    deliveryLocation: "House No 54/B, Sector 5, Noida",
    orderedFromBranch: "Noida",
  },
  {
    id: 2,
    orderId: "ORD229",
    status: "In-Progress",
    itemOrdered: "Mexican Burger",
    quantity: 4,
    orderedBy: "Miracle Westervelt",
    orderedOn: "08/05/2025",
    foodCategory: "Burger",
    deliveryLocation: "House No 15/B, Sector 4, Noida",
    orderedFromBranch: "Noida",
  },
  {
    id: 3,
    orderId: "ORD228",
    status: "Delivered",
    itemOrdered: "Italian Pizza",
    quantity: 6,
    orderedBy: "James Saris",
    orderedOn: "05/05/2025",
    foodCategory: "Pizza",
    deliveryLocation: "Address",
    orderedFromBranch: "Noida",
  },
  {
    id: 4,
    orderId: "ORD227",
    status: "Delivered",
    itemOrdered: "White Sause Pasta",
    quantity: 2,
    orderedBy: "Bhupal Chandra",
    orderedOn: "05/05/2025",
    foodCategory: "Pasta",
    deliveryLocation: "Address",
    orderedFromBranch: "Delhi",
  },
  {
    id: 5,
    orderId: "ORD226",
    status: "Delivered",
    itemOrdered: "Idly Sambar",
    quantity: 3,
    orderedBy: "Chandran Guna",
    orderedOn: "03/05/2025",
    foodCategory: "South Indian",
    deliveryLocation: "Address",
    orderedFromBranch: "Noida",
  },
  {
    id: 6,
    orderId: "ORD225",
    status: "Delivered",
    itemOrdered: "Chicken Ravioli: Pasta",
    quantity: 1,
    orderedBy: "Diwesh Jia",
    orderedOn: "01/05/2025",
    foodCategory: "Pasta",
    deliveryLocation: "Address",
    orderedFromBranch: "Noida",
  },
  {
    id: 7,
    orderId: "ORD224",
    status: "Delivered",
    itemOrdered: "Shawarma Roll",
    quantity: 3,
    orderedBy: "Sarangiya Javed",
    orderedOn: "01/05/2025",
    foodCategory: "Rolls",
    deliveryLocation: "Address",
    orderedFromBranch: "Agra",
  },
  {
    id: 8,
    orderId: "ORD222",
    status: "Delivered",
    itemOrdered: "Chicken Dum Biriyani",
    quantity: 1,
    orderedBy: "Kripa Singh",
    orderedOn: "01/05/2025",
    foodCategory: "Biriyani",
    deliveryLocation: "Address",
    orderedFromBranch: "Noida",
  },
  {
    id: 9,
    orderId: "ORD222",
    status: "Delivered",
    itemOrdered: "Paneer Sandwhich",
    quantity: 8,
    orderedBy: "Bhupesh Moorthy",
    orderedOn: "01/05/2025",
    foodCategory: "Sandwich",
    deliveryLocation: "Address",
    orderedFromBranch: "Noida",
  },
  {
    id: 10,
    orderId: "ORD222",
    status: "Delivered",
    itemOrdered: "Fried Veg Momos",
    quantity: 3,
    orderedBy: "Gaveesh Sha",
    orderedOn: "01/05/2025",
    foodCategory: "Momos",
    deliveryLocation: "Address",
    orderedFromBranch: "Agra",
  },
  {
    id: 11,
    orderId: "ORD220",
    status: "Delivered",
    itemOrdered: "Chowmein Noodles",
    quantity: 1,
    orderedBy: "Anmol Roy",
    orderedOn: "01/05/2025",
    foodCategory: "Chowmein",
    deliveryLocation: "Address",
    orderedFromBranch: "Agra",
  },
  {
    id: 12,
    orderId: "ORD220",
    status: "Delivered",
    itemOrdered: "Chicco Milkshake",
    quantity: 2,
    orderedBy: "Deekshith OJ",
    orderedOn: "30/04/2025",
    foodCategory: "Milkshakes",
    deliveryLocation: "Address",
    orderedFromBranch: "Agra",
  },
];

export default function Orders() {
  const [page, setPage] = useState(1);
  const [viewModal, setViewModal] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (item) => {
    setSelectedOrder(item);
    setViewModal(true);
  };
  const [orders, setOrders] = useState(initialOrders);

  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((item) =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()),
  );

  const [showActive, setShowActive] = useState(false);
  const displayedOrders = showActive
    ? filteredOrders.filter((o) => o.status === "In-Progress")
    : filteredOrders;


  const [showDetails, setShowDetails] = useState(false);

  const [isEditable, setIsEditable] = useState(false);

  const [formData, setFormData] = useState({});

  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  const handleView = (item) => {
    setSelectedOrder(item);

    setFormData({
      ...item,
      hotelName: "The Salt Cafe, Sector-104 Noida",
      manager: "Rohith Genny",
      street: "Street Name",
      city: "Landmark, City,",
      zip: "574528",
      country: "India",
    });

    setShowDetails(true);

    setIsEditable(false);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="relative">
      <img
        src={foodPlate}
        alt="card background"
        className="w-[150px] absolute right-0 -top-10 z-[0] rotate-20 opacity-50"
      />

      {!showDetails ? (
        <div className="flex flex-col justify-between z-10 relative">
          <div>
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <div className="flex items-center gap-6">
                <h1 className="text-[22px] leading-none font-semibold text-black">
                  Orders
                </h1>
                <p className="font-medium">Total Orders: 230</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex h-12 items-center gap-2 border border-[#CFCFCF] rounded-lg px-2 bg-white py-2">
                  <Search size={18} className="text-[#C86F40]" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Orders by Order ID"
                    className="bg-transparent focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setShowActive((s) => !s)}
                  className={`h-12 px-5 z-10 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[16px] font-semibold ${
                    showActive
                      ? "bg-[#C86F40] text-white"
                      : "bg-white text-[#C86F40]"
                  }`}
                >
                  <Send size={18} />

                  {showActive ? "Showing: In-Progress" : "Active Orders"}
                </button>
              </div>
            </div>

            <div className="mt-5 z-10 overflow-x-auto h-[calc(100vh-255px)] lg:w-[calc(100vw-340px)] w-[calc(100vw-40px)] scroll-hide bg-white rounded-lg">
              <table className="w-full min-w-[1700px] border-separate border-spacing-0 overflow-hidden rounded-lg">
                <thead>
                  <tr className="bg-[#C86F40]">
                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase rounded-tl-lg">
                      Order ID
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Status
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Item Ordered
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Quantity
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Ordered By
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Ordered On
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Food Category
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase">
                      Delivery Location
                    </th>

                    <th className="text-left text-white text-[16px] font-bold px-5 py-[20px] uppercase rounded-tr-lg">
                      Ordered From Branch
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {displayedOrders.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => handleViewOrder(item)}
                      className="cursor-pointer hover:bg-[#F5F5F5]"
                    >
                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.orderId}
                      </td>

                      <td
                        className={`px-5 py-[18px] border border-[#E5E5E5] border-t-0 ${
                          item.status === "In-Progress"
                            ? "bg-[#EEF0FF]"
                            : "bg-[#EDF8EF]"
                        }`}
                      >
                        <div className="flex justify-center">
                          <span
                            className={`text-[16px] font-semibold ${
                              item.status === "In-Progress"
                                ? "text-[#0029D6]"
                                : "text-[#00B533]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.itemOrdered}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.quantity}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.orderedBy}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.orderedOn}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.foodCategory}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] leading-[32px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0 min-w-[320px]">
                        {item.deliveryLocation}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.orderedFromBranch}
                      </td>
                    </tr>
                  ))}

                  {displayedOrders.length === 0 && (
                    <tr>
                      <td colSpan={9} className="text-center py-10 text-[18px] text-[#4A4A4A]">
                        No Orders Found
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
            <button onClick={() => setShowDetails(false)}>
              <ArrowLeft size={24} />
            </button>

            <h1 className="text-[16px] font-semibold text-black">
              {isEditable ? "Edit Reservation Slots" : "Reservation Details"}
            </h1>
          </div>

          <div className="mt-8 rounded-xl border border-[#D9D9D9] bg-white shadow-sm">
            <div className="relative p-5">
              <div className="sm:absolute sm:right-14 sm:top-[-25px] h-[50px] sm:min-w-[240px] w-fit px-5 rounded-lg bg-[#14A344] shadow-lg flex items-center justify-center">
                <p className="text-white text-[16px] font-bold">
                  Status : Booked
                </p>
              </div>

              {!isEditable && (
                <button
                  onClick={() => setIsEditable(true)}
                  className="absolute sm:right-14 right-5 top-5 sm:top-16 text-[#C86F40]"
                >
                  <PenSquare size={42} />
                </button>
              )}

              <div className="lg:w-[400px]  min-w-[200px] w-fit h-[60px] rounded-tr-[2rem] bg-[#C86F40] flex items-center px-14">
                <h2 className="text-white text-[24px] font-bold">
                  Reservation Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-14">
                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Reserved By
                  </label>

                  <input
                    value={formData.reservedBy}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Phone Number
                  </label>

                  <input
                    value={formData.phone}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Phone Number
                  </label>

                  <input
                    value={formData.phone}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Booking Id
                  </label>

                  <input
                    value={formData.reservationId}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Branch
                  </label>

                  <input
                    value={formData.branch}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    No of Guests
                  </label>

                  <input
                    value={formData.guests}
                    disabled
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Reserved On
                  </label>

                  <input
                    value={formData.reservedOn}
                    onChange={(e) => handleChange("reservedOn", e.target.value)}
                    disabled={!isEditable}
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Date Of Visit
                  </label>

                  <input
                    value={formData.visitDate}
                    onChange={(e) => handleChange("visitDate", e.target.value)}
                    disabled={!isEditable}
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Reserved For
                  </label>

                  <input
                    value={formData.reservedFor}
                    onChange={(e) =>
                      handleChange("reservedFor", e.target.value)
                    }
                    disabled={!isEditable}
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-medium text-[#2B2B2B]">
                    Time Slot
                  </label>

                  <input
                    value={formData.timeSlot}
                    onChange={(e) => handleChange("timeSlot", e.target.value)}
                    disabled={!isEditable}
                    className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-white px-8 mt-3 text-[16px] font-semibold text-black outline-none"
                  />
                </div>
              </div>

              <div className="mt-12">
                <div className="lg:w-[400px] min-w-[200px] w-fit h-[60px] rounded-tr-[2rem] bg-[#C86F40] flex items-center px-14">
                  <h2 className="text-white text-[24px] font-bold">
                    Hotel Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-14">
                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      Hotel Name
                    </label>

                    <input
                      value={formData.hotelName}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      Branch Manager:
                    </label>

                    <input
                      value={formData.manager}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>
                </div>

                <h2 className="text-[24px] font-semibold text-[#B7B7B7] mt-10">
                  Address
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8">
                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      Street Address
                    </label>

                    <input
                      value={formData.street}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      City
                    </label>

                    <input
                      value={formData.city}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      Zip
                    </label>

                    <input
                      value={formData.zip}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[16px] font-medium text-[#2B2B2B]">
                      Country
                    </label>

                    <input
                      value={formData.country}
                      disabled
                      className="w-full h-[60px] rounded-lg border border-[#A7A7A7] bg-[#D9D9D9] px-5 mt-3 text-[16px] font-semibold text-[#7A2D00] outline-none"
                    />
                  </div>
                </div>

                {isEditable && (
                  <div className="flex justify-center mt-16">
                    <CommonButton
                      onClick={() => setIsEditable(false)}
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

      <CommonModal
        open={viewModal}
        onClose={() => setViewModal(false)}
        title="Order Details"
        maxWidth="max-w-6xl"
      >
        {selectedOrder && (
          <div className="-mx-5 -mb-5 px-5 pb-10">
            <div className="relative pt-14">
              <div
                className={`absolute left-1/2 -translate-x-1/2 -top-5 h-[60px] min-w-[280px] rounded-b-[28px] shadow-lg flex items-center justify-center px-10 ${
                  selectedOrder.status === "In-Progress"
                    ? "bg-[#0B22D6]"
                    : "bg-[#00B533]"
                }`}
              >
                <p className="text-white text-[16px] font-bold">
                  Order Status: {selectedOrder.status}
                </p>
              </div>

              <div>
                <div className="space-y-5">
                  <div className="grid md:grid-cols-[1fr_300px] md:gap-10 gap-5">
                  <div className="space-y-5">
                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Order ID:
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.orderId}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Item Ordered:
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.itemOrdered}
                      </p>
                    </div>

                    <div className="flex items-center lg:gap-16 gap-4 flex-wrap">
                      <div className="flex items-center">
                        <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                          Quantity:
                        </h3>

                        <p className="text-[#9E4718] text-[16px]">
                          {selectedOrder.quantity}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                          Unit Price:
                        </h3>

                        <p className="text-[#9E4718] text-[16px]">
                          {selectedOrder.orderId === "ORD224" ? "80" : "299"}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                          Total Price:
                        </h3>

                        <p className="text-[#9E4718] text-[16px]">
                          {selectedOrder.orderId === "ORD224" ? "240" : "897"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Ordered On:
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.orderedOn}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Ordered By:
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.orderedBy}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Ordered From Branch :
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.orderedFromBranch}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <h3 className="text-[#9E4718] text-[16px] font-bold mr-2">
                        Food Category:
                      </h3>

                      <p className="text-[#9E4718] text-[16px]">
                        {selectedOrder.foodCategory}
                      </p>
                    </div>
                  </div>
  <img
                    src={
                      selectedOrder.orderId === "ORD224"
                        ? "https://images.unsplash.com/photo-1642517342422-1e4f5f2f7b5e?q=80&w=1200&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt=""
                    className="w-full h-[280px] rounded-lg object-cover shadow-lg"
                  />

                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 pt-5">
                    <div className="relative rounded-xl bg-[#FFF4EC] shadow-[0px_4px_10px_0px_#00000025] p-5 pt-10">
                      <div className="absolute left-8 -top-5 h-[40px] px-5 rounded-lg bg-[#C86F40] shadow-lg flex items-center justify-center">
                        <p className="text-white text-[16px] font-bold">
                          Delivery Location
                        </p>
                      </div>

                      <div className="space-y-3">
                        <p className="text-[#9E4718] text-[16px]">
                          House no 54/B, Sector 5, Noida
                        </p>

                        <p className="text-[#9E4718] text-[16px]">
                          Region, City,India PIN
                        </p>

                        <div className="h-[54px] rounded-lg bg-[#77A950] flex items-center justify-center px-6 w-fit">
                          <p className="text-white text-[16px] font-bold">
                            {selectedOrder.status === "In-Progress"
                              ? "Delivery Time Required: 45Min"
                              : "Delivery Time : On-time"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative rounded-lg bg-[#FFF4EC] shadow-[0px_4px_10px_0px_#00000025] p-5 pt-10">
                      <div className="absolute left-8 -top-5 h-[40px] px-5 rounded-lg bg-[#C86F40] shadow-lg flex items-center justify-center">
                        <p className="text-white text-[16px] font-bold">
                          Customer Details
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-[#9E4718] text-[16px] font-bold min-w-[110px]">
                            Name:
                          </h3>

                          <p className="text-[#9E4718] text-[16px]">
                            {selectedOrder.orderedBy}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <h3 className="text-[#9E4718] text-[16px] font-bold min-w-[110px]">
                            Mobile No:
                          </h3>

                          <p className="text-[#9E4718] text-[16px]">
                            +91 99897 66765
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <h3 className="text-[#9E4718] text-[16px] font-bold min-w-[110px]">
                            User ID:
                          </h3>

                          <p className="text-[#9E4718] text-[16px]">
                            {selectedOrder.orderId === "ORD224"
                              ? "UC1255210"
                              : "UC7845210"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CommonModal>
    </div>
  );
}
