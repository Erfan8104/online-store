"use client";

import { userData } from "@/data/mockData";

export default function AccountPage() {
  const { profile, orders } = userData;

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        حساب کاربری
      </h1>

      {/* اطلاعات کاربر */}
      <section className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">اطلاعات کاربر</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
          <p>
            <span className="font-semibold text-gray-900">👤 نام:</span>{" "}
            {profile.name}
          </p>
          <p>
            <span className="font-semibold text-gray-900">📧 ایمیل:</span>{" "}
            {profile.email}
          </p>
          <p>
            <span className="font-semibold text-gray-900">📱 شماره:</span>{" "}
            {profile.phone}
          </p>
          <p>
            <span className="font-semibold text-gray-900">🏠 آدرس:</span>{" "}
            {profile.address}
          </p>
        </div>
      </section>

      {/* سفارشات */}
      <section className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">سفارشات من</h2>
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-indigo-50 to-white"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4 text-gray-800">
                <div className="space-y-1">
                  <p>
                    <span className="font-semibold">🧾 کد سفارش:</span>{" "}
                    {order.id}
                  </p>
                  <p>
                    <span className="font-semibold">📅 تاریخ:</span>{" "}
                    {order.date}
                  </p>
                </div>
                <div className="space-y-1 text-right sm:text-left">
                  <p>
                    <span className="font-semibold">📦 وضعیت:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-sm font-semibold ${
                        order.status.includes("تحویل")
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">💰 مبلغ کل:</span>{" "}
                    {order.total.toLocaleString()} تومان
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-700 mb-2">🛒 محصولات:</p>
                <ul className="list-disc pr-5 space-y-1 text-gray-600">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} (تعداد: {item.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
