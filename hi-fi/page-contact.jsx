// Contact page — form + kennel info, with field validation states

const selectArrow = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%237a7a7a' stroke-width='1.5' d='M1 1l5 5 5-5'/></svg>")`;

const ContactPage = ({ preselectDog }) => {
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', dog: preselectDog || '', message: '',
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please add a short message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const update = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  return (
    <main className="page-enter">
      {/* header */}
      <section style={{ background: 'white', padding: '64px 0 32px', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 10 }}>
            <span>Home</span>
            <span style={{ margin: '0 8px', color: 'var(--ink-4)' }}>/</span>
            <span>Contact</span>
          </div>
          <SectionHead
            eyebrow="Say hello"
            title="We'd love to hear from you."
            lede="Whether you're interested in a puppy, planning a show home, or just have questions about the breed, send us a message. We read and answer every one."
          />
        </div>
      </section>

      {/* form + info */}
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'flex-start' }}>
          {/* FORM */}
          <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: 36, boxShadow: 'var(--sh-2)' }}>
            {submitted ? (
              <SubmittedState dog={form.dog} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-form-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="Your name" required>
                    <input
                      style={{ ...inputStyle, borderColor: errors.name ? '#C24A3A' : 'var(--line)' }}
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span style={{ fontSize: 12, color: '#C24A3A', marginTop: 4 }}>{errors.name}</span>}
                  </Field>
                  <Field label="Email" required>
                    <input
                      style={{ ...inputStyle, borderColor: errors.email ? '#C24A3A' : 'var(--line)' }}
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span style={{ fontSize: 12, color: '#C24A3A', marginTop: 4 }}>{errors.email}</span>}
                  </Field>
                </div>

                <div style={{ height: 18 }} />
                <div className="contact-form-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="Phone (optional)">
                    <input style={inputStyle} type="tel" value={form.phone} onChange={update('phone')} placeholder="(555) 123-4567" />
                  </Field>
                  <Field label="Which dog are you interested in?">
                    <select style={{ ...inputStyle, appearance: 'none', backgroundImage: selectArrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }} value={form.dog} onChange={update('dog')}>
                      <option value="">No preference yet</option>
                      <option value="waitlist">Future litter / waitlist</option>
                      {DOGS.map(d => <option key={d.id} value={d.id}>{d.name} — {d.status}</option>)}
                    </select>
                  </Field>
                </div>

                <div style={{ height: 18 }} />
                <Field label="Your message" required hint={`${form.message.length} / 1000`}>
                  <textarea
                    style={{ ...inputStyle, minHeight: 160, resize: 'vertical', fontFamily: 'var(--sans)', borderColor: errors.message ? '#C24A3A' : 'var(--line)' }}
                    maxLength={1000}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your home, your experience with the breed, and what you're hoping for in your next companion."
                  />
                  {errors.message && <span style={{ fontSize: 12, color: '#C24A3A', marginTop: 4 }}>{errors.message}</span>}
                </Field>

                {/* honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: -9999, width: 1, height: 1 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send inquiry <Icon name="arrow" />
                  </button>
                  <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                    We read and answer every message ourselves.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* INFO */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: 'var(--navy)', color: 'white', borderRadius: 'var(--r-lg)', padding: 32 }}>
              <div className="eyebrow" style={{ color: 'var(--gold)' }}>The kennel</div>
              <h3 style={{ color: 'white', marginTop: 8 }}>The Farley Family</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 6, fontSize: 14 }}>
                Farley Farm · visits by appointment only.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
                {[
                  { icon: 'mail', label: 'hosanna-ah@outlook.com', href: 'mailto:hosanna-ah@outlook.com' },
                  { icon: 'pin', label: 'Farley Farm · by appointment' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.92)' }}>
                    <span style={{ width: 36, height: 36, borderRadius: 99, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      <Icon name={c.icon} size={16} />
                    </span>
                    <span style={{ fontSize: 15 }}>{c.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: 0, boxShadow: 'var(--sh-1)', overflow: 'hidden' }}>
              <Photo label="the kennel · porch" tone="warm" ratio="4 / 3" style={{ borderRadius: 0 }} />
              <div style={{ padding: 22 }}>
                <div className="eyebrow">Visiting</div>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.6 }}>
                  We're glad to have serious inquirers meet our dogs in person. Visits are arranged by email beforehand.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const SubmittedState = ({ dog }) => (
  <div style={{ padding: '48px 24px', textAlign: 'center' }}>
    <div style={{ width: 72, height: 72, borderRadius: 99, background: '#EAF4EC', color: '#2C6E3D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
      <Icon name="check" size={32} strokeWidth={2.2} />
    </div>
    <h2 style={{ fontFamily: 'var(--serif)' }}>Your message has been sent.</h2>
    <p className="lede" style={{ marginTop: 12, maxWidth: 440, margin: '12px auto 0' }}>
      Thanks for reaching out{dog ? ` about ${DOGS.find(d => d.id === dog)?.name || 'our dogs'}` : ''}. We read and answer every message ourselves, so we'll be in touch soon.
    </p>
  </div>
);

window.ContactPage = ContactPage;
