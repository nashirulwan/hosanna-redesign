// Low-fi sketch primitives — handwritten vibe, B&W + warm accent.
// Loaded as a Babel script before the main wireframes file.

const SK = {
  ink: '#1a1814',
  inkSoft: 'rgba(26,24,20,0.55)',
  inkFaint: 'rgba(26,24,20,0.28)',
  paper: '#fbf7ed',
  paperShade: '#f3eddc',
  accent: '#c9844c',
  accentSoft: 'rgba(201,132,76,0.18)',
  hand: '"Caveat", "Patrick Hand", "Comic Sans MS", cursive',
  hand2: '"Architects Daughter", "Patrick Hand", cursive',
  mono: '"JetBrains Mono", "IBM Plex Mono", monospace',
};

// ---------- box primitives ----------

const Box = ({ children, style, dashed, fill, tilt = 0, pad = 10, accent, ...rest }) => (
  <div
    {...rest}
    style={{
      border: `1.5px ${dashed ? 'dashed' : 'solid'} ${accent ? SK.accent : SK.ink}`,
      borderRadius: 8,
      background: fill || 'transparent',
      padding: pad,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

// Photo placeholder — diagonal cross + label
const Photo = ({ label = 'dog photo', h = 140, style, accent }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: h,
      border: `1.5px solid ${accent ? SK.accent : SK.ink}`,
      borderRadius: 8,
      background: SK.paperShade,
      overflow: 'hidden',
      ...style,
    }}
  >
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
      <line x1="0" y1="0" x2="100%" y2="100%" stroke={SK.inkFaint} strokeWidth="1" />
      <line x1="100%" y1="0" x2="0" y2="100%" stroke={SK.inkFaint} strokeWidth="1" />
    </svg>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: SK.mono,
        fontSize: 10,
        letterSpacing: 0.4,
        color: SK.inkSoft,
        background: SK.paper,
        padding: '2px 8px',
        borderRadius: 4,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </div>
  </div>
);

// Wavy underline used to mark "this is a heading"
const Underline = ({ w = 80, color }) => (
  <svg width={w} height="6" style={{ display: 'block', marginTop: 2 }}>
    <path d={`M0 3 Q ${w / 6} 0 ${w / 3} 3 T ${(w * 2) / 3} 3 T ${w} 3`} stroke={color || SK.accent} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

// Text line placeholders
const Line = ({ w = '100%', h = 4, soft = false, style }) => (
  <div
    style={{
      width: w,
      height: h,
      background: soft ? SK.inkFaint : SK.inkSoft,
      borderRadius: h,
      ...style,
    }}
  />
);
const Lines = ({ count = 3, widths, gap = 6 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap }}>
    {Array.from({ length: count }).map((_, i) => (
      <Line key={i} w={widths ? widths[i % widths.length] : `${70 + ((i * 17) % 30)}%`} />
    ))}
  </div>
);

// Handwritten label/heading
const HW = ({ children, size = 22, weight = 600, color, tilt = 0, style }) => (
  <span
    style={{
      fontFamily: SK.hand,
      fontWeight: weight,
      fontSize: size,
      color: color || SK.ink,
      lineHeight: 1.1,
      letterSpacing: 0.2,
      display: 'inline-block',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style,
    }}
  >
    {children}
  </span>
);

// Hand-print label (Architects Daughter) for caps/labels
const HP = ({ children, size = 11, color, style }) => (
  <span
    style={{
      fontFamily: SK.hand2,
      fontSize: size,
      color: color || SK.inkSoft,
      letterSpacing: 0.8,
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {children}
  </span>
);

// Buttons
const Btn = ({ children, primary, dashed, size = 'md', style, w }) => {
  const padY = size === 'sm' ? 5 : size === 'lg' ? 11 : 8;
  const padX = size === 'sm' ? 10 : size === 'lg' ? 22 : 16;
  const fs = size === 'sm' ? 13 : size === 'lg' ? 18 : 15;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: `${padY}px ${padX}px`,
        border: `1.5px ${dashed ? 'dashed' : 'solid'} ${SK.ink}`,
        borderRadius: 999,
        background: primary ? SK.accent : 'transparent',
        color: primary ? '#fff' : SK.ink,
        fontFamily: SK.hand,
        fontSize: fs,
        fontWeight: 600,
        boxShadow: primary ? '2px 2px 0 ' + SK.ink : 'none',
        width: w,
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </span>
  );
};

// Chip / badge
const Chip = ({ children, active, accent, style }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 9px',
      borderRadius: 999,
      border: `1.5px solid ${accent ? SK.accent : SK.ink}`,
      background: active ? SK.ink : accent ? SK.accentSoft : 'transparent',
      color: active ? SK.paper : accent ? SK.accent : SK.ink,
      fontFamily: SK.hand2,
      fontSize: 11,
      letterSpacing: 0.4,
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {children}
  </span>
);

// Sticky note — for annotations on wireframes
const Note = ({ children, tilt = -2, x, y, w = 160, style }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      transform: `rotate(${tilt}deg)`,
      background: '#fff4a6',
      padding: '8px 10px',
      fontFamily: SK.hand,
      fontSize: 14,
      color: '#5a4a2a',
      boxShadow: '2px 3px 6px rgba(0,0,0,0.12)',
      lineHeight: 1.2,
      zIndex: 5,
      ...style,
    }}
  >
    {children}
  </div>
);

