// Dog profile — editorial full-bleed hero + details + inquiry sidebar

const ProfilePage = ({ dog, onNavigate, onOpenDog }) => {
  const d = dog || DOGS[0];
  const [photoIdx, setPhotoIdx] = React.useState(0);
  const photos = [d.tone, 'cool', 'shaded', 'warm'];

  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <Photo
            key={photoIdx}
            label={`${d.name} · photo ${photoIdx + 1}`}
            tone={photos[photoIdx]}
            ratio="auto"
            style={{ aspectRatio: 'unset', height: 'min(64vh, 620px)', borderRadius: 0 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }} />
          <div className="container" style={{ position: 'absolute', left: 0, right: 0, bottom: 40, color: 'white' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', marginBottom: 10 }}>
              <a onClick={() => onNavigate('dogs')} style={{ cursor: 'pointer' }}>← All available dogs</a>
            </div>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>{d.callName}</div>
            <h1 style={{ color: 'white', marginTop: 6 }}>"{d.name}"</h1>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              <span className={`chip is-status-${d.status.toLowerCase()}`}>{d.status}</span>
              {d.kind === 'show' && <span className="chip is-gold"><Icon name="medal" size={12} /> Show Prospect</span>}
              <span className="chip">AKC Registered</span>
            </div>
          </div>
          {/* photo controls */}
          <div style={{ position: 'absolute', right: 24, top: 24, display: 'flex', gap: 8 }}>
            <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--navy)' }}><Icon name="zoom" size={14} /> Zoom</button>
          </div>
          <div style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)' }}>
            <button className="photo-nav" onClick={() => setPhotoIdx(i => (i - 1 + photos.length) % photos.length)} aria-label="Previous photo"><Icon name="chevL" /></button>
          </div>
          <div style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)' }}>
            <button className="photo-nav" onClick={() => setPhotoIdx(i => (i + 1) % photos.length)} aria-label="Next photo"><Icon name="chevR" /></button>
          </div>
          <div style={{ position: 'absolute', right: 24, bottom: 24, display: 'flex', gap: 6 }}>
            {photos.map((_, i) => (
              <button key={i} onClick={() => setPhotoIdx(i)} aria-label={`Photo ${i + 1}`}
                style={{ width: 32, height: 4, borderRadius: 2, background: i === photoIdx ? 'white' : 'rgba(255,255,255,0.45)', border: 'none', padding: 0, cursor: 'pointer' }} />
            ))}
          </div>
        </div>
        {/* thumbnail strip */}
        <div className="container" style={{ marginTop: -28, position: 'relative', zIndex: 2 }}>
          <div style={{ background: 'white', borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-2)', padding: 10, display: 'flex', gap: 10 }}>
            {photos.map((tone, i) => (
              <button key={i} onClick={() => setPhotoIdx(i)} style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', flex: 1, borderRadius: 'var(--r)', overflow: 'hidden', position: 'relative', outline: i === photoIdx ? `2px solid var(--gold)` : 'none', outlineOffset: -1 }}>
                <Photo label={`${i + 1}`} tone={tone} ratio="4 / 3" style={{ borderRadius: 'var(--r)' }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS + INQUIRY */}
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container profile-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {/* facts */}
            <div className="profile-facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, paddingBottom: 32, borderBottom: '1px solid var(--line)' }}>
              {[
                ['Date of birth', d.dob],
                ['Sex', d.sex],
                ['Color', d.color],
                ['Type', d.kind === 'show' ? 'Show prospect' : 'Pet companion'],
                ['AKC', 'Registered'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{k}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--navy)', marginTop: 6 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* about */}
            <div>
              <SectionHead eyebrow="About this hound" title={`A bit about ${d.name}.`} />
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-2)', marginTop: 18, maxWidth: 620 }}>
                {d.blurb} {d.name} was born and raised in our home and socialized early with people and other animals. Each puppy goes home AKC registered, with a health record, current vaccinations, and a written health guarantee.
              </p>
            </div>

            {/* pedigree */}
            {d.sire && (
              <div>
                <SectionHead eyebrow="Pedigree" title="Sire & Dam" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 22 }}>
                  {[d.sire, d.dam].map((p, i) => (
                    <div key={i} className="card" style={{ padding: 0, cursor: 'default' }}>
                      <Photo label={i === 0 ? 'sire' : 'dam'} tone={p.tone} ratio="4 / 3" style={{ borderRadius: 0 }} />
                      <div style={{ padding: 20 }}>
                        <div className="eyebrow" style={{ color: 'var(--gold-700)' }}>{i === 0 ? 'Sire' : 'Dam'}</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--navy)', marginTop: 6 }}>{p.name}</div>
                        <a style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                          View pedigree <Icon name="arrow" size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* other available */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <SectionHead eyebrow="Litter mates" title="Also from this pairing" />
                <button className="btn btn-quiet" onClick={() => onNavigate('dogs')}>See all <Icon name="arrow" size={14} /></button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 22 }} className="dog-grid">
                {DOGS.filter(x => x.id !== d.id).slice(0, 3).map(x => <DogCard key={x.id} dog={x} onOpen={onOpenDog} />)}
              </div>
            </div>
          </div>

          {/* INQUIRY SIDEBAR */}
          <aside style={{ position: 'sticky', top: 100 }}>
            <InquirySidebar dog={d} />
          </aside>
        </div>
      </section>
    </main>
  );
};

const InquirySidebar = ({ dog }) => {
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  if (sent) {
    return (
      <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: 28, boxShadow: 'var(--sh-2)', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: 99, background: '#EAF4EC', color: '#2C6E3D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Icon name="check" size={26} strokeWidth={2.2} />
        </div>
        <h3 style={{ fontFamily: 'var(--serif)' }}>Thank you.</h3>
        <p style={{ color: 'var(--ink-2)', fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
          We'll be in touch about {dog.name} soon. We read and answer every message ourselves.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: 28, boxShadow: 'var(--sh-2)' }}>
      <div className="eyebrow">Inquire</div>
      <h3 style={{ marginTop: 6 }}>Interested in {dog.name}?</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.55 }}>
        Tell us a little about your home and we'll be in touch.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
        <Field label="Your name" required>
          <input style={inputStyle} value={form.name} onChange={update('name')} placeholder="Jane Doe" />
        </Field>
        <Field label="Email" required hint="We'll only use this to reply.">
          <input style={inputStyle} type="email" value={form.email} onChange={update('email')} placeholder="jane@example.com" />
        </Field>
        <Field label="Phone (optional)">
          <input style={inputStyle} type="tel" value={form.phone} onChange={update('phone')} placeholder="(555) 123-4567" />
        </Field>
        <Field label={`A note about you & ${dog.name}`} hint={`${form.message.length} / 800`}>
          <textarea style={{ ...inputStyle, minHeight: 110, resize: 'vertical', fontFamily: 'var(--sans)' }} maxLength={800} value={form.message} onChange={update('message')} placeholder="What's life at your home like? Other pets? Show plans?" />
        </Field>
        {/* honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: -9999, width: 1, height: 1 }} />
      </div>
      <button
        className="btn btn-primary"
        style={{ width: '100%', marginTop: 18 }}
        onClick={() => setSent(true)}
        disabled={!form.name || !form.email}
      >
        Send inquiry <Icon name="arrow" size={14} />
      </button>
      <p style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, textAlign: 'center' }}>
        We never share your information.
      </p>
    </div>
  );
};

window.ProfilePage = ProfilePage;
