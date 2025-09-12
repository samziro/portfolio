
const Contact = () => {
  return (
    <div className="h-[50dvh] flex flex-col items-center justify-center gap-8">
      <h1 className="md:w-[55vw] text-center leading-loose">
        {`Don’t let your competitors outshine you. Partner with a frontend web
        developer who is passionate about bringing your ideas to life. Get in
        touch today for a free consultation and let's start building your dream
        website!`}
      </h1>
      <div className="grid md:w-[40vw]  md:flex md:place-items-center md:gap-4">
        <div className="w-full">
          <input
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
            type="text"
            placeholder="Enter your name ..."
          />
        </div>
        <div className="w-full">
          <input
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
            type="email"
            placeholder="Enter your email ..."
          />
        </div>
      </div>
      <div className="md:w-[40vw]">
        <textarea
          className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
          name="text area"
          id=""
          cols="30"
          rows="3"
          placeholder="Your message ..."
        ></textarea>
      </div>
      <div ></div>
      <button className="px-6 py-2 cursor-pointer bg-slate-50 ring-1 ring-neutral-400 rounded-full">
        Submit
      </button>
    </div>
  );
}

export default Contact
