// Homepage wireframe variants
// 4 distinct directions: editorial, photo-mosaic, story-split, bold-type.

const HomeA_Editorial = () => (
  <DesktopFrame>
    <NavBar />
    {/* Hero */}
    <div style={{ position: 'relative', padding: 24 }}>
      <Photo h={280} label="champion afghan — full bleed hero" />
      <div style={{ position: 'absolute', left: 48, bottom: 56, maxWidth: 480, background: SK.paper, padding: 16, border: `1.5px solid ${SK.ink}`, boxShadow: '3px 3px 0 ' + SK.ink }}>
        <HW size={32}>Champion Afghan Hound Puppies</HW>
        <Underline w={140} />
        <div style={{ marginTop: 8 }}><HP>AKC registered · 30+ years · Show & Pet</HP></div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <Btn primary size="sm">View Available Dogs →</Btn>
          <Btn dashed size="sm">Our Story</Btn>
        </div>
      </div>
    </div>
    {/* Available Now */}
    <div style={{ padding: '4px 24px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div><HW size={22}>Available Now</HW><Underline w={70} /></div>
        <HP>see all 8 →</HP>
      </div>
      <Row gap={12} style={{ marginTop: 12 }}>
        {[0, 1, 2].map((i) => (
          <Box key={i} style={{ flex: 1, padding: 8 }} fill={SK.paper}>
            <Photo h={92} label="pup" />
            <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <HW size={16}>{['Bliss', 'Samson', 'Ruby'][i]}</HW>
              <Chip accent>{i === 1 ? 'show' : 'pet'}</Chip>
            </div>
            <HP size={9}>4 mo · female</HP>
            <Btn size="sm" dashed style={{ marginTop: 6, width: '100%' }}>Learn More</Btn>
          </Box>
        ))}
      </Row>
    </div>
    {/* Trust strip */}
    <div style={{ padding: '6px 24px', display: 'flex', gap: 12, justifyContent: 'space-between' }}>
      {['AKC Registered', 'Champion Bloodline', '30+ Years'].map((t) => (
        <Box key={t} style={{ flex: 1, textAlign: 'center', padding: '10px 6px' }}>
          <div style={{ width: 22, height: 22, borderRadius: 99, border: `1.5px solid ${SK.accent}`, margin: '0 auto 4px' }} />
          <HP>{t}</HP>
        </Box>
      ))}
    </div>
    <Footer />
  </DesktopFrame>
);

const HomeB_Mosaic = () => (
  <DesktopFrame>
    <NavBar />
    <div style={{ padding: 18 }}>
      {/* Mosaic hero */}
      <Row gap={10} style={{ height: 280 }}>
        <Col w={'58%'} gap={10}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Photo h="100%" label="hero · solo portrait" />
            <div style={{ position: 'absolute', left: 14, top: 14 }}>
              <HP color={SK.paper} style={{ background: SK.ink, padding: '3px 7px' }}>Hosanna Afghan Hounds</HP>
            </div>
          </div>
          <Box style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px' }} fill={SK.paperShade}>
            <HW size={26}>Afghan Hounds, raised with grace.</HW>
            <Btn primary>Available Dogs →</Btn>
          </Box>
        </Col>
        <Col w={'42%'} gap={10}>
          <Row gap={10} style={{ flex: 1 }}>
            <Photo h="100%" label="run" style={{ flex: 1 }} />
            <Photo h="100%" label="stack" style={{ flex: 1 }} />
          </Row>
          <Photo h="46%" label="puppy litter" />
        </Col>
      </Row>
      {/* Strip of dogs */}
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <HW size={20}>This Spring's Litter</HW>
        <HP>4 reserved · 2 available</HP>
      </div>
      <Row gap={8} style={{ marginTop: 8 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Col key={i} gap={4} style={{ flex: 1 }}>
            <Photo h={70} label={`pup ${i + 1}`} />
            <HW size={13}>{['Alf', 'Happy', 'Precious', 'Red', 'Man'][i]}</HW>
            <Chip accent={i < 2} active={i >= 2 && i < 4}>{i < 2 ? 'available' : i < 4 ? 'reserved' : 'sold'}</Chip>
          </Col>
        ))}
      </Row>
    </div>
    <Footer />
  </DesktopFrame>
);

const HomeC_StorySplit = () => (
  <DesktopFrame>
    <NavBar />
    <Row gap={0} style={{ flex: 1, padding: 0, height: 'calc(100% - 100px)' }}>
      {/* Left story column */}
      <Col w={'42%'} gap={14} style={{ padding: '28px 26px', borderRight: `1.5px dashed ${SK.ink}` }}>
        <HP>est. 1998 · The Farley Family</HP>
        <div>
          <HW size={40} style={{ lineHeight: 1.05 }}>A small kennel, a long line.</HW>
          <Underline w={200} />
        </div>
        <Lines count={4} widths={['100%', '94%', '88%', '70%']} />
        <Row gap={10}>
          <Btn primary>Meet the Dogs</Btn>
          <Btn dashed>Pedigree Archive</Btn>
        </Row>
        <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
          <div><HW size={26}>30+</HW><HP size={9}>years breeding</HP></div>
          <div><HW size={26}>40+</HW><HP size={9}>champions</HP></div>
          <div><HW size={26}>AKC</HW><HP size={9}>registered</HP></div>
        </div>
      </Col>
      {/* Right photo + featured dog */}
      <Col w={'58%'} gap={0} style={{ position: 'relative' }}>
        <Photo h="100%" label="hero · regal stance" style={{ borderRadius: 0, border: 'none', borderLeft: 'none' }} />
        <div style={{ position: 'absolute', right: 18, bottom: 18, width: 220, background: SK.paper, border: `1.5px solid ${SK.ink}`, padding: 12, boxShadow: '3px 3px 0 ' + SK.ink }}>
          <HP>Featured · Show Prospect</HP>
          <HW size={22}>"Bliss" — Hosanna's Joy</HW>
          <Lines count={2} />
          <Btn size="sm" primary style={{ marginTop: 6 }}>Inquire about Bliss</Btn>
        </div>
      </Col>
    </Row>
    <Footer />
  </DesktopFrame>
);

const HomeD_BoldType = () => (
  <DesktopFrame>
    <NavBar logo="HOSANNA" />
    <div style={{ padding: '20px 30px 0', position: 'relative' }}>
      <HP>Champion Afghan Hounds · Show & Pet</HP>
      <div style={{ marginTop: 6 }}>
        <HW size={88} style={{ lineHeight: 0.92, letterSpacing: -1 }}>raised</HW>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
          <HW size={88} style={{ lineHeight: 0.92, letterSpacing: -1, color: SK.accent }}>with grace</HW>
          <HP size={11} style={{ marginBottom: 10 }}>since 1998 · Farley Farm</HP>
        </div>
      </div>
      <Row gap={10} style={{ marginTop: 14 }}>
        <Btn primary size="lg">View Available →</Btn>
        <Btn dashed size="lg">Our Litters</Btn>
      </Row>
    </div>
    {/* Horizontal scroll dog tape */}
    <div style={{ marginTop: 22, padding: '12px 0 14px', borderTop: `1.5px solid ${SK.ink}`, borderBottom: `1.5px solid ${SK.ink}`, background: SK.paperShade, position: 'relative' }}>
      <div style={{ position: 'absolute', left: 12, top: -10, background: SK.paper, padding: '0 6px' }}>
        <HP>swipe →</HP>
      </div>
      <Row gap={12} style={{ padding: '0 24px', overflow: 'hidden' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Col key={i} gap={4} style={{ width: 130, flexShrink: 0 }}>
            <Photo h={120} label={`dog ${i + 1}`} />
            <Row gap={6} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <HW size={14}>{['Alf', 'Bliss', 'Ruby', 'Samson', 'Happy', 'Red'][i]}</HW>
              <HP size={9}>{['pet', 'show', 'show', 'pet', 'pet', 'show'][i]}</HP>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
    <Footer />
  </DesktopFrame>
);

Object.assign(window, { HomeA_Editorial, HomeB_Mosaic, HomeC_StorySplit, HomeD_BoldType });
