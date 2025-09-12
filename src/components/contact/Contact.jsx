import { useState, useCallback } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

// Web3Forms API key from Vite environment
const ACCESS_KEY = "cfe61210-826e-4018-b1e2-d6c65ebb39c6";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formPayload = new FormData(event.target);
    formPayload.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
        event.target.reset(); // reset native form
      } else {
        console.error("Web3Forms Error:", data);
        setResult(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="pb-12 px-4 bg-white text-stone-700">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>

          {/* Hidden botcheck */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full p-2  bg-slate-50 border rounded-md outline-none focus:ring-1 focus:ring-stone-700"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full p-2 bg-slate-50 border rounded-md outline-none focus:ring-1 focus:ring-stone-700"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              placeholder="Your message"
              onChange={handleChange}
              className="w-full p-2 bg-slate-50 border rounded-md outline-none focus:ring-1 focus:ring-stone-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={result === "Sending..."}
            className={`w-24 flex items-center justify-center gap-3 py-2 px-4 rounded-full transition duration-300 ${
              result === "Sending..."
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-stone-700 text-white hover:bg-stone-600"
            }`}
            type="submit"
          >
            {result === "Sending..." ? (
              "Sending..."
            ) : (
              <span className="flex items-center gap-2">
                Send <FaPaperPlane />
              </span>
            )}
          </motion.button>

          {result && (
            <p
              className={`text-sm font-medium mt-2 ${
                result.includes("Success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>

        {/* Google Map */}
        <div className="rounded-md overflow-hidden shadow">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d308.8904171892419!2d40.01155838842664!3d-3.3563738574350284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjEnMjMuOSJTIDQwwrAwMCc0MS4xIkU!5e0!3m2!1sen!2ske!4v1749884065667!5m2!1sen!2ske"
            className="w-full h-[250px] md:h-[330px] lg:h-[400px]'"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
