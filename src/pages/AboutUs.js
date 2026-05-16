import { CirclePlus, Pencil, Trash2 } from "lucide-react";

import { useState } from "react";

import CommonModal from "../components/CommonModal";
import SuccessModal from "../components/SuccessModal";

const initialAboutUs = [
  {
    id: 1,
    title: "About Us",
    description:
      "Welcome to our café app! By using our table reservation and online delivery services, you agree to the following terms and conditions. These terms ensure a smooth and enjoyable experience for both our guests and staff. Please read them carefully before making a booking or placing an order. Continued use of our services implies acceptance of these terms.",
    extra: "We aim to provide exceptional service whether........Contd....",
    status: "Active",
  },
  {
    id: 2,
    title: "About Us",
    description:
      "Welcome to our café app! We’re excited to serve you, whether you're dining in or ordering from the comfort of your home. To keep things smooth and fair for everyone, we’ve put together a few simple terms. These help us manage bookings, deliveries, payments, and ensure a pleasant experience for all our guests. By using the app, you're agreeing to the following:",
    extra:
      "📅 Table Bookings: You can book your table right from the app — easy and fast! Reservations can be made up to 7 days ahead and will be confirmed by SMS or........Contd....",
    status: "In-Active",
  },
];

export default function AboutUs() {
  const [about, setAbout] = useState(initialAboutUs);

  const [viewModal, setViewModal] = useState(false);

  const [selectedAbout, setSelectedAbout] = useState(null);

  const handleView = (item) => {
    setSelectedAbout(item);
    setViewModal(true);
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Please enter title";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please enter content";
    }

    if (!formData.status) {
      newErrors.status = "Please select status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const [openModal, setOpenModal] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    extra: "",
    status: "",
  });

  const handleDelete = (id) => {
    setAbout((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setFormData({
      title: item.title,
      description: item.description,
      extra: item.extra,
      status: item.status,
    });

    setOpenModal(true);
  };

  const handleAdd = () => {
    if (!validateForm()) return;

    const newTerm = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: formData.status,
    };

    setAbout((prev) => [...prev, newTerm]);

    setOpenModal(false);
    setSuccessModal(true);

    setFormData({
      title: "",
      description: "",
      status: "",
    });

    setErrors({});
  };

  const handleUpdate = () => {
    if (!validateForm()) return;

    setAbout((prev) =>
      prev.map((item) =>
        item.id === editId
          ? {
              ...item,
              title: formData.title,
              description: formData.description,
              status: formData.status,
            }
          : item,
      ),
    );

    setOpenModal(false);
    setSuccessModal(true);

    setEditId(null);

    setFormData({
      title: "",
      description: "",
      status: "",
    });

    setErrors({});
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-[22px] font-semibold text-black">About Us</h1>

        <button
          onClick={() => {
            setEditId(null);

            setFormData({
              title: "",
              description: "",
              extra: "",
              status: "",
            });

            setOpenModal(true);
          }}
          className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[#C86F40] text-[16px] font-semibold bg-white"
          style={{
            boxShadow: "4px 8px 15px 0px #BDBDBD30",
          }}
        >
          <CirclePlus size={18} />
          Add New About Us
        </button>
      </div>

      <div className="space-y-5 mt-5">
        {about.map((item) => (
          <div
            key={item.id}
            onClick={() => handleView(item)}
            className="bg-white rounded-lg p-5"
            style={{
              boxShadow: "4px 8px 15px 0px #BDBDBD30",
            }}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex-1">
                <h2 className="text-[18px] font-semibold text-black">
                  {item.title}
                </h2>

                <p className="text-[#B0B0B0] text-[16px] leading-9 mt-4">
                  {item.description}
                </p>

                <p className="text-[#B0B0B0] text-[16px] leading-9">
                  {item.extra}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(item);
                  }}
                  className="text-[#9A9A9A]"
                >
                  <Pencil size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="text-[#FF4B5C]"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <p
                className={`text-[16px] font-semibold ${
                  item.status === "Active" ? "text-[#00B207]" : "text-[#FF0000]"
                }`}
              >
                Status: {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CommonModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={editId ? "Edit About Us" : "Add New About Us"}
        maxWidth="max-w-4xl"
      >
        <div className="space-y-3">
          <div className="pb-2">
            <label className="text-[#C86F40] text-[16px] font-medium">
              About Us Title
            </label>

            <input
              placeholder="Your title here"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className={`w-full h-14 rounded-xl bg-[#F5F5F5] px-5 mt-3 outline-none text-[16px] border ${
                errors.title ? "border-red-500" : "border-transparent"
              }`}
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-2">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="text-[#C86F40] text-[16px] font-medium">
              About Us Content
            </label>

            <textarea
              placeholder="Content here"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className={`w-full h-44 rounded-xl bg-[#F5F5F5] p-5 mt-3 outline-none text-[16px] resize-none border ${
                errors.description ? "border-red-500" : "border-transparent"
              }`}
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-0">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="text-[#C86F40] text-[16px] font-medium">
              Status
            </label>

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className={`w-full h-14 rounded-xl bg-[#F5F5F5] px-5 mt-3 outline-none text-[16px] border ${
                errors.status ? "border-red-500" : "border-transparent"
              }`}
            >
              <option value="">Select Status</option>

              <option value="Active">Active</option>

              <option value="In-Active">In-Active</option>
            </select>

            {errors.status && (
              <p className="text-red-500 text-sm mt-2">{errors.status}</p>
            )}
          </div>

          <div className="flex justify-center pt-3">
            <button
              onClick={editId ? handleUpdate : handleAdd}
              className="h-14 px-24 rounded-lg bg-[#C86F40] text-white text-[20px] font-semibold"
            >
              {editId ? "Save Changes" : "Add"}
            </button>
          </div>
        </div>
      </CommonModal>

      <CommonModal
        open={viewModal}
        onClose={() => setViewModal(false)}
        title={selectedAbout?.title || ""}
        maxWidth="max-w-3xl"
      >
        {selectedAbout && (
          <div className="px-3 pb-3">
            <div className="mt-8 space-y-8">
              <p className="text-[#555555] text-[18px] leading-[1.5]">
                {selectedAbout.description}
              </p>
            </div>
          </div>
        )}
      </CommonModal>

      <SuccessModal
        open={successModal}
        onClose={() => setSuccessModal(false)}
        title={
          editId
            ? "About Us Successfully Updated"
            : "About Us Successfully Added"
        }
      />
    </div>
  );
}