// Arrow connecting an annotation to a target
const Arrow = ({ from, to, color = SK.accent, curve = 30 }) => {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - curve;
  return (
    <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 4 }} width="100%" height="100%">
      <defs>
        <marker id={`ah-${x1}-${y1}`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill={color} />
        </marker>
      </defs>
      <path d={`M${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} stroke={color} strokeWidth="1.5" fill="none" markerEnd={`url(#ah-${x1}-${y1})`} strokeDasharray="0" />
    </svg>
  );
};

// Section row inside an artboard
const Row = ({ children, gap = 12, style, align = 'stretch' }) => (
  <div style={{ display: 'flex', gap, alignItems: align, ...style }}>{children}</div>
);
const Col = ({ children, gap = 12, style, w }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, width: w, ...style }}>{children}</div>
);

// Frame for a desktop wireframe (so it looks like a browser-ish thing)
const DesktopFrame = ({ children, style }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: SK.paper,
      border: `1.5px solid ${SK.ink}`,
      borderRadius: 10,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
  >
    {/* tiny URL bar */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 10px', borderBottom: `1px dashed ${SK.inkFaint}`, background: SK.paperShade }}>
      <span style={{ width: 8, height: 8, borderRadius: 99, border: `1px solid ${SK.ink}` }} />
      <span style={{ width: 8, height: 8, borderRadius: 99, border: `1px solid ${SK.ink}` }} />
      <span style={{ width: 8, height: 8, borderRadius: 99, border: `1px solid ${SK.ink}` }} />
      <span style={{ marginLeft: 8, fontFamily: SK.mono, fontSize: 10, color: SK.inkSoft }}>hosanna1.com / —</span>
    </div>
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>{children}</div>
  </div>
);

const MobileFrame = ({ children, label }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <div
      style={{
        flex: 1,
        width: '100%',
        background: SK.paper,
        border: `2px solid ${SK.ink}`,
        borderRadius: 22,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '3px 3px 0 ' + SK.ink,
      }}
    >
      {/* status bar */}
      <div style={{ height: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', borderBottom: `1px dashed ${SK.inkFaint}` }}>
        <span style={{ fontFamily: SK.mono, fontSize: 9, color: SK.inkSoft }}>9:41</span>
        <span style={{ fontFamily: SK.mono, fontSize: 9, color: SK.inkSoft }}>●●● ●</span>
      </div>
      <div style={{ height: 'calc(100% - 18px)', overflow: 'hidden' }}>{children}</div>
    </div>
    {label && <HP size={10}>{label}</HP>}
  </div>
);

// Generic nav bar
const NavBar = ({ items = ['Dogs', 'Litters', 'About', 'Contact'], cta = 'Inquire', logo = 'Hosanna', sticky }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 22px',
      borderBottom: `1.5px solid ${SK.ink}`,
      background: sticky ? SK.paperShade : SK.paper,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <HW size={22}>{logo}</HW>
      <HP size={9}>afghan hounds</HP>
    </div>
    <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
      {items.map((it) => (
        <HW key={it} size={17} weight={500}>
          {it}
        </HW>
      ))}
      <Btn size="sm" primary>
        {cta}
      </Btn>
    </div>
  </div>
);

// Footer
const Footer = () => (
  <div style={{ padding: '14px 22px', borderTop: `1.5px dashed ${SK.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: SK.paperShade }}>
    <HW size={18}>Hosanna</HW>
    <div style={{ display: 'flex', gap: 14 }}>
      <HP>email</HP>
      <HP>phone</HP>
      <HP>instagram</HP>
    </div>
    <HP size={9}>© 2026 Hosanna Kennels</HP>
  </div>
);

// expose
Object.assign(window, {
  SK, Box, Photo, Underline, Line, Lines, HW, HP, Btn, Chip, Note, Arrow, Row, Col, DesktopFrame, MobileFrame, NavBar, Footer,
});
