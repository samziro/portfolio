
const Contact = () => {
  return (
    <div className="h-[80dvh] flex flex-col items-center justify-center gap-4">
      <div className="grid  md:flex md:place-items-center md:gap-8 ">
        <div>
          <input
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
            type="text"
            placeholder="Enter your name ..."
          />
        </div>
        <div>
          <input
            className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
            type="email"
            placeholder="Enter your email ..."
          />
        </div>
      </div>
      <div>
        <textarea
          className="bg-slate-50 p-2 rounded-md w-full ring-1 ring-neutral-400"
          name="text area"
          id=""
          cols="30"
          rows="3"
          placeholder="Your message ..."
        ></textarea>
      </div>
      <button className="px-6 py-2 cursor-pointer bg-slate-50 ring-1 ring-neutral-400 rounded-full">
        Submit
      </button>
    </div>
  );
}

export default Contact
