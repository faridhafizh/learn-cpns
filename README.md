# CPNS Study Companion 📚

> Platform Rangkuman & Rumus Master SKD CPNS (TIU, TWK, TKP) dibangun dengan **Svelte 5**, **TypeScript**, **Tailwind CSS v4**, dan **KaTeX**.

---

## 🚀 Overview

**CPNS Study Companion** (`cpns-svelte`) adalah aplikasi web modern dan interaktif yang dirancang untuk membantu calon Pegawai Negeri Sipil (CPNS) mempelajari dan menguasai materi **Seleksi Kompetensi Dasar (SKD)**. Aplikasi ini menyediakan rangkuman lengkap, rumus cepat, serta contoh soal beserta pembahasan untuk 3 pilar utama tes SKD:

- **TIU (Tes Intelegensia Umum)**: Berhitung cepat, aljabar, geometri, deret angka, penalaran logis & analitis dengan penulisan rumus matematika berbasis **KaTeX**.
- **TWK (Tes Wawasan Kebangsaan)**: Rangkuman Pancasila, UUD 1945, Bhinneka Tunggal Ika, NKRI, Nasionalisme, Integritas, dan Bela Negara.
- **TKP (Tes Karakteristik Pribadi)**: Panduan aspek perilaku, strategi penilaian, dan poin penting pelayanan publik hingga teknologi informasi.

---

## ✨ Key Features

- 📐 **Math & Formula Rendering**: Notasi matematika yang rapi dan responsif berbasis [KaTeX](https://katex.org/).
- 🔍 **Instant Search & Categorization**: Pencarian cepat antar materi, topik, dan contoh soal.
- 🌓 **Dark & Light Mode**: Dukungan tema gelap dan terang dengan deteksi otomatis preferensi sistem.
- 📱 **Fully Responsive UI**: Antarmuka bersih dan fleksibel untuk perangkat desktop, tablet, maupun seluler.
- 🧪 **LaTeX Validation**: Script otomatis untuk memverifikasi validitas rumus matematika dalam himpunan data.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
| :--- | :--- |
| **Frontend Framework** | [Svelte 5](https://svelte.dev/) (dengan Runes `$state`, `$derived`, `$effect`) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Math Typesetting** | [KaTeX](https://katex.org/) |
| **Runtime & PM** | [Bun](https://bun.sh/) |

---

## 📁 Project Structure

```text
cpns-svelte/
├── public/                 # Static assets
├── scripts/
│   └── validate-latex.ts   # Script validasi sintaks KaTeX / LaTeX
├── src/
│   ├── lib/
│   │   ├── components/     # Svelte UI components (Header, Sidebar, Content, Stats, dll.)
│   │   ├── data/           # Data materi SKD (tiu.ts, twk.ts, tkp.ts)
│   │   ├── state/          # Global state management Svelte 5 (theme, ui)
│   │   ├── utils/          # Utility helper (KaTeX renderer, math tools)
│   │   ├── icons.ts        # SVG Icon definitions
│   │   └── types.ts        # TypeScript interface & type definitions
│   ├── App.svelte          # Main Application Component
│   ├── app.css             # Global CSS & Tailwind imports
│   └── main.ts             # App entry point
├── package.json            # Project dependencies & scripts
├── svelte.config.js        # Svelte configuration
├── tsconfig.app.json       # TypeScript application configuration
└── vite.config.ts          # Vite configuration
```

---

## 🏁 Getting Started

### Prerequisites

Pastikan Anda telah menginstal [Bun](https://bun.sh/) (atau Node.js versi 18+):

```bash
bun --version
```

### Installation

1. **Clone repositori**
   ```bash
   git clone https://github.com/user/cpns-svelte.git
   cd cpns-svelte
   ```

2. **Install dependensi**
   ```bash
   bun install
   ```

---

## 🚀 Development & Build

| Perintah | Deskripsi |
| :--- | :--- |
| `bun run dev` | Menjalankan local development server dengan HMR |
| `bun run build` | Mengompilasi aplikasi untuk produksi |
| `bun run preview` | Menjalankan server preview dari hasil build |
| `bun run check` | Memeriksa tipe TypeScript dan sintaks Svelte (`svelte-check`) |
| `bun run validate:math` | Memvalidasi seluruh notasi LaTeX pada materi TIU |

### Development Mode

```bash
bun run dev
```
Buka browser dan navigasikan ke `http://localhost:5173`.

### Type Check & Math Validation

```bash
# Periksa kesalahan tipe TypeScript & Svelte
bun run check

# Validasi ekspresi KaTeX/LaTeX pada data materi
bun run validate:math
```

---

## 📄 License

Project ini dilisensikan di bawah [MIT License](LICENSE).
