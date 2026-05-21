import {
  Trash2,
  Eye,
  ArrowLeft,
  PenSquare,
  PlusCircle,
} from "lucide-react";
import { useState } from "react";
import Pagination from "../components/Pagination";
import foodPlate from "../assest/images/dashboard2.png";
import CommonModal from "../components/CommonModal";

const initialOffers = [
  {
    id: 1,
    offerName: "Test Free Delivery",
    amount: "N/A",
    validFor: "Above 1500",
    code: "SALTFLATOFFDEL",
    branch: "Noida",
    activeFrom: "01/04/2025",
    activeTo: "01/07/2025",
    limitNumber: "500",
    codeUsed: "352",
    status: "Active",
  },
  {
    id: 2,
    offerName: "40% OFF",
    amount: "Total - 40%",
    validFor: "Above 3500",
    code: "SALTFLAT40",
    branch: "Noida",
    activeFrom: "06/04/2025",
    activeTo: "07/05/2025",
    limitNumber: "600",
    codeUsed: "420",
    status: "Active",
  },
  {
    id: 3,
    offerName: "12% OFF",
    amount: "Total - 12%",
    validFor: "Above 999",
    code: "SALTFLAT12",
    branch: "Agra",
    activeFrom: "02/05/2025",
    activeTo: "10/06/2025",
    limitNumber: "250",
    codeUsed: "186",
    status: "Active",
  },
  {
    id: 4,
    offerName: "25% OFF",
    amount: "Total - 25%",
    validFor: "Above 3000",
    code: "SALTFLAT25",
    branch: "Agra",
    activeFrom: "01/05/2025",
    activeTo: "08/06/2025",
    limitNumber: "300",
    codeUsed: "250",
    status: "Active",
  },
  {
    id: 5,
    offerName: "18% OFF",
    amount: "Total - 18%",
    validFor: "Above 6000",
    code: "SALTFLAT18",
    branch: "Noida",
    activeFrom: "01/03/2025",
    activeTo: "01/05/2025",
    limitNumber: "150",
    codeUsed: "129",
    status: "Expired",
  },
];

const emptyOffer = {
  offerName: "",
  amount: "",
  validFor: "",
  branch: "",
  activeFrom: "",
  activeTo: "",
  limitNumber: "",
  codeUsed: "",
  status: "",
};

