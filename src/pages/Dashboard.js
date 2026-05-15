
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const stats = [
  { label: "Orders", value: 230, change: "+120" },
  { label: "Reservations", value: 25, change: "+20" },
  { label: "Branches", value: 3, change: "+2" },
];

const users = [
  { name: "Jakob John", date: "12/05/2025", email: "example@gmail.com", id: "UC1478239" },
  { name: "Jaxson Mango", date: "10/05/2025", email: "example@gmail.com", id: "UC1478239" },
  { name: "Martin Dias", date: "08/05/2025", email: "example@gmail.com", id: "UB1478536" },
  { name: "Lincoln Calzoni", date: "06/05/2025", email: "example@gmail.com", id: "UB1478536" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f2ed]">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="px-8 py-8 h-[calc(100vh-85px)] overflow-auto">
            <div className="grid gap-6">
              <div className="grid xl:grid-cols-[1.8fr_1fr] gap-6">
                <section className="rounded-[2rem] bg-gradient-to-r from-[#f7d4b7] to-[#fcc291] p-8 text-slate-900 shadow-sm">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-700">Total Users</p>
                      <h2 className="mt-4 text-5xl font-bold">360</h2>
                    </div>
                    <div className="rounded-3xl bg-white/70 p-4 text-slate-700 shadow-sm">
                      <span className="text-sm font-medium">Growth</span>
                      <p className="mt-2 text-2xl font-semibold text-[#B34B11]">+18%</p>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                      <p className="text-sm text-slate-500">New Users</p>
                      <p className="mt-3 text-2xl font-bold">50</p>
                      <span className="text-xs text-[#c33b1f]">51%</span>
                    </div>
                    <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Old Users</p>
                      <p className="mt-3 text-2xl font-bold">310</p>
                      <span className="text-xs text-[#087f45]">20%</span>
                    </div>
                  </div>
                </section>

                <section className="rounded-[2rem] bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Sales Per Branch</p>
                      <h2 className="mt-2 text-xl font-semibold text-slate-900">Branch performance</h2>
                    </div>
                    <div className="rounded-3xl bg-[#f7e2d7] px-4 py-2 text-sm font-medium text-[#b45a26]">
                      This year
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="grid grid-cols-4 gap-3 h-40 items-end">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-14 w-full rounded-full bg-[#b16d2a]" />
                        <span className="text-xs text-slate-500">Noida</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-28 w-full rounded-full bg-[#f49a4f]" />
                        <span className="text-xs text-slate-500">Agra</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-24 w-full rounded-full bg-[#57a6d9]" />
                        <span className="text-xs text-slate-500">Delhi</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-32 w-full rounded-full bg-[#f0c27b]" />
                        <span className="text-xs text-slate-500">2025</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-4 text-3xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-2 text-sm text-[#c14c2f]">{item.change}</p>
                  </div>
                ))}
              </div>

              <section className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#C86F40]">New Users</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Recent signups</h2>
                  </div>
                  <button className="rounded-full border border-[#C86F40] px-4 py-2 text-sm font-semibold text-[#C86F40] hover:bg-[#fef1e8]">
                    View all
                  </button>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
                  <div className="bg-[#fdf6f1] px-6 py-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                    <div className="grid grid-cols-4 gap-6">
                      <span>Name</span>
                      <span>Date In</span>
                      <span>Email</span>
                      <span>User ID</span>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-200 bg-white">
                    {users.map((user) => (
                      <div key={user.id + user.name} className="grid grid-cols-4 gap-6 px-6 py-4 text-sm text-slate-700 hover:bg-slate-50">
                        <span>{user.name}</span>
                        <span>{user.date}</span>
                        <span>{user.email}</span>
                        <span className="font-medium text-slate-900">{user.id}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
