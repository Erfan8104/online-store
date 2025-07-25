"use client";

import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"; // Importing icons for better UI

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              تماس با ما
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
              <Phone className="h-4 w-4 ml-2 text-blue-500" />
              <span>۰۹۱۲۳۴۵۶۷۸۹</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              <Mail className="h-4 w-4 ml-2 text-blue-500" />
              <span>info@onlinestore.ir</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              لینک‌های سریع
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  سوالات متداول
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  سیاست حفظ حریم خصوصی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  شرایط و ضوابط
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              ما را دنبال کنید
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {" "}
              {/* Added rtl:space-x-reverse for right-to-left languages */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              خبرنامه
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center md:text-right">
              برای دریافت آخرین اخبار و تخفیف‌ها، ایمیل خود را وارد کنید.
            </p>
            <form className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  aria-label="ایمیل شما"
                  className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md"
                >
                  عضویت
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© ۱۴۰۳ فروشگاه آنلاین - همه حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
