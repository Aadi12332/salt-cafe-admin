import {
  ArrowLeft,
  Camera,
  PenSquare,
} from "lucide-react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

export default function AddUser() {
  const navigate =
    useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  const isEditing = Boolean(user);
const [profileImage, setProfileImage] =
  useState(null);
  const handleProfileUpload = (
  e
) => {
  const file =
    e.target.files?.[0];

  if (file) {
    setProfileImage(
      URL.createObjectURL(file)
    );
  }
};
  const initialFormData = {
    firstName: user ? user.name.split(" ")[0] : "",
    lastName: user ? user.name.split(" ").slice(1).join(" ") : "",
    phone: user ? user.phone : "",
    email: user ? user.email : "",
    userType: user ? user.type : "",
    street: "",
    city: "",
    zip: "",
    country: "",
    username: "",
    password: "",
    joiningDate: user ? user.joining : "",
    userId: user ? user.userId : "",
  };

  const [formData, setFormData] =
    useState(initialFormData);
  const [editable, setEditable] = useState(!isEditing);

  return (
    <div>

      <div className="flex items-center gap-5">

        <button
          onClick={() =>
            navigate(-1)
          }
        >
          <ArrowLeft
            size={24}
            className="text-black"
          />
        </button>

        <h1 className="text-[20px] font-semibold text-black">
          {isEditing ? "User Details" : "Add User"}
        </h1>

      </div>

      <div className="mt-8 rounded-xl border border-[#D8D8D8] bg-white p-5 shadow-sm relative">

        <div className="absolute -top-5 sm:right-10 right-2 h-12 px-5 rounded-lg border border-[#9D9D9D] flex items-center bg-[#C86F40]">
          <p className="text-[16px] font-semibold text-[#fff] text-center">
            Branch:
            <span className="text-[#fff] font-medium ml-2">
              {isEditing ? "N/A" : "Delhi/Noida/Agra"}
            </span>
          </p>
        </div>

{
  isEditing &&
        <div className="absolute top-20 right-10">
          <button
            type="button"
            onClick={() => setEditable((p) => !p)}
            aria-label={editable ? "Disable editing" : "Enable editing"}
          >
            <PenSquare size={32} className="text-[#C86F40]" />
          </button>
        </div>
}

        <div className="flex items-start gap-10 mt-10 sm:mt-0">

          <div className="relative">

  <div className="w-28 h-28 rounded-full bg-[#D9D9D9] overflow-hidden">

    {profileImage ? (
      <img
        src={profileImage}
        alt=""
        className="w-full h-full object-cover"
      />
    ) : null}

  </div>

  <input
    type="file"
    accept="image/*"
    id="profileUpload"
    hidden
    disabled={!editable}
    onChange={handleProfileUpload}
  />

  <label
    htmlFor="profileUpload"
    className={`absolute bottom-1 right-0 w-9 h-9 rounded-full bg-[#C86F40] flex items-center justify-center text-white ${
      !editable ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
    }`}
    title={editable ? "Upload profile image" : "Enable editing to change image"}
  >
    <Camera size={18} />
  </label>

</div>

        </div>

        <h2 className="text-[24px] mt-10 font-medium text-[#2B2B2B]">
              User Details
            </h2>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5">

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              First Name
            </label>

            <input
              placeholder="Enter here"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Last Name
            </label>

            <input
              placeholder="Enter here"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Phone Number
            </label>

            <input
              placeholder="Enter here"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Email Address
            </label>

            <input
              placeholder="Enter here"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              User Type
            </label>

            <select
              value={formData.userType}
              onChange={(e) =>
                setFormData({ ...formData, userType: e.target.value })
              }
              disabled={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none bg-white ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            >

              <option value="">
                Select User Type
              </option>

              <option value="Customer">
                Customer
              </option>

              <option value="Billing Manager">
                Billing Manager
              </option>

              <option value="Super Admin">
                Super Admin
              </option>

            </select>

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              User ID
            </label>

            <div className="w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 flex items-center justify-between text-[#B8B8B8] text-[16px]">
              <span>
                User ID
              </span>

              <span>
                {formData.userId || "Auto-Generated"}
              </span>
            </div>

          </div>

        </div>

        <div className="mt-14">

          <h2 className="text-[24px] font-medium text-[#2B2B2B]">
            User Address
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5">

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Street Address
            </label>

            <input
              placeholder="Enter here"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              City
            </label>

            <input
              placeholder="Enter here"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Zip
            </label>

            <input
              placeholder="Enter here"
              value={formData.zip}
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Country
            </label>

            <input
              placeholder="Enter here"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

        </div>

        <div className="mt-14">

          <h2 className="text-[24px] font-medium text-[#2B2B2B]">
            Other
            <span className="text-[#A8A8A8] text-[14px] ml-2">
            (Set login credentials to the User)
          </span>
          </h2>

          

        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5">

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Username
            </label>

            <input
              placeholder="Set Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222]">
              Password
            </label>

            <input
              placeholder="Set Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

          <div>

            <label className="text-[16px] font-semibold text-[#222222] uppercase">
              Date Of Joining
            </label>

            <input
              placeholder="Today Date"
              value={formData.joiningDate}
              onChange={(e) =>
                setFormData({ ...formData, joiningDate: e.target.value })
              }
              readOnly={!editable}
              className={`w-full h-16 border border-[#9D9D9D] rounded-lg px-5 mt-3 text-[16px] outline-none ${
                !editable ? "bg-[#F6F6F6] cursor-not-allowed" : ""
              }`}
            />

          </div>

        </div>

        {(!isEditing || editable) && (
          <button className="w-full h-16 rounded-lg bg-[#C86F40] text-white text-[22px] font-semibold mt-16">
            {isEditing ? "Update" : "Add"}
          </button>
        )}

      </div>

    </div>
  );
}