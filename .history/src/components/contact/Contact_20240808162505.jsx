import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ACCESS_KEY =
  process.env.REACT_APP_ACCESS_KEY || "cfe61210-826e-4018-b1e2-d6c65ebb39c6"; // Use environment variables for sensitive data

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, access_key: ACCESS_KEY }),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact h-full py-4 flex flex-col items-center justify-center gap-8">
      <h1 className="md:w-[50vw] text-center leading-loose text-stone-600">
        {`Don’t let your competitors outshine you. Partner with a frontend web
        developer who is passionate about bringing your ideas to life. Get in
        touch today for a free consultation and let's start building your dream
        website!`}
      </h1>
      <form onSubmit={handleSubmit} className="grid md:w-[40vw] gap-4">
        <div className="grid grid-cols-1 gap-4 md:flex md:place-items-center">
          <div className="w-full">
            <input
              className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name ..."
              required
            />
          </div>
          <div className="w-full">
            <input
              className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email ..."
              required
            />
          </div>
        </div>
        <div className="md:w-[40vw]">
          <textarea
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="3"
            placeholder="Your message ..."
            required
          ></textarea>
        </div>
        <div className="flex items-start">
          <button
            type="submit"
            className="px-6 py-2 flex items-center justify-center gap-3 cursor-pointer bg-slate-50 text-stone-600 ring-1 ring-neutral-400 rounded-full hover:bg-stone-600 hover:text-slate-50 duration-500"
          >
            Submit <FaPaperPlane />
          </button>
        </div>
      </form>

      {result && (
        <span className="mt-8 font-semibold text-lightFontText dark:dark:text-darkFontText text-left">
          {result}
        </span>
      )}
    </div>
  );
};

export default Contact;
