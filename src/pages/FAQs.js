import {
  CirclePlus,
  Pencil,
  Trash2
} from "lucide-react";
import { useState } from "react";

import CommonModal from "../components/CommonModal";
import SuccessModal from "../components/SuccessModal";

const initialFaqs = [
  {
    id: 1,
    question:
      "How do I place an online order for delivery?",
    answer:
      "Browse our menu, add your favorite items to the cart, choose your Branch, and complete the payment — all from the app. Your order will be prepared and delivered as soon as possible.",
  },
  {
    id: 2,
    question:
      "What payment methods do you accept?",
    answer:
      "We accept UPI, credit/debit cards, net banking, and wallet payments. All payments are secured via trusted third-party gateways.",
  },
  {
    id: 3,
    question:
      "Do you offer vegetarian and non-vegetarian options?",
    answer:
      "Yes! We proudly serve both veg and non-veg dishes. Our menu clearly marks each item so you can make your choice confidently.",
  },
  {
    id: 4,
    question: "Any question",
    answer:
      "All the answer related to question seen here",
  },
];

export default function FAQs() {
  const [faqs, setFaqs] = useState(initialFaqs);

  const [openModal, setOpenModal] =
    useState(false);

  const [successModal, setSuccessModal] =
    useState(false);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const handleDelete = (id) => {
    setFaqs((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setFormData({
      question: item.question,
      answer: item.answer,
    });

    setOpenModal(true);
  };

  const handleAdd = () => {
    const newFaq = {
      id: Date.now(),
      question: formData.question,
      answer: formData.answer,
    };

    setFaqs((prev) => [
      ...prev,
      newFaq,
    ]);

    setOpenModal(false);
    setSuccessModal(true);

    setFormData({
      question: "",
      answer: "",
    });
  };

  const handleUpdate = () => {
    setFaqs((prev) =>
      prev.map((item) =>
        item.id === editId
          ? {
              ...item,
              question:
                formData.question,
              answer: formData.answer,
            }
          : item
      )
    );

    setOpenModal(false);
    setSuccessModal(true);

    setEditId(null);

    setFormData({
      question: "",
      answer: "",
    });
  };

  return (
    <div>

      <div className="flex items-center justify-between gap-5 flex-wrap">

        <h1 className="text-[22px] font-semibold text-black">
          FAQ's
        </h1>

        <button
          onClick={() => {
            setEditId(null);

            setFormData({
              question: "",
              answer: "",
            });

            setOpenModal(true);
          }}
          className="h-12 px-5 rounded-lg border border-[#CFCFCF] flex items-center gap-3 text-[#C86F40] text-[16px] font-semibold bg-white"
          style={{
            boxShadow:
              "4px 8px 15px 0px #BDBDBD30",
          }}
        >
          <CirclePlus size={18} />
          Add A New FAQ
        </button>

      </div>

      <div className="space-y-5 mt-5">

        {faqs.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-5"
            style={{
              boxShadow:
                "4px 8px 15px 0px #BDBDBD30",
            }}
          >

            <div className="flex items-start justify-between gap-5">

              <div className="flex-1">

                <h2 className="text-[18px] font-semibold text-black">
                  {index + 1}.{" "}
                  {item.question}
                </h2>

                <p className="text-[#B0B0B0] text-[16px] leading-8 mt-3">
                  {item.answer}
                </p>

              </div>

              <div className="flex items-center gap-5">

                <button
                  onClick={() =>
                    handleEdit(item)
                  }
                  className="text-[#9A9A9A]"
                >
                  <Pencil size={24} />
                </button>

                <button
                  onClick={() =>
                    handleDelete(item.id)
                  }
                  className="text-[#FF4B5C]"
                >
                  <Trash2 size={24} />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      <CommonModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        title={
          editId
            ? "Edit FAQ"
            : "Add New FAQ"
        }
      >

        <div className="space-y-8">

          <div>

            <label className="text-[#C86F40] text-[16px] font-medium">
              FAQ Question
            </label>

            <input
              placeholder="Your Question here"
              value={formData.question}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  question:
                    e.target.value,
                })
              }
              className="w-full h-14 rounded-xl bg-[#F5F5F5] px-5 mt-3 outline-none text-[16px]"
            />

          </div>

          <div>

            <label className="text-[#C86F40] text-[16px] font-medium">
              Answer to your FAQ Question
            </label>

            <textarea
              placeholder="Answer here"
              value={formData.answer}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  answer:
                    e.target.value,
                })
              }
              className="w-full h-56 rounded-xl bg-[#F5F5F5] p-5 mt-3 outline-none text-[16px] resize-none"
            />

          </div>

          <div className="flex justify-center">

            <button
              onClick={
                editId
                  ? handleUpdate
                  : handleAdd
              }
              className="h-14 px-24 rounded-lg bg-[#C86F40] text-white text-[20px] font-semibold"
            >
              {editId
                ? "Save Changes"
                : "Add"}
            </button>

          </div>

        </div>

      </CommonModal>

      <SuccessModal
        open={successModal}
        onClose={() =>
          setSuccessModal(false)
        }
        title={
          editId
            ? "FAQ Successfully Updated"
            : "FAQ Successfully Added"
        }
      />

    </div>
  );
}