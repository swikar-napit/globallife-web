import { useState } from "react";
import './Contact.css'

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    lines: ["Global Life School, Kamalbinayak", "Bhaktapur, Nepal"],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
    label: "Phone Numbers",
    lines: ["01-6620200", "01-6612925"],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    lines: ["globallifesch@gmail.com"],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office Hours",
    lines: ["Sun – Fri: 9:00 AM – 5:00 PM", "Saturday: Closed"],
  },
];

const enquiryTypes = [
  "Select a topic",
  "Admissions Enquiry",
  "Academic Information",
  "Fee & Scholarships",
  "Boarding & Hostel",
  "Events & Activities",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    studentName: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^(97|98)\d{8}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Use 10 digits starting with 97 or 98.";
    if (!form.enquiryType || form.enquiryType === "Select a topic")
      e.enquiryType = "Please select an enquiry type.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  return (
    <>

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-dots">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="contact-hero-dot" />
          ))}
        </div>
        <div className="contact-hero-content">
          <nav className="contact-breadcrumb">
            <a href="/">Home</a>
            <div className="contact-breadcrumb-sep" />
            <span>Contact</span>
          </nav>
          <h1 className="contact-hero-title">
            Get in <span className="contact-hero-title-accent">Touch</span>
          </h1>
          <p className="contact-hero-sub">
            Reach out for admissions enquiries, academic information, or to
            arrange a visit to Global Life School in Bhaktapur.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="contact-body">

        {/* LEFT — Contact Details */}
        <aside className="contact-details-wrap">
          <p className="contact-section-label">Contact Details</p>
          <h2 className="contact-details-heading">
            <em>Reach</em> us
          </h2>
          <p className="contact-details-sub">
            We're happy to answer your questions about admissions, boarding,
            academics, or anything else. Come find us in Bhaktapur.
          </p>

          <div className="contact-detail-items">
            {contactDetails.map((item) => (
              <div key={item.label} className="contact-detail-item">
                <div className="contact-detail-icon">{item.icon}</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">{item.label}</div>
                  <div className="contact-detail-value">
                    {item.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder — swap for a real <iframe> */}
          <div className="contact-map">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Kamalbinayak, Bhaktapur
          </div>
        </aside>

        {/* RIGHT — Form */}
        <div className="contact-form-wrap">
          <p className="contact-section-label">Send a Message</p>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="contact-success-title">Message Sent!</div>
              <p className="contact-success-msg">
                Thank you for reaching out. Our team will get back to you
                within 24 hours. For urgent matters, please call us directly.
              </p>
              <button className="contact-success-back" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="contact-form-heading">
                Let's <em>talk</em>
              </h2>
              <p className="contact-form-sub">
                Fill in the form below and we'll get back to you within 24 hours.
                For urgent enquiries, please call us directly.
              </p>

              <div className="contact-form-grid">
                {/* Full Name */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    className={`contact-form-input${errors.fullName ? " error" : ""}`}
                    name="fullName"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <span className="contact-field-error">{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Email Address <span className="opt">(optional)</span>
                  </label>
                  <input
                    className={`contact-form-input${errors.email ? " error" : ""}`}
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="contact-field-error">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    className={`contact-form-input${errors.phone ? " error" : ""}`}
                    name="phone"
                    placeholder="98XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone
                    ? <span className="contact-field-error">{errors.phone}</span>
                    : <span className="contact-field-hint">Use 10 digits, starting with 97 or 98.</span>
                  }
                </div>

                {/* Enquiry Type */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Enquiry Type <span className="req">*</span>
                  </label>
                  <select
                    className={`contact-form-select${errors.enquiryType ? " error" : ""}`}
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t === "Select a topic" ? "" : t} disabled={t === "Select a topic"}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryType && <span className="contact-field-error">{errors.enquiryType}</span>}
                </div>

                {/* Student Name */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Student Name <span className="opt">(if applicable)</span>
                  </label>
                  <input
                    className="contact-form-input"
                    name="studentName"
                    placeholder="Student's full name"
                    value={form.studentName}
                    onChange={handleChange}
                  />
                </div>

                {/* Grade */}
                <div className="contact-form-group">
                  <label className="contact-form-label">
                    Grade / Class <span className="opt">(if applicable)</span>
                  </label>
                  <input
                    className="contact-form-input"
                    name="grade"
                    placeholder="e.g. Grade 8"
                    value={form.grade || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="contact-form-group full">
                  <label className="contact-form-label">
                    Your Message <span className="req">*</span>
                  </label>
                  <textarea
                    className={`contact-form-textarea${errors.message ? " error" : ""}`}
                    name="message"
                    placeholder="Write your message here…"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="contact-field-error">{errors.message}</span>}
                </div>
              </div>

              <div className="contact-form-footer">
                <p className="contact-form-note">
                  We typically respond within one business day. Your information
                  is kept strictly confidential.
                </p>
                <button className="contact-submit-btn" onClick={handleSubmit}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}