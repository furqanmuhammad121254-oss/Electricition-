
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navber from "../Pages/Navber"

const Contact = () => {
  return (
    <section className="bg-gray-50">
        <Navber />
      <div className="mx-auto max-w-6xl px-5 mt-5">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <div className="mx-auto mt-3 h-1 w-16 rounded bg-yellow-400"></div>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Need an electrician or plumber? Contact us today and
            we will be happy to help.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              We are available for electrical and plumbing services.
              Contact us for reliable and professional work.
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone */}
              <a
                href="tel:+923001234567"
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">
                    +92 300 1234567
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@electricpro.com"
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">
                    info@electricpro.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="font-semibold">
                    Main Market, Your City
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Clock size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Working Hours
                  </p>
                  <p className="font-semibold">
                    Mon - Sun: 24 Hours
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <form className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 px-5 py-3.5 font-bold text-black transition hover:bg-yellow-500"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

