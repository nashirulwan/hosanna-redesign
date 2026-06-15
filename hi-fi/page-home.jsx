// HomePage — editorial hero, trust strip, available now, why hosanna, latest litter

const HomePage = ({ onNavigate, onOpenDog }) => {
  const featured = DOGS.filter(d => d.status === 'Available').slice(0, 3);
  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ background: 'var(--off-white)', paddingTop: 56, paddingBottom: 24 }}>
        <div className="container home-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="eyebrow">AKC Registered · Champion-sired</div>
            <h1>
              Champion-sired <em style={{ fontStyle: 'italic', color: 'var(--gold-700)' }}>Afghan&nbsp;Hounds</em><br />
              for show or for home.
            </h1>
            <p className="lede" style={{ maxWidth: 520 }}>
              Hosanna is a small family kennel that has bred and shown Afghan Hounds since 1998. Our young males and females are AKC registered, champion-sired, and raised in our home.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => onNavigate('dogs')}>
                View Available Dogs <Icon name="arrow" />
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => onNavigate('about')}>
                Our Story
              </button>
            </div>
            <div style={{ display: 'flex', gap: 40, marginTop: 18 }}>
              {[['25+', 'years with the breed'], ['AKC', 'registered'], ['Champion', 'bloodlines']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 30, color: 'var(--navy)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 540 }}>
            <Photo label="hero · champion afghan" tone="warm" ratio="4 / 5" style={{ borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-3)' }} />
            <div style={{ position: 'absolute', left: -24, bottom: 40, background: 'white', borderRadius: 'var(--r-lg)', padding: '18px 22px', boxShadow: 'var(--sh-2)', maxWidth: 240 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Featured · Spring 2026</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--navy)', lineHeight: 1.2 }}>"Bliss"</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 2, fontStyle: 'italic' }}>Hosanna's Joy of the Morning</div>
              <button className="btn btn-gold btn-sm" style={{ marginTop: 12 }} onClick={() => onOpenDog(DOGS[0])}>
                Meet Bliss <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'white' }}>
        <div className="container trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { icon: 'check', title: 'AKC Registered', body: 'Every Hosanna hound is AKC registered and comes with full pedigree papers.' },
            { icon: 'medal', title: 'Champion-Sired', body: 'Our puppies come from bloodlines we have bred and shown for over 25 years.' },
            { icon: 'paw', title: 'Raised in Our Home', body: 'Puppies are raised underfoot and socialized early, for show homes or as pets.' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 48, height: 48, borderRadius: 99, background: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)', flex: 'none' }}>
                <Icon name={item.icon} size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--navy)' }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.55 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AVAILABLE NOW */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <SectionHead eyebrow="Available now" title="Looking for their people." lede="Three hounds ready to meet you. Each comes with a full pedigree packet, health record, and our promise of lifetime support." />
            <button className="btn btn-quiet" onClick={() => onNavigate('dogs')}>See all 8 <Icon name="arrow" size={14} /></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="dog-grid">
            {featured.map(d => <DogCard key={d.id} dog={d} onOpen={onOpenDog} />)}
          </div>
        </div>
      </section>

      {/* LATEST LITTER */}
      <section style={{ background: 'var(--navy)', color: 'white', padding: '96px 0' }}>
        <div className="container litter-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>Latest Litter · Spring 2026</div>
            <h2 style={{ color: 'white', marginTop: 14 }}>A new litter, born this spring.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginTop: 18, lineHeight: 1.6, maxWidth: 480 }}>
              Our latest champion-sired litter — a mix of show prospects and pet companions, all raised in our home. We update photos and details as the puppies grow.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn btn-gold" onClick={() => onNavigate('dogs')}>Meet the Litter</button>
              <button className="btn" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => onNavigate('litters')}>View Archive</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Photo label="litter · day 30" tone="warm" ratio="4 / 5" style={{ borderRadius: 'var(--r-lg)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Photo label="dam & pups" tone="shaded" ratio="4 / 3" style={{ borderRadius: 'var(--r-lg)' }} />
              <Photo label="play time" tone="cool" ratio="4 / 3" style={{ borderRadius: 'var(--r-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* MOTTO / VERSE */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <Icon name="quote" size={32} stroke="var(--gold)" />
          <p style={{ fontFamily: 'var(--serif)', fontSize: 32, lineHeight: 1.4, color: 'var(--navy)', marginTop: 18, fontStyle: 'italic' }}>
            "Yea, though I walk through the valley of the shadow of death, I will fear no evil."
          </p>
          <div style={{ marginTop: 22, fontSize: 14, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            PSALM 23 · THE VERSE WE'VE KEPT SINCE 1998
          </div>
        </div>
      </section>
    </main>
  );
};

window.HomePage = HomePage;
