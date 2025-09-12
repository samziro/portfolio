
const Contact = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div></div>
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
