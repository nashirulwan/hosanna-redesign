# Hosanna Afghan Hounds — Concept Redesign

Final project for **Human-Computer Interaction (IMK)** course — a redesign of [hosanna1.com](https://hosanna1.com), an Afghan Hound breeder website that has been running since 1998 with a late-1990s design.

This redesign is based on an analysis of **17 UI/UX principles** and includes:

1. **User Persona** — 3 user personas (potential buyer, dog lover, researcher/breeder)
2. **Empathy Map Canvas (EMC)** — feelings, thoughts, behaviors, and pain points for each persona
3. **Customer Journey Map (CJM)** — user journey from aware → consider → adopt → after care
4. **Problem Statement** — high-priority issues that became the basis for redesign

> ⚠️ **Disclaimer** — This is an independent design study for portfolio purposes. It is **not
> affiliated with, commissioned by, or endorsed by** Hosanna Afghan Hounds. All brand
> references remain the property of their owner. The original site lives at
> [hosanna1.com](https://hosanna1.com).

---

## Before → After

| Original (1998-era) | Redesign concept |
| --- | --- |
| <img src="docs/before-original-site.png" width="400"> | <img src="docs/Home.png" width="400"> |

> See the [live demo](https://nashirulwan.github.io/hosanna-redesign/) for the full interactive experience.

---

## Wireframes

The redesign started with low-fidelity wireframes to explore multiple layout directions before committing to a final design.

### Homepage Directions (4 Concepts)

| A - Editorial | B - Photo Mosaic | C - Story Split | D - Bold Type |
| --- | --- | --- | --- |
| <img src="docs/A _ Editorial.png" width="400"> | <img src="docs/B _ Photo mosaic.png" width="400"> | <img src="docs/C _ Story split.png" width="400"> | <img src="docs/D _ Bold type.png" width="400"> |

> Each direction uses the same content but with a very different visual posture — from editorial to photo-driven to type-focused.

### Available Dogs

| A - Filtered Grid | B - Empty + Waitlist |
| --- | --- |
| <img src="docs/A _ Filtered grid.png" width="400"> | <img src="docs/B _ Empty _ waitlist.png" width="400"> |

> Filterable grid for browsing dogs, plus empty state with waitlist signup.

### Dog Profile

| A - Two-Column Classic | B - Editorial Full-Bleed |
| --- | --- |
| <img src="docs/A _ Two-column classic.png" width="400"> | <img src="docs/B _ Editorial full-bleed.png" width="400"> |

> Two layout options: structured two-column vs full-bleed editorial.

### Contact

| A - Form + Kennel Info | B - Review Step |
| --- | --- |
| <img src="docs/A _ Form _ kennel info.png" width="400"> | <img src="docs/B _ Review step.png" width="400"> |

> Contact flow with form + confirmation step before sending.

---

## What's in here

| Stage | File | What it is |
| --- | --- | --- |
| **Hi-fi prototype** | [`index.html`](index.html) | The final interactive redesign — Home, Available Dogs, Dog Profile, Contact. |
| **Wireframes** | [`wireframes.html`](wireframes.html) | Low-fidelity exploration: layout directions, design tokens, mobile sketches. |
| Hi-fi source | `hi-fi/` | Components, page code, CSS design tokens, sample data. |
| Wireframe source | `wireframes/` | The sketch-style component library and page variants. |
| Reference | `docs/` | Screenshots of the original site, wireframes, and hi-fi redesign. |
| Archive | `archive/` | Earlier intermediate exports — kept for history, not used by the live pages. |

---

## Proses Redesign

### 1. Analisis 17 Prinsip UI/UX

Website asli [hosanna1.com](https://hosanna1.com) dianalisis berdasarkan 17 prinsip UI/UX untuk mengidentifikasi kelemahan desain:

| No | Prinsip | Penjelasan |
| --- | --- | --- |
| 1 | **User Compatibility** | Sesuai dengan kebutuhan user (warna, ukuran, keterbacaan, font) |
| 2 | **Product Compatibility** | Desain produk sesuai dengan tujuan pembuatannya |
| 3 | **Task Compatibility** | Desain mendukung pelaksanaan tugas yang diemban |
| 4 | **Workflow Compatibility** | Sesuai dengan alur/urutan kerja |
| 5 | **Simplicity** | Desain sederhana dan membantu user menyelesaikan task |
| 6 | **Consistency** | Konsistensi dalam konsep desain |
| 7 | **Familiarity** | Desain mendekati kelaziman yang telah diterima masyarakat |
| 8 | **Flexibility** | Fleksibel dalam melayani berbagai variasi kebutuhan user |
| 9 | **Responsiveness** | Daya tanggap terhadap input user |
| 10 | **Control** | Menyediakan kendali proses untuk mencegah kesalahan |
| 11 | **Robustness** | Kehandalan dalam menangani kemacetan system atau kesalahan user |
| 12 | **Protection** | Sistem memberi user rasa nyaman walaupun telah melakukan kesalahan |
| 13 | **WYSIWYG** | What You See Is What You Get — tampilan saat editing sama dengan output |
| 14 | **Direct Manipulation** | Menyediakan tool untuk aksi-reaksi, customisasi, atau manipulasi |
| 15 | **Invisible Technology** | Tampilkan fungsionalitasnya, tutupi kerumitan teknologi |
| 16 | **Ease of Learning** | Kemudahan untuk dipelajari dalam waktu relatif singkat |
| 17 | **Ease of Use** | Kemudahan untuk digunakan |

### 2. User Persona (3 Orang)

| Persona | Deskripsi |
|---------|-----------|
| **Calon Pembeli** | Mencari anjing Afghan Hound berkualitas untuk dipelihara |
| **Pecinta Anjing** | Ingin adopsi atau sekadar melihat koleksi anjing |
| **Peneliti/Breeder** | Mencari informasi tentang garis keturunan dan reputasi peternak |

### 3. Empathy Map Canvas (EMC)

Tiap persona dianalisis perasaannya:
- **Think & Feel:** Apa yang dipikirkan dan dirasakan?
- **See:** Apa yang dilihat di sekitarnya?
- **Hear:** Apa yang didengar dari orang lain?
- **Say & Do:** Apa yang dilakukan dan dikatakan?
- **Pain:** Apa yang membuat frustasi?
- **Gain:** Apa yang diharapkan?

### 4. Customer Journey Map (CJM)

Perjalanan pengguna dari awal sampai akhir:

```
Aware → Consider → Contact → Adopt → After Care
  │         │          │         │         │
  ▼         ▼          ▼         ▼         ▼
Google    Browse     Submit    Receive   Follow
Search    Collection Form      Dog       Up
```

### 5. Problem Statement

Berdasarkan analisis 17 prinsip, masalah **prioritas tinggi** yang menjadi dasar redesign:

> **Website asli tidak mobile-friendly, navigasi rumit, dan tidak membangun kepercayaan.**
> Pengguna kesulitan menemukan informasi kontak, melihat koleksi anjing, dan memahami
> proses adopsi/pembelian.

---

## Design Approach

Redesign berfokus pada kesederhanaan dan kepercayaan:

- **Mempertahankan identitas asli** — AKC registered, champion-sired hounds, breeding online sejak 1998, motto Psalm 23, dan email kontak asli.
- **Menyederhanakan perjalanan** — satu jalur kontak yang jelas, formulir satu langkah.
- **Bahasa manusia** — ditulis seperti keluarga peternak bicara, bukan bahasa marketing.
- **Design system** — palet navy/gold/off-white, spacing 8px, font Playfair Display + Inter.

> Nama anjing, foto, dan detail litter dalam prototipe adalah **placeholder** — siap diganti dengan konten asli.

---

## Tech

No build step. Everything runs straight in the browser:

- **React 18** + **Babel Standalone** (loaded from CDN)
- Plain **CSS** with custom properties (design tokens)
- Fonts via Google Fonts

---

## Run it locally

```bash
npx serve .
```

Then open:

- **Hi-fi redesign** → http://localhost:3000/index.html
- **Wireframes** → http://localhost:3000/wireframes.html

(Any static file server works — the pages just need to be served over HTTP, not opened as
`file://`, because they fetch the `.jsx` sources.)
