import { Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="mt-10 mb-10">
        {/* 1. Map Section */}
        <h1 className="text-3xl font-bold mb-4 relative">
          Contact Me
          <span className="absolute left-0 -bottom-2 w-12 h-0.75 bg-[#f5c451] rounded"></span>
        </h1>
        <div className="w-full h-87.5 rounded-3xl overflow-hidden border border-[#383838] relative mb-8 mt-9">
          {/* Using a CSS filter (grayscale + invert) to create the 'Dark Mode' map look 
            without needing a custom Google Maps API style.
        */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59715.204879450954!2d76.98432431537886!3d20.70208920160503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73192c32a5df1%3A0xcfa72a91e826b253!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1765713079526!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) invert(92%) contrast(83%)",
            }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* 2. Contact Form Header */}

        {/* 3. The Form */}
        <form className="space-y-6">
          {/* Input Grid (Name & Email) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder-white/50 outline-none focus:border-[#ffdb70] transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder-white/50 outline-none focus:border-[#ffdb70] transition-colors"
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-transparent border border-[#383838] rounded-2xl px-5 py-4 text-white placeholder-white/50 outline-none focus:border-[#ffdb70] transition-colors resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#2b2b2c] text-[#ffdb70] px-6 py-4 rounded-2xl border border-[#383838] hover:bg-[#383838] transition-colors shadow-lg font-medium"
            >
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
