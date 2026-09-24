
// import React from "react";
// import {
//   Zap,
//   Droplets,
//   ShieldCheck,
//   Clock3,
//   Award,
//   Users,
//   CheckCircle2,
//   Phone,
// } from "lucide-react";

// const About = () => {
//   const features = [
//     {
//       icon: <Zap size={24} />,
//       title: "Expert Electricians",
//       text: "Professional electrical installation, repair and maintenance services.",
//     },
//     {
//       icon: <Droplets size={24} />,
//       title: "Skilled Plumbers",
//       text: "Reliable plumbing solutions for homes, offices and businesses.",
//     },
//     {
//       icon: <Clock3 size={24} />,
//       title: "24/7 Service",
//       text: "Emergency support available whenever you need professional help.",
//     },
//     {
//       icon: <ShieldCheck size={24} />,
//       title: "Safe & Reliable",
//       text: "We focus on safety, quality workmanship and reliable solutions.",
//     },
//   ];

//   return (
//     <main className="bg-white text-gray-900">

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gray-950">
//         <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
//         <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
//               <Zap size={17} />
//               About Our Company
//             </div>

//             <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
//               Professional
//               <span className="text-yellow-400"> Electrical </span>
//               &
//               <span className="text-blue-400"> Plumbing </span>
//               Services
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
//               We provide trusted electrician and plumbing services with a
//               strong focus on quality, safety and customer satisfaction.
//               Whether it is a small repair or a major installation, our
//               experienced team is ready to help.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <a
//                 href="tel:+923001234567"
//                 className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-black transition hover:bg-yellow-300"
//               >
//                 <Phone size={19} />
//                 Call Us Now
//               </a>

//               <a
//                 href="/services"
//                 className="rounded-xl border border-gray-700 px-6 py-3.5 font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
//               >
//                 Our Services
//               </a>
//             </div>
//           </div>

//           {/* Stats Card */}
//           <div className="relative">
//             <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">

//               <div className="grid grid-cols-2 gap-4">

//                 <div className="rounded-2xl bg-white p-6">
//                   <Users className="mb-4 text-yellow-500" size={30} />
//                   <h3 className="text-3xl font-extrabold">500+</h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     Happy Customers
//                   </p>
//                 </div>

//                 <div className="rounded-2xl bg-white p-6">
//                   <Award className="mb-4 text-blue-500" size={30} />
//                   <h3 className="text-3xl font-extrabold">10+</h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     Years Experience
//                   </p>
//                 </div>

//                 <div className="rounded-2xl bg-yellow-400 p-6">
//                   <Zap className="mb-4 text-black" size={30} />
//                   <h3 className="text-3xl font-extrabold">100%</h3>
//                   <p className="mt-1 text-sm text-black/70">
//                     Quality Work
//                   </p>
//                 </div>

//                 <div className="rounded-2xl bg-blue-500 p-6 text-white">
//                   <ShieldCheck className="mb-4" size={30} />
//                   <h3 className="text-3xl font-extrabold">24/7</h3>
//                   <p className="mt-1 text-sm text-white/80">
//                     Emergency Support
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Content */}
//       <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

//         <div className="grid items-center gap-14 lg:grid-cols-2">

//           {/* Visual Card */}
//           <div className="relative">
//             <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-xl">
//               <div className="rounded-[22px] bg-gray-950 p-8 sm:p-12">

//                 <div className="grid grid-cols-2 gap-5">

//                   <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-white/10 text-center">
//                     <Zap
//                       size={45}
//                       className="mb-3 text-yellow-400"
//                     />
//                     <h3 className="font-bold text-white">
//                       Electrical
//                     </h3>
//                     <p className="mt-1 text-xs text-gray-400">
//                       Expert Solutions
//                     </p>
//                   </div>

//                   <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-white/10 text-center">
//                     <Droplets
//                       size={45}
//                       className="mb-3 text-blue-400"
//                     />
//                     <h3 className="font-bold text-white">
//                       Plumbing
//                     </h3>
//                     <p className="mt-1 text-xs text-gray-400">
//                       Complete Services
//                     </p>
//                   </div>

