import { useState } from "react";
import send_icon from '../../assets/send-icon.png'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfe61210-826e-4018-b1e2-d6c65ebb39c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact h-[100%] py-4 flex flex-col items-center justify-center gap-8">
      <h1 className="md:w-[50vw] text-center leading-loose text-stone-600">
        {`Don’t let your competitors outshine you. Partner with a frontend web
        developer who is passionate about bringing your ideas to life. Get in
        touch today for a free consultation and let's start building your dream
        website!`}
      </h1>
      <form onSubmit={onSubmit} className="grid md:w-[40vw] gap-4">
        <div className=" grid grid-cols-1 gap-4 md:flex md:place-items-center">
          <div className="w-full">
            <input
              className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
              type="text"
              name="name"
              placeholder="Enter your name ..."
              required
            />
          </div>
          <div className="w-full">
            <input
              className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
              type="email"
              name="email"
              placeholder="Enter your email ..."
              required
            />
          </div>
        </div>
        <div className="md:w-[40vw]">
          <textarea
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400 focus:outline-none focus:shadow-lg"
            name="text area"
            id=""
            cols="30"
            rows="3"
            placeholder="Your message ..."
            required
          ></textarea>
        </div>
        <div className="flex items-start">
          <button
            type="submit"
            className="px-6 py-2 flex items-center justify-center gap-3 cursor-pointer bg-slate-50 text-stone-600 ring-1 ring-neutral-400 rounded-full"
          >
            Submit <img className="w-5" src={send_icon} alt="send-icon" />
          </button>
        </div>
      </form>

      <span className="mt-8 font-semibold text-lightFontText dark:dark:text-darkFontText text-left">
        {result}
      </span>
    </div>
  );
}

export default Contact
