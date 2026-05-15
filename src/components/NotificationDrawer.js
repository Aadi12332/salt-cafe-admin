import { Bell, CheckCheck, Circle, X } from "lucide-react";
import { useMemo, useState } from "react";

const initialNotifications = [
  {
    id: 1,
    title: "New Reservation",
    description: "A new reservation has been made for 4 guests.",
    time: "2 min ago",
    read: false
  },
  {
    id: 2,
    title: "New User Registered",
    description: "John Doe created a new account.",
    time: "10 min ago",
    read: false
  },
  {
    id: 3,
    title: "Order Completed",
    description: "Order #4587 has been completed successfully.",
    time: "30 min ago",
    read: true
  },
  {
    id: 4,
    title: "New Branch Added",
    description: "Salt Cafe Agra branch has been added.",
    time: "45 min ago",
    read: false
  },
  {
    id: 5,
    title: "Payment Received",
    description: "Payment of ₹12,500 received successfully.",
    time: "1 hour ago",
    read: true
  },
  {
    id: 6,
    title: "New Offer Created",
    description: "Weekend Combo Offer has been published.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 7,
    title: "Reservation Cancelled",
    description: "A reservation has been cancelled by the customer.",
    time: "3 hours ago",
    read: true
  },
  {
    id: 8,
    title: "New Review Added",
    description: "A customer added a 5-star review.",
    time: "5 hours ago",
    read: false
  },
  {
    id: 9,
    title: "Password Changed",
    description: "Admin password updated successfully.",
    time: "Yesterday",
    read: true
  },
  {
    id: 10,
    title: "New Staff Joined",
    description: "A new staff member has been added.",
    time: "Yesterday",
    read: false
  },
  {
    id: 11,
    title: "System Maintenance",
    description: "Scheduled maintenance completed successfully.",
    time: "2 days ago",
    read: true
  },
  {
    id: 12,
    title: "Weekly Report Ready",
    description: "Your weekly analytics report is available.",
    time: "2 days ago",
    read: false
  }
];

export default function NotificationDrawer() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const unreadCount = useMemo(() => {
    return notifications.filter((item) => !item.read).length;
  }, [notifications]);

  const handleRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true
      }))
    );
  };

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      >

        <Bell className="h-5 w-5" />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-[#C86F40] text-white text-[10px] flex items-center justify-center">
            {unreadCount}
          </span>
        )}

      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-[480px] bg-white z-50 transition-all duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        style={{
          boxShadow: "-10px 0px 30px rgba(0,0,0,0.08)"
        }}
      >

        <div className="flex items-center justify-between p-5 border-b border-slate-200">

          <h2 className="text-[24px] font-semibold text-[#C86F40]">
            Notifications
          </h2>

          <button onClick={() => setOpen(false)}>
            <X
              size={20}
              className="text-[#8B8B8B]"
            />
          </button>

        </div>

        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">

          <p className="text-sm text-slate-500">
            {unreadCount} unread notifications
          </p>

          {!!notifications.length && (
            <button
              onClick={handleReadAll}
              className="flex items-center gap-2 text-sm font-medium text-[#C86F40]"
            >
              <CheckCheck size={16} />
              Read All
            </button>
          )}

        </div>

        <div className="h-[calc(100vh-150px)] overflow-y-auto scroll-hide">

          {!notifications.length ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-[42px] text-[#A8A8A8] font-light">
                No Notifications
              </p>
            </div>
          ) : (
            <div className="p-5 space-y-4">

              {notifications.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-xl border p-5 transition-all ${
                    item.read
                      ? "bg-white border-slate-200"
                      : "bg-[#FFF8F4] border-[#F2C3A8]"
                  }`}
                  style={{
                    boxShadow:
                      "4px 8px 15px 0px #BDBDBD15"
                  }}
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex gap-3">

                      <div
                        className={`mt-1 ${
                          item.read
                            ? "text-slate-300"
                            : "text-[#C86F40]"
                        }`}
                      >
                        <Circle
                          size={12}
                          fill="currentColor"
                        />
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-slate-800">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-500 mt-1 leading-6">
                          {item.description}
                        </p>

                        <p className="text-xs text-slate-400 mt-3">
                          {item.time}
                        </p>

                      </div>

                    </div>

                    {!item.read && (
                      <button
                        onClick={() =>
                          handleRead(item.id)
                        }
                        className="text-sm font-medium text-[#C86F40] whitespace-nowrap"
                      >
                        Mark Read
                      </button>
                    )}

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

    </div>
  );
}