//                 </div>

//                 <div className="mt-5 rounded-2xl bg-yellow-400 p-5 text-center">
//                   <p className="text-sm font-bold uppercase tracking-wider text-black">
//                     Safe • Reliable • Professional
//                   </p>
//                 </div>

//               </div>
//             </div>

//             <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
//               <p className="text-3xl font-extrabold text-yellow-500">
//                 10+
//               </p>
//               <p className="text-sm font-semibold text-gray-600">
//                 Years of Experience
//               </p>
//             </div>
//           </div>

//           {/* Text */}
//           <div>
//             <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-yellow-500">
//               Who We Are
//             </p>

//             <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
//               Your Trusted Partner for
//               <span className="text-yellow-500"> Electrical & Plumbing </span>
//               Work
//             </h2>

//             <p className="mt-6 leading-8 text-gray-600">
//               Our team provides professional electrical and plumbing services
//               for residential and commercial customers. We believe in doing
//               every job correctly, safely and efficiently.
//             </p>

//             <p className="mt-4 leading-8 text-gray-600">
//               From electrical wiring and lighting installation to water pipe
//               repairs and plumbing maintenance, our skilled professionals are
//               ready to handle your requirements.
//             </p>

//             <div className="mt-7 space-y-4">
//               {[
//                 "Experienced and trained professionals",
//                 "High-quality tools and materials",
//                 "Transparent and reliable service",
//                 "Customer satisfaction is our priority",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3"
//                 >
//                   <CheckCircle2
//                     size={21}
//                     className="shrink-0 text-green-500"
//                   />
//                   <span className="font-medium text-gray-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Features */}
//       <section className="bg-gray-50 py-20">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">

//           <div className="mx-auto mb-12 max-w-2xl text-center">
//             <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-yellow-500">
//               Why Choose Us
//             </p>

//             <h2 className="text-3xl font-extrabold sm:text-4xl">
//               Quality Service You Can Trust
//             </h2>

//             <p className="mt-4 text-gray-600">
//               We combine professional experience, quality work and reliable
//               customer service to deliver the right solution.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {features.map((feature) => (
//               <div
//                 key={feature.title}
//                 className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//               >
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition group-hover:bg-yellow-400 group-hover:text-black">
//                   {feature.icon}
//                 </div>

//                 <h3 className="text-lg font-bold">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-gray-500">
//                   {feature.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-yellow-400">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 text-center sm:flex-row sm:text-left lg:px-8">
//           <div>
//             <h2 className="text-2xl font-extrabold sm:text-3xl">
//               Need an Electrician or Plumber?
//             </h2>
//             <p className="mt-2 text-sm text-black/70">
//               Contact our professional team today.
//             </p>
//           </div>

//           <a
//             href="tel:+923001234567"
//             className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-7 py-4 font-bold text-white transition hover:bg-gray-800"
//           >
//             <Phone size={19} />
//             Call Now
//           </a>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default About;


import React from "react";
import Navber from "./Navber";
const About = () => {
  return (
    <section className="bg-white ">
        <Navber />
      <div className="mx-auto max-w-6xl px-5 mt-10">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About Us
          </h1>

          <div className="mx-auto mt-3 h-1 w-16 rounded bg-yellow-400"></div>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Professional electrician and plumbing services you can trust.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Image / Icon Box */}
          <div className="flex h-80 items-center justify-center rounded-2xl bg-gray-900">
            <div className="text-center">
              <div className="text-7xl">⚡</div>

              <h2 className="mt-4 text-2xl font-bold text-white">
                ElectricPro
              </h2>

              <p className="mt-2 text-gray-400">
                Electrician & Plumber
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Your Trusted Service Partner
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We provide professional electrical and plumbing services
              for homes, offices and businesses. Our experienced team
              provides safe, reliable and high-quality work.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From electrical repairs and wiring to plumbing installation
              and maintenance, we are here to solve your problems quickly
              and professionally.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✓ Experienced
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Skilled professionals
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✓ Reliable
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Quality service
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✓ Affordable
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fair pricing
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-bold text-gray-900">
                  ✓ 24/7 Support
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Always available
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

