
const Contact = () => {
  return (
    <div className="h-full flex flex-col items">
      <div>
        <input className="bg-slate-50 p-2 rounded-md" type="text" placeholder="Enter your name ..." />
      </div>
      <div>
        <input type="email" placeholder="Enter your email ..." />
      </div>
      <div>
        <textarea
          name="text area"
          id=""
          cols="30"
          rows="10"
          placeholder="Your message ..."
        ></textarea>
      </div>
      <button className="px-4 py-2 cursor-pointer bg-slate-50 ring-1 ring-neutral-400 rounded-full">
        Submit
      </button>
    </div>
  );
}

export default Contact
