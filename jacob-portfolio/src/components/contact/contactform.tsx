export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border border-gray-300 rounded-md p-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border border-gray-300 rounded-md p-2"
      />
      <textarea
        placeholder="Your Message"
        className="border border-gray-300 rounded-md p-2 h-32"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
}
