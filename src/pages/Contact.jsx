import { useState } from "react";
import "./Contact.css";

const infoCards = [
  {
    label: "Find Us",
    heading: "Our Location",
    value: ["Global Life School", "Kamalbinayak, Bhaktapur", "Nepal"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "Call Us",
    heading: "Phone Numbers",
    value: ["01-6612925", "01-6620200"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Email Us",
    heading: "Email Address",
    value: ["info@globallifeschool.edu.np"],
    link: "mailto:info@globallifeschool.edu.np",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const hours = [
  { day: "Sunday – Friday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "Closed", open: false },
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

// Replace this with your own Formspree endpoint ID (from formspree.io → your form → "Endpoint")
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqrlkpa";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    enquiryType: "", studentName: "", grade: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Please type a valid email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please type a valid email.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^(97|98)\d{8}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Use 10 digits starting with 97 or 98.";
    if (!form.enquiryType || form.enquiryType === "Select a topic")
      e.enquiryType = "Please select an enquiry type.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: undefined }));
    setSendError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    setSendError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          enquiryType: form.enquiryType,
          studentName: form.studentName,
          grade: form.grade,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          fullName: "", email: "", phone: "",
          enquiryType: "", studentName: "", grade: "", message: "",
        });
      } else {
        const data = await res.json().catch(() => null);
        setSendError(
          data?.errors?.map((er) => er.message).join(" ") ||
          "Something went wrong sending your message. Please try again."
        );
      }
    } catch {
      setSendError("Couldn't connect. Please check your internet and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="ct-hero">
        <div className="ct-hero-grid" />
        <div className="ct-hero-glow" />
        <div className="ct-hero-content">
          <nav className="ct-breadcrumb">
            <a href="/">Home</a>
            <div className="ct-breadcrumb-sep" />
            <span className="ct-breadcrumb-current">Contact</span>
          </nav>
          <span className="ct-hero-eyebrow">
            <span className="ct-hero-eyebrow-dot" />
            We'd love to hear from you
          </span>
          <h1 className="ct-hero-title">
            Let's Start a <em>Conversation</em>
          </h1>
          <p className="ct-hero-sub">
            Whether you're a parent exploring admissions, a student with questions,
            or a community member — our doors and inboxes are always open.
          </p>
        </div>
      </section>

      <section className="ct-cards-section">
        <div className="ct-cards-inner">
          {infoCards.map((card) => (
            <div key={card.label} className="ct-info-card">
              <div className="ct-info-card-top">
                <div className="ct-info-card-icon">{card.icon}</div>
                <span className="ct-info-card-eyebrow">{card.label}</span>
              </div>
              <h3 className="ct-info-card-heading">{card.heading}</h3>
              <div className="ct-info-card-value">
                {card.link ? (
                  <a href={card.link}>{card.value[0]}</a>
                ) : (
                  card.value.map((line, i) => (
                    <span key={i}>{line}{i < card.value.length - 1 && <br />}</span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ct-body">
        <div className="ct-body-inner">

          {/* FORM */}
          <div className="ct-form-card">
            <p className="ct-form-eyebrow">Send a Message</p>

            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-ring">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="ct-success-title">Message Received!</div>
                <p className="ct-success-msg">
                  Thank you for reaching out to Global Life School. Our team will
                  respond within one business day. For urgent matters, please call us directly.
                </p>
                <button className="ct-success-back" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="ct-form-heading">Write to <em>us</em></h2>
                <p className="ct-form-sub">
                  Fill in the details below and we'll get back to you within 24 hours.
                </p>
                <form className="ct-form-grid" onSubmit={handleSubmit} noValidate>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Full Name <span className="req">*</span></label>
                    <input className={`ct-input${errors.fullName ? " err" : ""}`} name="fullName"
                      placeholder="Your full name" value={form.fullName} onChange={handleChange} />
                    {errors.fullName && <span className="ct-field-err">{errors.fullName}</span>}
                  </div>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Email Address <span className="req">*</span></label>
                    <input className={`ct-input${errors.email ? " err" : ""}`} name="email"
                      type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="ct-field-err">{errors.email}</span>}
                  </div>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Phone Number <span className="req">*</span></label>
                    <input className={`ct-input${errors.phone ? " err" : ""}`} name="phone"
                      placeholder="98XXXXXXXX" value={form.phone} onChange={handleChange} />
                    {errors.phone
                      ? <span className="ct-field-err">{errors.phone}</span>
                      : <span className="ct-field-hint">10 digits starting with 97 or 98</span>}
                  </div>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Enquiry Type <span className="req">*</span></label>
                    <select className={`ct-select${errors.enquiryType ? " err" : ""}`} name="enquiryType"
                      value={form.enquiryType} onChange={handleChange}>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t === "Select a topic" ? "" : t} disabled={t === "Select a topic"}>{t}</option>
                      ))}
                    </select>
                    {errors.enquiryType && <span className="ct-field-err">{errors.enquiryType}</span>}
                  </div>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Student Name <span className="opt">(if applicable)</span></label>
                    <input className="ct-input" name="studentName"
                      placeholder="Student's full name" value={form.studentName} onChange={handleChange} />
                  </div>

                  <div className="ct-form-group">
                    <label className="ct-form-label">Grade / Class <span className="opt">(if applicable)</span></label>
                    <input className="ct-input" name="grade"
                      placeholder="e.g. Grade 8" value={form.grade} onChange={handleChange} />
                  </div>

                  <div className="ct-form-group full">
                    <label className="ct-form-label">Your Message <span className="req">*</span></label>
                    <textarea className={`ct-textarea${errors.message ? " err" : ""}`} name="message"
                      placeholder="Write your message here…" value={form.message} onChange={handleChange} />
                    {errors.message && <span className="ct-field-err">{errors.message}</span>}
                  </div>

                  </form>
                {sendError && <p className="ct-field-err ct-form-server-err">{sendError}</p>}
                <div className="ct-form-actions">
                  <p className="ct-form-note">
                    We respond within one business day. Your details are kept confidential.
                  </p>
                  <button className="ct-submit-btn" onClick={handleSubmit} disabled={sending}>
                    {sending ? "Sending…" : "Send Message"}
                    {!sending && (
                      <svg className="btn-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="ct-side">

            {/* Hours */}
            <div className="ct-hours-card">
              <p className="ct-side-eyebrow">Office Hours</p>
              <h3 className="ct-hours-title">When to reach us</h3>
              {hours.map((h) => (
                <div key={h.day} className="ct-hours-row">
                  <span className="ct-hours-day">{h.day}</span>
                  <span className={`ct-hours-time${!h.open ? " closed" : ""}`}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="ct-map-card">
              <iframe
                className="ct-map-embed"
                title="Global Life School Location"
                src="https://www.google.com/maps?q=Global+Life+School,Kamalbinayak,Bhaktapur&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="ct-map-footer">
                <div>
                  <div className="ct-map-name">Global Life School</div>
                  <div className="ct-map-address">Kamalbinayak, Bhaktapur</div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Global+Life+School/@27.6774192,85.4387694,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb053c33a0e25b:0x4a9bd98b38986281!8m2!3d27.6774145!4d85.4413497!16s%2Fg%2F11kb8f1jd6"
                  target="_blank"
                  rel="noreferrer"
                  className="ct-map-link"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Directions
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="ct-social-card">
              <p className="ct-side-eyebrow">Follow Us</p>
              <div className="ct-social-row">
                <a href="https://www.facebook.com/profile.php?id=100035277070893" target="_blank" rel="noreferrer" className="ct-social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
                <a href="mailto:info@globallifeschool.edu.np" className="ct-social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}