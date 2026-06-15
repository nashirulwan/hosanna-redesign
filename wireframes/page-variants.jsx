// Page variants — Dogs index, Dog profile, Contact, Mobile strip.

const DogsA_Filtered = () => (
  <DesktopFrame>
    <NavBar />
    <div style={{ padding: '18px 26px 8px' }}>
      <HP>Hosanna / Available Dogs</HP>
      <HW size={34}>Available Hounds</HW>
      <Underline w={160} />
      <Row gap={6} style={{ marginTop: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip active>All · 8</Chip>
        <Chip>Show Dogs</Chip>
        <Chip>Pets</Chip>
        <span style={{ width: 1, height: 18, background: SK.inkFaint, margin: '0 6px' }} />
        <Chip>Male</Chip>
        <Chip>Female</Chip>
        <span style={{ width: 1, height: 18, background: SK.inkFaint, margin: '0 6px' }} />
        <HP>sort:</HP>
        <Chip>youngest →</Chip>
      </Row>
    </div>
    <div style={{ padding: '8px 26px 16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
      {[
        ['Bliss', 'show', 'available', '4 mo · F'],
        ['Samson', 'show', 'reserved', '6 mo · M'],
        ['Ruby', 'pet', 'available', '3 mo · F'],
        ['Alf', 'pet', 'available', '4 mo · M'],
        ['Happy', 'show', 'sold', '5 mo · F'],
        ['Red', 'pet', 'available', '3 mo · M'],
      ].map(([name, kind, status, meta]) => (
        <Box key={name} style={{ padding: 8 }} fill={SK.paper}>
          <Photo h={110} label="dog photo" />
          <Row gap={6} style={{ marginTop: 8, justifyContent: 'space-between', alignItems: 'baseline' }}>
            <HW size={18}>{name}</HW>
            <Chip accent={kind === 'show'}>{kind}</Chip>
          </Row>
          <Row gap={6} style={{ marginTop: 4, alignItems: 'center' }}>
            <HP size={9}>{meta}</HP>
            <span style={{ flex: 1 }} />
            <Chip active={status === 'available'} style={{ opacity: status === 'sold' ? 0.4 : 1 }}>
              {status}
            </Chip>
          </Row>
          <Lines count={2} gap={4} />
          <Btn size="sm" primary={status === 'available'} dashed={status !== 'available'} style={{ marginTop: 8, width: '100%' }}>
            {status === 'available' ? 'Inquire →' : status === 'reserved' ? 'Join waitlist' : 'View profile'}
          </Btn>
        </Box>
      ))}
    </div>
    <Footer />
  </DesktopFrame>
);

const DogsB_Empty = () => (
  <DesktopFrame>
    <NavBar />
    <div style={{ padding: '18px 26px 8px' }}>
      <HP>Hosanna / Available Dogs</HP>
      <HW size={34}>Available Hounds</HW>
      <Row gap={6} style={{ marginTop: 14 }}>
        <Chip active>All · 0</Chip>
        <Chip>Show Dogs</Chip>
        <Chip>Pets</Chip>
      </Row>
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
      <Box dashed style={{ maxWidth: 460, padding: 28, textAlign: 'center', background: SK.paper }}>
        <div style={{ width: 70, height: 70, margin: '0 auto 12px', border: `2px dashed ${SK.accent}`, borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HW size={28} color={SK.accent}>?</HW>
        </div>
        <HW size={26}>No puppies available right now.</HW>
        <div style={{ marginTop: 8 }}><HP>Next litter expected fall 2026</HP></div>
        <Lines count={2} widths={['80%', '60%']} gap={6} style={{ marginTop: 10 }} />
        <Row gap={8} style={{ justifyContent: 'center', marginTop: 14 }}>
          <Btn primary>Join the Waitlist →</Btn>
          <Btn dashed>Browse Archives</Btn>
        </Row>
      </Box>
    </div>
    <Footer />
  </DesktopFrame>
);

const ProfileA_Classic = () => (
  <DesktopFrame>
    <NavBar />
    <div style={{ padding: '14px 26px' }}>
      <HP>Hosanna / Available / Bliss</HP>
    </div>
    <Row gap={18} style={{ padding: '0 26px 16px' }}>
      <Col w={'56%'} gap={8}>
        <Photo h={260} label="main photo · swipeable" />
        <Row gap={6}>
          {[0, 1, 2, 3].map((i) => (
            <Photo key={i} h={56} label={`${i + 1}`} style={{ flex: 1, border: i === 0 ? `2px solid ${SK.accent}` : undefined }} />
          ))}
        </Row>
        <HP size={9}>← swipe · tap to zoom</HP>
      </Col>
      <Col w={'44%'} gap={10}>
        <div>
          <HW size={34}>"Bliss"</HW>
          <HP>Hosanna's Joy of the Morning</HP>
        </div>
        <Row gap={6} style={{ flexWrap: 'wrap' }}>
          <Chip accent>show prospect</Chip>
          <Chip active>available</Chip>
        </Row>
        <Box style={{ padding: 10 }}>
          <Row gap={16}>
            <div><HP size={9}>dob</HP><HW size={14}>Feb 4, 2026</HW></div>
            <div><HP size={9}>sex</HP><HW size={14}>Female</HW></div>
            <div><HP size={9}>color</HP><HW size={14}>Cream</HW></div>
            <div><HP size={9}>akc</HP><HW size={14}>Yes</HW></div>
          </Row>
        </Box>
        <div>
          <HW size={18}>Sire & Dam</HW>
          <Row gap={8} style={{ marginTop: 6 }}>
            <Col gap={4} style={{ flex: 1 }}>
              <Photo h={70} label="sire" />
              <HP size={9}>SIRE · Ch. Hosanna's Glory</HP>
            </Col>
            <Col gap={4} style={{ flex: 1 }}>
              <Photo h={70} label="dam" />
              <HP size={9}>DAM · Hosanna's Grace</HP>
            </Col>
          </Row>
        </div>
        <Box fill={SK.paperShade} style={{ padding: 10 }}>
          <HW size={16}>Interested in Bliss?</HW>
          <Lines count={2} widths={['100%', '70%']} gap={4} style={{ marginTop: 6 }} />
          <Row gap={6} style={{ marginTop: 6 }}>
            <Box style={{ flex: 1, padding: '4px 8px' }}><HP size={9}>your name</HP></Box>
            <Box style={{ flex: 1, padding: '4px 8px' }}><HP size={9}>email</HP></Box>
          </Row>
          <Box style={{ padding: '4px 8px', marginTop: 6 }}><HP size={9}>message…</HP></Box>
          <Btn primary size="sm" style={{ marginTop: 8 }}>Send Inquiry →</Btn>
        </Box>
      </Col>
    </Row>
    <Footer />
  </DesktopFrame>
);

const ProfileB_Editorial = () => (
  <DesktopFrame>
    <NavBar />
    {/* full-bleed photo with overlay */}
    <div style={{ position: 'relative', padding: 0 }}>
      <Photo h={300} label="bliss · editorial portrait" style={{ borderRadius: 0, border: 'none' }} />
      <div style={{ position: 'absolute', left: 32, bottom: 22, color: SK.paper }}>
        <HP color={'rgba(255,255,255,0.85)'}>Hosanna's Joy of the Morning</HP>
        <HW size={56} color={SK.paper}>"Bliss"</HW>
      </div>
      <div style={{ position: 'absolute', right: 22, top: 22, display: 'flex', gap: 6 }}>
        <Chip style={{ background: SK.paper }}>← / →</Chip>
        <Chip style={{ background: SK.paper }}>zoom ⊕</Chip>
      </div>
    </div>
    <Row gap={20} style={{ padding: '18px 30px 16px', flex: 1 }}>
      <Col w={'62%'} gap={14}>
        <Row gap={20}>
          {[['DOB', 'Feb 4, 2026'], ['Sex', 'Female'], ['Color', 'Cream'], ['AKC', 'Registered'], ['Type', 'Show']].map(([k, v]) => (
            <div key={k}><HP size={9}>{k}</HP><HW size={16}>{v}</HW></div>
          ))}
        </Row>
        <div>
          <HW size={20}>Pedigree</HW>
          <Underline w={70} />
        </div>
        <Row gap={10}>
          <Box style={{ flex: 1, padding: 8 }}><Photo h={70} label="sire" /><HP size={9} style={{ marginTop: 4 }}>SIRE · Ch. Hosanna's Glory</HP></Box>
          <Box style={{ flex: 1, padding: 8 }}><Photo h={70} label="dam" /><HP size={9} style={{ marginTop: 4 }}>DAM · Hosanna's Grace</HP></Box>
        </Row>
        <Lines count={3} />
      </Col>
      <Col w={'38%'} gap={10}>
        <Box fill={SK.paperShade} style={{ padding: 14, position: 'sticky', top: 0 }}>
          <HW size={20}>Interested in Bliss?</HW>
          <Lines count={1} widths={['85%']} />
          <Col gap={6} style={{ marginTop: 8 }}>
            {['Your name', 'Email', 'Phone (optional)'].map((f) => (
              <Box key={f} style={{ padding: '6px 10px' }}><HP size={9}>{f}</HP></Box>
            ))}
            <Box style={{ padding: '6px 10px', height: 50 }}><HP size={9}>Tell us a bit about you…</HP></Box>
          </Col>
          <Btn primary style={{ marginTop: 10, width: '100%' }}>Review & Send →</Btn>
          <HP size={9} style={{ marginTop: 6, display: 'block' }}>we'll show a summary before sending</HP>
        </Box>
      </Col>
    </Row>
    <Footer />
  </DesktopFrame>
);

const ContactA_Form = () => (
  <DesktopFrame>
    <NavBar />
    <Row gap={28} style={{ padding: 30, flex: 1 }}>
      <Col w={'58%'} gap={12}>
        <HP>Hosanna / Contact</HP>
        <HW size={36}>Say hello.</HW>
        <Lines count={2} widths={['90%', '60%']} />
        <Col gap={10} style={{ marginTop: 6 }}>
          <Row gap={10}>
            <Box style={{ flex: 1, padding: 10 }}><HP size={9}>your name *</HP></Box>
            <Box style={{ flex: 1, padding: 10 }}><HP size={9}>email *</HP></Box>
          </Row>
          <Row gap={10}>
            <Box style={{ flex: 1, padding: 10 }}><HP size={9}>phone (optional)</HP></Box>
            <Box style={{ flex: 1, padding: 10 }}><HP size={9}>which dog? ▾</HP></Box>
          </Row>
          <Box style={{ padding: 10, height: 110 }}>
            <HP size={9}>message…</HP>
            <HP size={9} style={{ position: 'absolute', right: 14, bottom: 8 }}>0 / 800</HP>
          </Box>
          <Row gap={10} style={{ alignItems: 'center' }}>
            <Btn primary size="lg">Review & Send →</Btn>
            <HP size={9}>we'll show a summary before sending — no captcha</HP>
          </Row>
        </Col>
      </Col>
      <Col w={'42%'} gap={12}>
        <Box style={{ padding: 14 }}>
          <HW size={20}>The Kennel</HW>
          <Underline w={50} />
          <div style={{ marginTop: 8 }}>
            <HW size={16}>The Farley Family</HW>
            <HP size={10} style={{ display: 'block', marginTop: 2 }}>Farley Farm · by appointment</HP>
          </div>
          <Col gap={4} style={{ marginTop: 10 }}>
            <Row gap={6}><HP>✉</HP><HP>hosanna-ah@outlook.com</HP></Row>
            <Row gap={6}><HP>◉</HP><HP>by appointment only</HP></Row>
          </Col>
        </Box>
        <Photo h={140} label="kennel · porch portrait" />
        <HP size={9}>visits by appointment</HP>
      </Col>
    </Row>
    <Footer />
  </DesktopFrame>
);

const ContactB_Summary = () => (
  <DesktopFrame>
    <NavBar />
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
      <Box style={{ width: 460, padding: 22, background: SK.paper, boxShadow: '4px 4px 0 ' + SK.ink }}>
        <HP>Step 2 of 2 · review</HP>
        <HW size={26}>You're inquiring about Bliss.</HW>
        <Underline w={100} />
        <Col gap={6} style={{ marginTop: 12 }}>
          {[['Name', 'Jane Doe'], ['Email', 'jane@example.com'], ['Phone', '—'], ['Dog', 'Bliss · show prospect']].map(([k, v]) => (
            <Row key={k} gap={10} style={{ justifyContent: 'space-between', borderBottom: `1px dashed ${SK.inkFaint}`, paddingBottom: 4 }}>
              <HP>{k}</HP>
              <HW size={14}>{v}</HW>
            </Row>
          ))}
        </Col>
        <Box style={{ padding: 10, marginTop: 10, background: SK.paperShade }}>
          <Lines count={3} widths={['100%', '92%', '60%']} />
        </Box>
        <Row gap={8} style={{ marginTop: 14 }}>
          <Btn dashed>← Edit</Btn>
          <Btn primary size="lg" style={{ flex: 1 }}>Send Inquiry</Btn>
        </Row>
      </Box>
    </div>
    <Footer />
  </DesktopFrame>
);

// -------- mobile --------

const MobHome = () => (
  <MobileFrame label="home · 375">
    <div style={{ padding: '8px 10px' }}>
      <Row gap={0} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <HW size={18}>Hosanna</HW>
        <HW size={20}>≡</HW>
      </Row>
      <Photo h={130} label="hero" style={{ marginTop: 8 }} />
      <HW size={20} style={{ marginTop: 8, display: 'block', lineHeight: 1.05 }}>Champion Afghan Hound Puppies</HW>
      <HP size={9} style={{ display: 'block', marginTop: 4 }}>AKC · 30+ yrs · KY</HP>
      <Btn primary size="sm" style={{ marginTop: 8, width: '100%' }}>View Available →</Btn>
      <Row gap={6} style={{ marginTop: 10 }}>
        <Photo h={70} label="pup" style={{ flex: 1 }} />
        <Photo h={70} label="pup" style={{ flex: 1 }} />
      </Row>
      <HP size={9} style={{ marginTop: 8, display: 'block' }}>AVAILABLE NOW · 6</HP>
    </div>
    {/* sticky contact */}
    <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10 }}>
      <Btn primary style={{ width: '100%' }}>Contact us</Btn>
    </div>
  </MobileFrame>
);

const MobDogs = () => (
  <MobileFrame label="dogs · 375">
    <div style={{ padding: '8px 10px' }}>
      <Row gap={0} style={{ justifyContent: 'space-between' }}><HW size={16}>← Dogs</HW><HW size={16}>⚲</HW></Row>
      <Row gap={4} style={{ marginTop: 8, overflow: 'hidden' }}>
        <Chip active>All</Chip><Chip>Show</Chip><Chip>Pet</Chip><Chip>F</Chip><Chip>M</Chip>
      </Row>
      <Col gap={8} style={{ marginTop: 10 }}>
        {['Bliss', 'Samson', 'Ruby'].map((n, i) => (
          <Box key={n} style={{ padding: 6, display: 'flex', gap: 8 }}>
            <Photo h={70} label="" style={{ width: 80, flex: 'none' }} />
            <Col gap={2} style={{ flex: 1 }}>
              <Row gap={4} style={{ justifyContent: 'space-between' }}><HW size={15}>{n}</HW><Chip accent>{i === 1 ? 'show' : 'pet'}</Chip></Row>
              <HP size={9}>4 mo · F · available</HP>
              <Btn size="sm" primary style={{ alignSelf: 'flex-start', marginTop: 2 }}>Inquire</Btn>
            </Col>
          </Box>
        ))}
      </Col>
    </div>
  </MobileFrame>
);

const MobProfile = () => (
  <MobileFrame label="profile · 375">
    <div style={{ padding: 0 }}>
      <div style={{ position: 'relative' }}>
        <Photo h={170} label="bliss" style={{ borderRadius: 0, border: 'none' }} />
        <div style={{ position: 'absolute', left: 10, top: 10 }}><HW size={16} color={SK.paper}>←</HW></div>
        <div style={{ position: 'absolute', right: 10, bottom: 8, display: 'flex', gap: 3 }}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: 99, background: i === 0 ? SK.paper : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>
      </div>
      <div style={{ padding: '8px 10px' }}>
        <HW size={24}>"Bliss"</HW>
        <HP size={9} style={{ display: 'block' }}>Hosanna's Joy of the Morning</HP>
        <Row gap={4} style={{ marginTop: 6 }}><Chip accent>show</Chip><Chip active>available</Chip></Row>
        <Row gap={10} style={{ marginTop: 8 }}>
          <div><HP size={8}>dob</HP><HW size={12}>Feb 4</HW></div>
          <div><HP size={8}>sex</HP><HW size={12}>F</HW></div>
          <div><HP size={8}>akc</HP><HW size={12}>yes</HW></div>
        </Row>
        <Lines count={2} gap={4} style={{ marginTop: 8 }} />
      </div>
    </div>
    <div style={{ position: 'absolute', bottom: 6, left: 8, right: 8 }}>
      <Btn primary style={{ width: '100%' }}>Inquire about Bliss</Btn>
    </div>
  </MobileFrame>
);

const MobContact = () => (
  <MobileFrame label="contact · 375">
    <div style={{ padding: '8px 10px' }}>
      <HW size={22}>Say hello.</HW>
      <Underline w={60} />
      <Col gap={6} style={{ marginTop: 10 }}>
        {['Name', 'Email', 'Phone (opt)', 'Which dog? ▾'].map((f) => (
          <Box key={f} style={{ padding: 8 }}><HP size={9}>{f}</HP></Box>
        ))}
        <Box style={{ padding: 8, height: 70 }}><HP size={9}>message…</HP></Box>
        <Btn primary style={{ width: '100%' }}>Review & Send →</Btn>
      </Col>
      <HP size={9} style={{ display: 'block', marginTop: 10 }}>hosanna-ah@outlook.com</HP>
    </div>
  </MobileFrame>
);

Object.assign(window, {
  DogsA_Filtered, DogsB_Empty, ProfileA_Classic, ProfileB_Editorial,
  ContactA_Form, ContactB_Summary, MobHome, MobDogs, MobProfile, MobContact,
});
