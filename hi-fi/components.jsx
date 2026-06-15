// Shared components for the Hosanna hi-fi prototype.

const Icon = ({ name, size = 18, stroke = 'currentColor', strokeWidth = 1.6 }) => {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowL: <path d="M19 12H5M11 6l-6 6 6 6" />,
    menu: <><path d="M3 7h18" /><path d="M3 17h18" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />,
    ig: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    pin: <><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></>,
    check: <path d="M5 12l4 4L19 6" />,
    medal: <><circle cx="12" cy="15" r="6" /><path d="M9 9L6 3h12l-3 6" /></>,
    paw: <><circle cx="6" cy="10" r="2" /><circle cx="10" cy="6" r="2" /><circle cx="14" cy="6" r="2" /><circle cx="18" cy="10" r="2" /><path d="M7 17a5 5 0 0110 0c0 3-2 4-5 4s-5-1-5-4z" /></>,
    cal: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    chevR: <path d="M9 6l6 6-6 6" />,
    chevL: <path d="M15 6l-6 6 6 6" />,
    zoom: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M11 8v6M8 11h6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    sort: <><path d="M7 4v16M4 17l3 3 3-3" /><path d="M17 20V4M14 7l3-3 3 3" /></>,
    filter: <path d="M4 5h16l-6 8v6l-4-2v-4z" />,
    quote: <path d="M7 17q-3 0-3-3v-2q0-3 3-3v3h-1q-1 0-1 1v1q0 1 1 1h1zm10 0q-3 0-3-3v-2q0-3 3-3v3h-1q-1 0-1 1v1q0 1 1 1h1z" />,
  };
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const Photo = ({ label = 'photo', tone, ratio = '4 / 3', style, className = '', children }) => (
  <div
    className={`photo ${tone || ''} ${className}`}
    data-label={label}
    style={{ aspectRatio: ratio, borderRadius: 'inherit', ...style }}
  >
    {children}
  </div>
);

// ---- Nav ----
const Nav = ({ current, onNavigate }) => {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'dogs', label: 'Available Dogs' },
    { id: 'litters', label: 'Litters' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
          <span className="brand-mark">Hosanna</span>
          <span className="brand-sub">Afghan Hounds</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {items.map(it => (
            <a
              key={it.id}
              className={`nav-link ${current === it.id ? 'is-active' : ''}`}
              onClick={() => onNavigate(it.id)}
            >{it.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="btn btn-gold btn-sm btn-text" onClick={() => onNavigate('contact')}>
            Inquire <Icon name="arrow" size={14} />
          </button>
          <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid var(--line)', background: 'white' }}>
          <div className="container" style={{ padding: '12px 20px 16px' }}>
            {items.map(it => (
              <a
                key={it.id}
                className="nav-link"
                style={{ display: 'block', padding: '14px 0', fontSize: 17, borderBottom: '1px solid var(--line-soft)' }}
                onClick={() => { onNavigate(it.id); setOpen(false); }}
              >{it.label}</a>
            ))}
            <button className="btn btn-gold" style={{ width: '100%', marginTop: 16 }} onClick={() => { onNavigate('contact'); setOpen(false); }}>
              Inquire <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// ---- Footer ----
const Footer = ({ onNavigate }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h4>Hosanna Afghan Hounds</h4>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
            A small AKC-registered kennel raising champion-sired Afghan Hounds for show and for home. Breeding and sharing the breed online since 1998.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Visit</div>
          <a onClick={() => onNavigate('dogs')}>Available Dogs</a>
          <a onClick={() => onNavigate('litters')}>Litters & Archive</a>
          <a onClick={() => onNavigate('about')}>About the Kennel</a>
          <a onClick={() => onNavigate('contact')}>Contact</a>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Reach us</div>
          <a href="mailto:hosanna-ah@outlook.com">hosanna-ah@outlook.com</a>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Visiting</div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>
            Farley Farm<br />By appointment only
          </p>
        </div>
      </div>
      <div className="footer-base">
        <span>© 1998–2026 Hosanna Afghan Hounds · AKC Registered</span>
        <span style={{ fontStyle: 'italic' }}>"I will fear no evil." — Psalm 23</span>
      </div>
      <div style={{ paddingTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>
        Independent concept redesign — not affiliated with or endorsed by Hosanna Afghan Hounds. Original site at hosanna1.com.
      </div>
    </div>
  </footer>
);

// ---- DogCard ----
const DogCard = ({ dog, onOpen }) => {
  const statusKey = dog.status.toLowerCase();
  return (
    <article className="card" onClick={() => onOpen?.(dog)} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative' }}>
        <Photo label={`${dog.name} portrait`} tone={dog.tone} ratio="4 / 5" style={{ borderRadius: 0 }} />
        <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6 }}>
          <span className={`chip is-status-${statusKey}`}>{dog.status}</span>
        </div>
        {dog.kind === 'show' && (
          <div style={{ position: 'absolute', top: 14, right: 14 }}>
            <span className="chip is-gold">
              <Icon name="medal" size={12} /> Show
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
          <h3 style={{ fontSize: 24 }}>{dog.name}</h3>
          <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>{dog.sex} · {dog.age}</span>
        </div>
        <p className="muted" style={{ fontSize: 13, fontStyle: 'italic', marginTop: 2 }}>{dog.callName}</p>
        <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 12, lineHeight: 1.6 }}>{dog.blurb}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
          <button className="btn btn-quiet btn-sm" style={{ paddingLeft: 0 }} onClick={(e) => { e.stopPropagation(); onOpen?.(dog); }}>
            Learn more <Icon name="arrow" size={14} />
          </button>
          {dog.status === 'Available' && (
            <button className="btn btn-ghost btn-sm" onClick={(e) => { e.stopPropagation(); onOpen?.(dog); }}>
              Inquire
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

// ---- Reusable section header ----
const SectionHead = ({ eyebrow, title, lede, align = 'left', cta }) => (
  <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : 'none', margin: align === 'center' ? '0 auto' : 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {lede && <p className="lede" style={{ maxWidth: 640 }}>{lede}</p>}
    {cta}
  </div>
);

// ---- Field (input/textarea wrapper) ----
const Field = ({ label, hint, children, required }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>
      {label}{required && <span style={{ color: 'var(--gold-700)' }}> *</span>}
    </span>
    {children}
    {hint && <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{hint}</span>}
  </label>
);

const inputStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 15,
  padding: '12px 14px',
  borderRadius: 'var(--r)',
  border: '1px solid var(--line)',
  background: 'white',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color .15s ease, box-shadow .15s ease',
  width: '100%',
};

Object.assign(window, { Icon, Photo, Nav, Footer, DogCard, SectionHead, Field, inputStyle });
