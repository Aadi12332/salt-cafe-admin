import {
  Building2,
  ChevronLeft,
  ImagePlus,
  Pencil,
  PenSquare,
  PlusCircle,
} from "lucide-react";
import CommonModal from "../components/CommonModal";

import { useState } from "react";
import CommonButton from "../components/CommonButton";

const initialBranches = [
  {
    id: 1,
    city: "Noida",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    branchName: "The Salt Cafe, Sector-104 Noida",
    manager: "Rohith Genny",
    capacity: 230,
    timing: "10:00 AM to 11:30PM",
  },
  {
    id: 2,
    city: "Delhi",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    branchName: "The Salt Cafe, Preet Vihar Delhi",
    manager: "Dinesh Rathod",
    capacity: 350,
    timing: "10:00 AM to 12:00PM",
  },
  {
    id: 3,
    city: "Agra",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    branchName: "The Salt Cafe, Fatehabad, Agra",
    manager: "Biswan Mohammed",
    capacity: 180,
    timing: "10:00 AM to 12:00PM",
  },
];

export default function Branches() {
  const [showAddPage, setShowAddPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [viewModal, setViewModal] = useState(false);

  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleViewBranch = (branch) => {
    setSelectedBranch(branch);
    setViewModal(true);
  };
  const handleEditBranch = (branch, e) => {
    if (e && e.stopPropagation) e.stopPropagation();

    const [from, to] = branch.timing
      ? branch.timing.split("to").map((s) => s.trim())
      : ["", ""];

    setFormData({
      branchName: branch.branchName || "",
      branchId: branch.id || "",
      manager: branch.manager || "",
      contact: branch.contact || "",
      fromTime: from,
      toTime: to,
      capacity: branch.capacity || "",
      street: branch.street || "",
      city: branch.city || branch.city || "",
      zip: branch.zip || "",
      country: branch.country || "",
      foodType: branch.foodType || "",
      cuisineType: branch.cuisineType || "",
      buffet: branch.buffet || "",
    });

    // Use the branch image as a dummy preview for editing
    const updatedImages = [null, null, null, null, null];
    if (branch.image) {
      updatedImages[0] = { preview: branch.image };
    }

    setImages(updatedImages);
    setIsEditing(true);
    setShowAddPage(true);
  };
  const [branches, setBranches] = useState(initialBranches);

  const [formData, setFormData] = useState({
    branchName: "",
    branchId: "",
    manager: "",
    contact: "",
    fromTime: "",
    toTime: "",
    capacity: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    foodType: "",
    cuisineType: "",
    buffet: "",
  });

  const [images, setImages] = useState([null, null, null, null, null]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];

    if (!file) return;

    const updated = [...images];

    updated[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImages(updated);
  };

  if (showAddPage) {
    return (
      <div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              setShowAddPage(false);
              setIsEditing(false);
            }}
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

            <h1 className="text-[20px] font-semibold text-black">
              {isEditing ? "Edit Branch Details" : "Add New Branch"}
            </h1>
        </div>

        <div
          className="mt-8 bg-white rounded-xl p-5 border border-[#E5E5E5]"
          style={{
            boxShadow: "4px 8px 15px 0px #BDBDBD30",
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Branch Name
              </label>

              <input
                placeholder="Enter Branch Name"
                value={formData.branchName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    branchName: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Branch ID
              </label>

              <div className="relative">
                <input
                  placeholder="Branch ID"
                  disabled
                  value={formData.branchId}
                  className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px] bg-[#F5F5F5]"
                />

                <span className="absolute right-5 top-[32px] text-[#B1B1B1] text-[14px]">
                  Auto-Generated
                </span>
              </div>
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Branch Manager
              </label>

              <input
                placeholder="Manager Name"
                value={formData.manager}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    manager: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Branch Contact
              </label>

              <input
                placeholder="Branch Contact Number"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Branch Timings
              </label>

              <div className="flex gap-5 mt-3">
                <input
                  placeholder="From Time"
                  value={formData.fromTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fromTime: e.target.value,
                    })
                  }
                  className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 outline-none text-[16px]"
                />

                <input
                  placeholder="To Time"
                  value={formData.toTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      toTime: e.target.value,
                    })
                  }
                  className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 outline-none text-[16px]"
                />
              </div>
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Seating Capacity
              </label>

              <input
                placeholder="Seating Capacity (in Numbers)"
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    capacity: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>
          </div>

          <h2 className="text-[20px] font-semibold text-[#2D2D2D] mt-12">
            Branch Address
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Street Address
              </label>

              <input
                placeholder="Enter Street address"
                value={formData.street}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    street: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                City
              </label>

              <input
                placeholder="Enter City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Zip
              </label>

              <input
                placeholder="Enter Zip code"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    zip: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Country
              </label>

              <input
                placeholder="Enter Country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    country: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>
          </div>

          <h2 className="text-[20px] font-semibold text-[#2D2D2D] mt-14">
            Other
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Food Type:
              </label>

              <input
                placeholder="Enter Food Type"
                value={formData.foodType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    foodType: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Cuisine Type:
              </label>

              <input
                placeholder="Enter Cuisine Type"
                value={formData.cuisineType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cuisineType: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="text-[16px] font-semibold text-[#2D2D2D]">
                Buffet Option Available
              </label>

              <input
                placeholder="Enter Yes/No"
                value={formData.buffet}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    buffet: e.target.value,
                  })
                }
                className="w-full h-16 rounded-lg border border-[#9F9F9F] px-5 mt-3 outline-none text-[16px]"
              />
            </div>
          </div>

          <h2 className="text-[20px] font-semibold text-[#2D2D2D] mt-14">
            Branch & Menu Images
          </h2>

          <div className="grid grid-cols-3 gap-5 mt-8">
            {images.map((item, index) => (
              <label
                key={index}
                className={`relative border-[4px] border-dashed border-[#C86F40] rounded-xl overflow-hidden flex items-center justify-center cursor-pointer ${
                  index === 0 ? "row-span-2" : "h-[180px]"
                }`}
              >
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                />

                {item ? (
                  <img
                    src={item.preview}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <ImagePlus size={40} className="text-[#9E4718]" />

                    <p className="text-[#9E4718] text-[16px] font-semibold">
                      Add Images
                    </p>
                  </div>
                )}
              </label>
            ))}
          </div>
          <CommonButton className="relative mt-10">
            {loading ? (isEditing ? "Saving..." : "Adding...") : isEditing ? "Save Changes" : "Add Now"}
          </CommonButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-5 w-full justify-between">
        <h1 className="text-[22px] font-semibold text-black">Branches</h1>
        <button
          onClick={() => {
            setIsEditing(false);
            setFormData({
              branchName: "",
              branchId: "",
              manager: "",
              contact: "",
              fromTime: "",
              toTime: "",
              capacity: "",
              street: "",
              city: "",
              zip: "",
              country: "",
              foodType: "",
              cuisineType: "",
              buffet: "",
            });
            setImages([null, null, null, null, null]);
            setShowAddPage(true);
          }}
          className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[#C86F40] text-[16px] font-semibold bg-white"
        >
          <PlusCircle size={18} />
          Add New Branch
        </button>
      </div>

      <p className="text-[#9A9A9A] text-[16px] mt-5">
        Here listed are the hotel branches
      </p>

      <div className="grid grid-cols-3 gap-5 mt-2">
        {branches.map((item) => (
          <div
            key={item.id}
            onClick={() => handleViewBranch(item)}
            className="border border-[#E7A57F] rounded-xl p-4 bg-white"
            style={{
              boxShadow: "4px 8px 15px 0px #BDBDBD30",
            }}
          >
            <div className="relative rounded-xl overflow-hidden border-[3px] border-[#9E4718]">
              <img
                src={item.image}
                alt=""
                className="w-full h-[260px] object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <h2 className="absolute bottom-5 right-5 text-white text-[32px] leading-none font-bold">
                {item.city}
              </h2>
            </div>

            <div className="space-y-5 mt-5">
              <p className="text-[#9E4718] text-[14px] font-semibold">
                Branch Name:
                <span className="text-[#A14E1D] font-medium ml-3">
                  {item.branchName}
                </span>
              </p>

              <p className="text-[#9E4718] text-[14px] font-semibold">
                Branch Manager:
                <span className="text-[#A14E1D] font-medium ml-3">
                  {item.manager}
                </span>
              </p>

              <p className="text-[#9E4718] text-[14px] font-semibold">
                Seating Capacity:
                <span className="text-[#A14E1D] font-medium ml-3">
                  {item.capacity}
                </span>
              </p>

              <div className="flex items-end justify-between">
                <p className="text-[#9E4718] text-[14px] font-semibold">
                  Branch Timings:
                  <span className="text-[#A14E1D] font-medium ml-3">
                    {item.timing}
                  </span>
                </p>

                <button
                  onClick={(e) => handleEditBranch(item, e)}
                  className="text-[#9E4718]"
                >
                  <PenSquare size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}

   <CommonModal
  open={viewModal}
  onClose={() =>
    setViewModal(false)
  }
  title="Brach Details"
  maxWidth="max-w-[900px]"
>

  {selectedBranch && (
    <div className="-mx-5 -mb-[21px]">

      <div className="px-5 pb-5">

        <div className="">

          <div>

            <h2 className="text-[#6B2600] text-[20px] font-bold">
              Branch & Menu Images:
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-5">

              <img
                src={selectedBranch.image || "https://via.placeholder.com/1200x800?text=No+Image"}
                alt=""
                className="col-span-1 row-span-2 h-[220px] w-full rounded-xl object-cover"
              />

              <img
                src={selectedBranch.image || "https://via.placeholder.com/600x400?text=No+Image"}
                alt=""
                className="h-[102px] w-full rounded-xl object-cover"
              />

              <img
                src={selectedBranch.image || "https://via.placeholder.com/600x400?text=No+Image"}
                alt=""
                className="h-[102px] w-full rounded-xl object-cover"
              />

              <img
                src={selectedBranch.image || "https://via.placeholder.com/600x400?text=No+Image"}
                alt=""
                className="h-[102px] w-full rounded-xl object-cover"
              />

              <div className="relative h-[102px] rounded-xl overflow-hidden">

                <img
                  src={selectedBranch.image || "https://via.placeholder.com/600x400?text=No+Image"}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45 flex items-center justify-center">

                  <p className="text-white text-[18px] font-bold">
                    4+ More
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="pt-14">

            <div className="grid grid-cols-[210px_1fr_40px] gap-y-9 items-start">

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Branch Name:
              </h3>

              <p className="text-[#C86F40] text-[18px] leading-[38px]">
                The Salt Cafe,
                Sector-104 Noida
              </p>

              <button
                className="text-[#9E4718] mt-1"
                onClick={() => {
                  setViewModal(false);
                  handleEditBranch(selectedBranch);
                }}
              >
                <PenSquare size={28} />
              </button>

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Branch Address:
              </h3>

              <p className="text-[#C86F40] text-[18px] leading-[38px]">
                43 Subash Lane, near
                Shakthi Peeth sector
                104 , Noida - New Delhi
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Branch Manager:
              </h3>

              <p className="text-[#C86F40] text-[18px]">
                Rohith Genny
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Seating Capacity:
              </h3>

              <p className="text-[#C86F40] text-[18px]">
                230
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Branch Timings:
              </h3>

              <p className="text-[#C86F40] text-[18px]">
                10:00 AM to 11:00PM
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Food Type:
              </h3>

              <p className="text-[#C86F40] text-[18px]">
                Veg & Non-Veg
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold">
                Cuisine Type:
              </h3>

              <p className="text-[#C86F40] text-[18px]">
                Both
              </p>

              <div />

              <h3 className="text-[#6B2600] text-[18px] font-bold leading-[36px]">
                Buffet Option
                Available:
              </h3>

              <p className="text-[#C86F40] text-[18px] mt-1">
                Yes
              </p>

              <div />

            </div>

          </div>

        </div>

      </div>

      <div className="h-[60px] bg-[#C86F40] flex items-center justify-center sticky -bottom-[21px]">

        <p className="text-white text-[20px] font-bold">
          Tables Already Reserved:
          15
        </p>

      </div>

    </div>
  )}

</CommonModal>
      </div>
    </div>
  );
}
