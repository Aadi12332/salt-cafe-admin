import { PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import Pagination from "../components/Pagination";
import CommonModal from "../components/CommonModal";
import SuccessModal from "../components/SuccessModal";

const initialReferralCodes = [
  {
    id: 1,
    code: "GTUEBJ_6738_OERN",
    applyOn: "First Order",
    returns: "Get 10% Off",
    applyForOrder: "Above 1500",
    activeTo: "07/08/2025",
    status: "Active",
  },
  {
    id: 2,
    code: "SAVE25_FIRST10",
    applyOn: "First 10 Orders",
    returns: "Get 25% Off",
    applyForOrder: "Above 2500",
    activeTo: "10/10/2025",
    status: "Active",
  },
  {
    id: 3,
    code: "WELCOME600",
    applyOn: "First 6 Orders",
    returns: "Get 10% Off",
    applyForOrder: "Above 600",
    activeTo: "08/06/2025",
    status: "Active",
  },
  {
    id: 4,
    code: "FESTIVE50",
    applyOn: "Festival Orders",
    returns: "Get 50% Off",
    applyForOrder: "Above 5000",
    activeTo: "15/11/2025",
    status: "Inactive",
  },
  {
    id: 5,
    code: "SUPERDEAL20",
    applyOn: "Weekend Orders",
    returns: "Get 20% Off",
    applyForOrder: "Above 1200",
    activeTo: "25/12/2025",
    status: "Active",
  },
  {
    id: 6,
    code: "NEWYEAR100",
    applyOn: "New Year Offer",
    returns: "Flat ₹100 Off",
    applyForOrder: "Above 3000",
    activeTo: "01/01/2026",
    status: "Inactive",
  },
  {
    id: 7,
    code: "MEGA30",
    applyOn: "Special Orders",
    returns: "Get 30% Off",
    applyForOrder: "Above 1800",
    activeTo: "19/09/2025",
    status: "Active",
  },
  {
    id: 8,
    code: "REFERWIN",
    applyOn: "Referral Orders",
    returns: "Get ₹250 Cashback",
    applyForOrder: "Above 1000",
    activeTo: "28/07/2025",
    status: "Active",
  },
  {
    id: 9,
    code: "PARTY40",
    applyOn: "Party Orders",
    returns: "Get 40% Off",
    applyForOrder: "Above 7000",
    activeTo: "11/08/2025",
    status: "Inactive",
  },
  {
    id: 10,
    code: "DINNER15",
    applyOn: "Dinner Orders",
    returns: "Get 15% Off",
    applyForOrder: "Above 900",
    activeTo: "30/09/2025",
    status: "Active",
  },
];

export default function ReferAndEarn() {
  const [page, setPage] = useState(1);
  const [mediaFile, setMediaFile] = useState(null);
  const [referralCodes, setReferralCodes] = useState(initialReferralCodes);

  const handleDelete = (id) => {
    setReferralCodes((prev) => prev.filter((item) => item.id !== id));
  };

  const [openModal, setOpenModal] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    code: "",
    media: "",
    applyOn: "",
    returns: "",
    applyForOrder: "",
    activeTill: "",
    status: "",
  });

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-[22px] leading-none font-semibold text-black">
            Refer & Earn
          </h1>

          <button
            onClick={() => setOpenModal(true)}
            className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[#C86F40] text-[16px] font-semibold bg-white"
          >
            <PlusCircle size={18} />
            Add New Code
          </button>
        </div>

        <div className="mt-5 overflow-x-auto h-[calc(100vh-255px)] scroll-hide bg-white rounded-lg">
          <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-lg min-w-[1000px]">
            <thead>
              <tr className="bg-[#C86F40]">
                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase rounded-tl-lg">
                  Code
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                  Apply On
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                  Return
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                  Apply For Order
                </th>

                <th className="text-left text-white text-[16px] font-bold px-5 py-[22px] uppercase">
                  Active To
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
              {referralCodes.map((item, index) => (
                <tr key={item.id} className="border-b border-[#EAEAEA]">
                  <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                    {item.code}
                  </td>

                  <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                    {item.applyOn}
                  </td>

                  <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                    {item.returns}
                  </td>

                  <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                    {item.applyForOrder}
                  </td>

                  <td className="px-5 py-[18px] text-[16px] text-[#4A4A4A] border border-[#E5E5E5] border-t-0">
                    {item.activeTo}
                  </td>

                  <td className="px-5 py-[18px] border border-[#E5E5E5] border-t-0 bg-[#EDF8EF]">
                    <div className="flex justify-center">
                      <span className="text-[#008236] text-[16px] font-semibold">
                        {item.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-[18px] border border-[#E5E5E5] border-t-0">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-[#FF4B5C] hover:scale-110 transition-all"
                      >
                        <Trash2 size={22} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {referralCodes.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-10 text-[18px] text-[#4A4A4A]"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <CommonModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New Code"
      >
        <div className="space-y-4">
          <input
            placeholder="Code"
            value={formData.code}
            onChange={(e) =>
              setFormData({
                ...formData,
                code: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] placeholder:text-[#B88463] text-[#B88463]"
          />

          <div className="relative">
            <input
              type="file"
              id="mediaFile"
              hidden
              onChange={(e) => setMediaFile(e.target.files[0])}
            />

            <label
              htmlFor="mediaFile"
              className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 flex items-center cursor-pointer text-[18px] text-[#B88463]"
            >
              {mediaFile ? mediaFile.name : "Offer Related Media File"}
            </label>
          </div>

          <input
            placeholder="Apply ON"
            value={formData.applyOn}
            onChange={(e) =>
              setFormData({
                ...formData,
                applyOn: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] text-[#B88463] placeholder:text-[#B88463]"
          />

          <input
            placeholder="Return"
            value={formData.returns}
            onChange={(e) =>
              setFormData({
                ...formData,
                returns: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] text-[#B88463] placeholder:text-[#B88463]"
          />

          <input
            placeholder="Apply For Order"
            value={formData.applyForOrder}
            onChange={(e) =>
              setFormData({
                ...formData,
                applyForOrder: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] text-[#B88463] placeholder:text-[#B88463]"
          />

          <input
            placeholder="Active TILL"
            value={formData.activeTill}
            onChange={(e) =>
              setFormData({
                ...formData,
                activeTill: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] text-[#B88463] placeholder:text-[#B88463]"
          />

          <input
            placeholder="Status"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value,
              })
            }
            className="w-full h-16 rounded-xl bg-[#FFECE28F] px-5 outline-none text-[18px] text-[#B88463] placeholder:text-[#B88463]"
          />

          <div className="flex justify-center">
            <button
              onClick={() => {
                setOpenModal(false);
                setSuccessModal(true);
              }}
              className="h-14 px-20 rounded-xl bg-[#C86F40] text-white text-xl font-semibold"
              style={{
                boxShadow: "4px 8px 15px 0px #BDBDBD30",
              }}
            >
              Add Code
            </button>
          </div>
        </div>
      </CommonModal>

      <SuccessModal
        open={successModal}
        onClose={() => setSuccessModal(false)}
        title="Code Successfully Created"
      />

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
  );
}