export default function Offers() {
  const [page, setPage] = useState(1);

  const [offers, setOffers] =
    useState(initialOffers);

  const [openModal, setOpenModal] =
    useState(false);

  const [selectedOffer, setSelectedOffer] =
    useState(null);

  const [mediaFile, setMediaFile] =
    useState(null);

  const [formData, setFormData] =
    useState(emptyOffer);

  const handleDelete = (id) => {
    setOffers((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const handleAddOffer = () => {
    setSelectedOffer(null);

    setFormData(emptyOffer);

    setMediaFile(null);

    setOpenModal(true);
  };

  const handleViewOffer = (
    item
  ) => {
    setSelectedOffer(item);

    setFormData(item);

    setOpenModal(true);
  };

  return (
    <div className="relative">

      <img
        src={foodPlate}
        alt=""
        className="w-[150px] absolute right-0 -top-10 z-[0] rotate-20 opacity-50"
      />

      <div className="flex flex-col justify-between z-10 relative">

        <div>

          <div className="flex items-center justify-between gap-5">

            <h1 className="text-[22px] leading-none font-semibold text-black">
              Offers
            </h1>

            <button
              onClick={
                handleAddOffer
              }
              className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[16px] font-semibold bg-white text-[#C86F40]"
            >
              <PlusCircle
                size={18}
              />
              Add New Offer
            </button>

          </div>

          <div className="mt-5 overflow-x-auto h-[calc(100vh-255px)] lg:w-[calc(100vw-340px)] w-[calc(100vw-40px)] scroll-hide bg-white rounded-lg">

            <table className="w-full min-w-[1700px] border-separate border-spacing-0 overflow-hidden rounded-lg">

              <thead>

                <tr className="bg-[#C86F40]">

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase rounded-tl-lg">
                    Offer Name
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Amount
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Valid For
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Code
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Hotel Branch
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Active From
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Active To
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Limit Number
                  </th>

                  <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Code Used
                  </th>

                  <th className="text-center text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                    Status
                  </th>

                  <th className="text-center text-white text-[16px] font-bold px-5 py-[22px] uppercase rounded-tr-lg">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {offers.map(
                  (item) => (
                    <tr
                      key={item.id}
                      className={
                        item.status ===
                        "Expired"
                          ? "bg-[#FFF1F1]"
                          : ""
                      }
                    >

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.offerName
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.amount
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.validFor
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {item.code}
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.branch
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.activeFrom
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.activeTo
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.limitNumber
                        }
                      </td>

                      <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                        {
                          item.codeUsed
                        }
                      </td>

                      <td
                        className={`px-5 py-[18px] border border-[#E5E5E5] border-t-0 ${
                          item.status ===
                          "Active"
                            ? "bg-[#EDF8EF]"
                            : "bg-[#FFF1F1]"
                        }`}
                      >

                        <div className="flex justify-center">

                          <span
                            className={`text-[16px] font-semibold ${
                              item.status ===
                              "Active"
                                ? "text-[#008236]"
                                : "text-[#D60000]"
                            }`}
                          >
                            {
                              item.status
                            }
                          </span>

                        </div>

                      </td>

                      <td className="px-5 py-[18px] border border-[#E5E5E5] border-t-0">

                        <div className="flex items-center justify-center gap-5">

                          <button
                            onClick={() =>
                              handleViewOffer(
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
                  )
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
            onPageChange={
              setPage
            }
          />

        </div>

      </div>

      <CommonModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        title={
          selectedOffer
            ? "View Offer Details"
            : "Add New Offer"
        }
        maxWidth="max-w-[600px]"
      >

        <div className="pb-3">

          <div className=" space-y-4">

            <input
              placeholder="Offer Name"
              value={
                formData.offerName
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  offerName:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <div className="relative">

              <input
                type="file"
                id="offerMedia"
                hidden
                disabled={
                  !!selectedOffer
                }
                onChange={(e) =>
                  setMediaFile(
                    e.target
                      .files[0]
                  )
                }
              />

              <label
                htmlFor="offerMedia"
                className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 flex items-center justify-between"
              >

                <span className="text-[18px] text-[#7A2D00] font-medium">

                  {selectedOffer
                    ? `Media Selected : ${selectedOffer.offerName} Offer.jpg`
                    : mediaFile
                    ? mediaFile.name
                    : "Offer Related Media File"}

                </span>

                <div
                  className={`h-10 px-7 rounded-md flex items-center justify-center text-[16px] font-semibold ${
                    selectedOffer
                      ? "bg-[#ECE2DA] text-white"
                      : "bg-[#9E9E9E] text-white"
                  }`}
                >
                  File Upload
                </div>

              </label>

            </div>

            <input
              placeholder="Amount"
              value={
                formData.amount
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  amount:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <input
              placeholder="Valid For"
              value={
                formData.validFor
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  validFor:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <input
              placeholder="Select Hotel Branch"
              value={
                formData.branch
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  branch:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <input
              placeholder="Active From"
              value={
                formData.activeFrom
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  activeFrom:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <input
              placeholder="Active To"
              value={
                formData.activeTo
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  activeTo:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            <input
              placeholder="Limit Number"
              value={
                formData.limitNumber
              }
              disabled={
                !!selectedOffer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  limitNumber:
                    e.target
                      .value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] text-[#7A2D00] placeholder:text-[#B88463]"
            />

            {selectedOffer && (

              <input
                value={`Code Used : ${formData.codeUsed}`}
                disabled
                className="w-full h-14 rounded-xl bg-[#FFF5EF] px-5 outline-none text-[18px] font-semibold text-[#7A2D00]"
              />

            )}

            <div
              className={`w-full h-14 rounded-xl px-5 flex items-center text-[18px] font-semibold ${
                selectedOffer
                  ? formData.status ===
                    "Active"
                    ? "bg-[#EDF8EF] text-[#008236]"
                    : "bg-[#FFF1F1] text-[#D60000]"
                  : "bg-[#FFF5EF] text-[#7A2D00]"
              }`}
            >

              {selectedOffer
                ? `Status : ${formData.status}`
                : "Status"}

            </div>

            {!selectedOffer && (

              <div className="flex justify-center">

                <button
                  className="py-3 px-24 rounded-lg bg-[#C86F40] text-white text-[18px] font-semibold"
                  style={{
                    boxShadow:
                      "4px 8px 15px 0px #BDBDBD30",
                  }}
                >
                  Add Offer
                </button>

              </div>

            )}

          </div>

        </div>

      </CommonModal>

    </div>
  );
}