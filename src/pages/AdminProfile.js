import {
  ArrowLeft,
  Home,
  LogOut,
  Pencil,
  User
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function AdminProfile() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);

  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
  );

  const [formData, setFormData] = useState({
    firstName: "Mahendra",
    lastName: "Rathod",
    dob: "12/12/1994",
    phone: "+1 9874 562103",
    email: "example@gmail.com",
    gender: "Male",
    address: "Ocean Heights, Sector - 18, Noida,",
    postalCode: "110025",
    city: "Noida",
    country: "India"
  });

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const fields = [
    {
      label: "Date Of Birth",
      key: "dob"
    },
    {
      label: "Phone Number",
      key: "phone"
    },
    {
      label: "Email Address",
      key: "email"
    },
    {
      label: "Gender",
      key: "gender"
    },
    {
      label: "Address",
      key: "address"
    },
    {
      label: "Postal Code",
      key: "postalCode"
    },
    {
      label: "City",
      key: "city"
    },
    {
      label: "Country",
      key: "country"
    }
  ];

  return (
    <div className="">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <button
            onClick={() => setIsEdit(false)}
            className="text-black"
          >
            {isEdit ? (
              <ArrowLeft size={24} />
            ) : (
              <Home size={24} />
            )}
          </button>

          <h1 className="text-[24px] font-semibold text-black">
            {isEdit
              ? "Edit Admin Details"
              : "Admin Profile"}
          </h1>

        </div>

        {!isEdit && (
          <button
            onClick={handleLogout}
            className="bg-[#C86F40] text-white px-5 py-2 rounded-lg flex items-center gap-3 text-sm font-medium"
            style={{
              boxShadow:
                "4px 8px 15px 0px #BDBDBD30"
            }}
          >
            Logout
            <LogOut size={14} />
          </button>
        )}

      </div>

      <div className="mt-10 flex gap-5">

        <div className="relative w-fit h-fit">

          <img
            src={profileImage}
            alt="profile"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />

          {isEdit && (
            <button
              onClick={() =>
                fileInputRef.current.click()
              }
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#C86F40] flex items-center justify-center text-white"
            >
              <Pencil size={14} />
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />

        </div>

        <div className="flex-1">

          <div className="flex items-center justify-between relative">

            <h2 className="text-[24px] leading-none font-semibold text-[#2B2B2B] h-10">
              Profile Details
            </h2>

            {!isEdit && (
              <button
                onClick={() => setIsEdit(true)}
                className="w-10 h-10 rounded-xl bg-[#C86F40] flex items-center justify-center text-white"
              >
                <Pencil size={16} />
              </button>
            )}

          </div>

          <div className="mt-5 space-y-5">

            <div
              className={`grid gap-5 ${
                isEdit
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >

              <div>
                <label className="text-[20px] font-medium text-[#2B2B2B]">
                  {isEdit
                    ? "First Name"
                    : "Name"}
                </label>

                <input
                  value={
                    isEdit
                      ? formData.firstName
                      : `${formData.firstName} ${formData.lastName}`
                  }
                  disabled={!isEdit}
                  onChange={(e) =>
                    handleChange(
                      "firstName",
                      e.target.value
                    )
                  }
                  className="w-full mt-3 h-[72px] rounded-xl border border-[#9D9D9D] px-5 text-xl bg-white outline-none"
                />
              </div>

              {isEdit && (
                <div>
                  <label className="text-[20px] font-medium text-[#2B2B2B]">
                    Last Name
                  </label>

                  <input
                    value={formData.lastName}
                    onChange={(e) =>
                      handleChange(
                        "lastName",
                        e.target.value
                      )
                    }
                    className="w-full mt-3 h-[72px] rounded-xl border border-[#9D9D9D] px-5 text-xl bg-white outline-none"
                  />
                </div>
              )}

            </div>

            <div className="grid grid-cols-2 gap-5">

              {fields.map((item) => (
                <div key={item.key}>

                  <label className="text-[20px] font-medium text-[#2B2B2B]">
                    {item.label}
                  </label>

                  <input
                    value={formData[item.key]}
                    disabled={!isEdit}
                    onChange={(e) =>
                      handleChange(
                        item.key,
                        e.target.value
                      )
                    }
                    className="w-full mt-3 h-[72px] rounded-xl border border-[#9D9D9D] px-5 text-xl bg-white outline-none"
                  />

                </div>
              ))}

            </div>

            {isEdit && (
              <div className="flex justify-center pt-8">

                <button
                  onClick={() =>
                    setIsEdit(false)
                  }
                  className="bg-[#C86F40] text-white text-2xl font-medium rounded-xl px-20 py-4"
                >
                  Save
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}