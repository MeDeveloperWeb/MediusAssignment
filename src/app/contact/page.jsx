export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center p-8 border-solid border-4">
        Contact Us
      </h1>
      <div className="mx-auto my-16 w-[90vw] md:w-[70vw] lg:w-[60vw] space-y-4">
        <input
          type="text"
          className="card w-full p-4"
          placeholder="Enter Message Title"
        />
        <textarea
          className="w-full card p-4"
          placeholder="Enter Message Description"
        ></textarea>
        <div className="text-center">
          <button className="px-4 py-2 rounded-sm mx-auto my-0 bg-green-500 text-white">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
