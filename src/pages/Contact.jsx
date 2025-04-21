import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    website: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSen9d34s2KgJ6snuPBAd1evqF4ZEyhHoRB202gC9u_PccUznA/formResponse";
    const formBody = new URLSearchParams({
      "entry.472514271": formData.firstName,
      "entry.639128051": formData.lastName,
      "entry.120708233": formData.phone,
      "entry.1546601684": formData.email,
      "entry.822973708": formData.website,
      "entry.1511064716": formData.message,
      "entry.1894014265": formData.agree ? "Agreed" : "",
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    }).then(() => {
      alert("Form submitted successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        website: '',
        message: '',
        agree: false,
      });
    });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-40 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in touch</h2>
          <p className="text-gray-400 mb-6">
            Let our team of specialists understand your requirement and get back to you with a relevant solution
          </p>
          <ul className="space-y-3 text-gray-300">
            {[
              "Detecting social trends by industry",
              "Content insights for brands to build marketing strategies",
              "Product discovery led by Social Trends",
              "Visual and text scanning of all online media",
              "Identifying trend names and content volume",
              "Detecting top trends based on volume & % change",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#14A1F0] text-xl">✔</span> {text}
              </li>
            ))}
          </ul>

          {/* <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4 text-[#686DF7]">TRUSTED BY BRANDS</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 grayscale hover:grayscale-0 transition duration-300">
              {["fav icon", "fav icon", "fav icon", "fav icon", "fav icon"].map((brand, i) => (
                <img key={i} src={`./brands/${brand}.svg`} alt={brand} className="h-24" />
              ))}
            </div>
          </div> */}
        </div>

        {/* Right Form */}
        <div className="bg-[#121212] p-8 rounded-xl shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Company Website" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required className="w-full p-3 rounded-md bg-[#1e1e1e] text-white" />
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required className="accent-[#686DF7]" />
              I agree to the Terms and Conditions
            </label>
            <p className="text-xs text-gray-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#686DF7] to-[#14A1F0] rounded-md text-white font-semibold hover:opacity-90 transition">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
