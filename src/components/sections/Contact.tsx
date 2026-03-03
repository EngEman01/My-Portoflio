
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { EarthCanvas } from "../canvas";
// import { SectionWrapper } from "../../hoc";
// import { slideIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";

// const INITIAL_STATE = Object.fromEntries(
//   Object.keys(config.contact.form).map((input) => [input, ""])
// );

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

// const Contact = () => {
//   const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
//   const [form, setForm] = useState(INITIAL_STATE);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
//   ) => {
//     if (e === undefined) return;
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
//     if (e === undefined) return;
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         emailjsConfig.serviceId,
//         emailjsConfig.templateId,
//         {
//           form_name: form.name,
//           to_name: config.html.fullName,
//           from_email: form.email,
//           to_email: config.html.email,
//           message: form.message,
//         },
//         emailjsConfig.accessToken
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm(INITIAL_STATE);
//         },
//         (error) => {
//           setLoading(false);

//           console.log(error);
//           alert("Something went wrong.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="bg-black-100 flex-[0.75] rounded-2xl p-8"
//       >
//         <Header useMotion={false} {...config.contact} />

//         <form
//           // @ts-expect-error
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           {Object.keys(config.contact.form).map((input) => {
//             const { span, placeholder } =
//               config.contact.form[input as keyof typeof config.contact.form];
//             const Component = input === "message" ? "textarea" : "input";

//             return (
//               <label key={input} className="flex flex-col">
//                 <span className="mb-4 font-medium text-white">{span}</span>
//                 <Component
//                   type={input === "email" ? "email" : "text"}
//                   name={input}
//                   value={form[`${input}`]}
//                   onChange={handleChange}
//                   placeholder={placeholder}
//                   className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
//                   {...(input === "message" && { rows: 7 })}
//                 />
//               </label>
//             );
//           })}
//           <button
//             type="submit"
//             className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name cannot be empty.";
    if (!form.email.trim()) return "Email cannot be empty.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email address.";
    if (!form.message.trim()) return "Message cannot be empty.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus({ success: false, message: error });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      );
      setLoading(false);
      setStatus({ success: true, message: "Thank you! I will get back to you soon." });
      setForm(INITIAL_STATE);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 shadow-lg"
      >
        <Header useMotion={false} {...config.contact} />

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[input]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  rows={input === "message" ? 6 : undefined}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-4 py-3 font-medium text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </label>
            );
          })}

          <button
            type="submit"
            disabled={loading}
            className={`bg-indigo-600 hover:bg-indigo-700 transition w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status && (
            <p
              className={`mt-4 font-medium ${
                status.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </motion.div>

      {/* Canvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");