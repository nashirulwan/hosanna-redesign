// Dogs index page — filter bar + grid, with empty-state branch

const DogsPage = ({ onOpenDog }) => {
  const [kind, setKind] = React.useState('All');
  const [sex, setSex] = React.useState('All');

  const filtered = DOGS.filter(d => {
    if (kind === 'Show' && d.kind !== 'show') return false;
    if (kind === 'Pet' && d.kind !== 'pet') return false;
    if (sex !== 'All' && d.sex !== sex) return false;
    return true;
  });

  return (
    <main className="page-enter">
      <section style={{ padding: '64px 0 32px', background: 'white', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 10 }}>
            <a style={{ cursor: 'pointer' }}>Home</a>
            <span style={{ margin: '0 8px', color: 'var(--ink-4)' }}>/</span>
            <span>Available Dogs</span>
          </div>
          <SectionHead
            eyebrow="The kennel · Spring 2026"
            title="Available Hounds"
            lede={`${DOGS.filter(d => d.status === 'Available').length} hounds currently looking for their forever people. Reserved & sold listings shown for context.`}
          />

          {/* filters */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginRight: 4 }}>Type</span>
              {['All', 'Show', 'Pet'].map(k => (
                <button key={k} className={`chip ${kind === k ? 'is-active' : ''}`} onClick={() => setKind(k)}>{k}</button>
              ))}
            </div>
            <div style={{ width: 1, height: 24, background: 'var(--line)' }} />
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginRight: 4 }}>Sex</span>
              {['All', 'Male', 'Female'].map(s => (
                <button key={s} className={`chip ${sex === s ? 'is-active' : ''}`} onClick={() => setSex(s)}>{s}</button>
              ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center', fontSize: 13, color: 'var(--ink-3)' }}>
              <span>{filtered.length} of {DOGS.length}</span>
              <button className="chip"><Icon name="sort" size={12} /> Youngest first</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="dog-grid">
              {filtered.map(d => <DogCard key={d.id} dog={d} onOpen={onOpenDog} />)}
            </div>
          )}
        </div>
      </section>

      {/* Next litter callout */}
      <section style={{ padding: '64px 0', background: 'var(--off-white)', borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Next litter</div>
            <h2 style={{ marginTop: 10 }}>Don't see the right one yet?</h2>
            <p className="lede" style={{ marginTop: 12, maxWidth: 540 }}>
              We plan our litters carefully and only have puppies a few times a year. If nothing here fits, send us a note and we'll let you know when our next litter is expected.
            </p>
          </div>
          <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: 28, boxShadow: 'var(--sh-2)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--serif)' }}>Ask about upcoming litters</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.6 }}>
              Email us and we'll add you to the list for our next planned litter.
            </p>
            <a className="btn btn-primary" href="mailto:hosanna-ah@outlook.com" style={{ marginTop: 18 }}>
              Email the kennel <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

const EmptyState = () => (
  <div style={{ background: 'white', borderRadius: 'var(--r-lg)', padding: '72px 32px', textAlign: 'center', boxShadow: 'var(--sh-1)', border: '1px dashed var(--line)' }}>
    <div style={{ width: 64, height: 64, borderRadius: 99, background: 'var(--gold-100)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
      <Icon name="paw" size={28} strokeWidth={1.8} />
    </div>
    <h3>No puppies match those filters right now.</h3>
    <p className="lede" style={{ marginTop: 10, maxWidth: 440, margin: '10px auto 0' }}>
      Try widening your search, or join the waitlist for our next planned litter (fall 2026).
    </p>
    <button className="btn btn-primary" style={{ marginTop: 24 }}>Join the Waitlist</button>
  </div>
);

window.DogsPage = DogsPage;
