import type { Category } from '../types'

export const tiuCategories: Category[] = [
  {
    id: 'deret',
    title: 'Deret Angka & Pola Bilangan',
    short: 'Deret Angka',
    icon: 'deret',
    desc: 'Mengenali pola aritmatika, geometri, dan bilangan khusus.',
    formulas: [
      {
        name: 'Suku ke-n Aritmatika',
        expr: 'Un = a + (n − 1)b',
        latex: String.raw`U_n = a + (n - 1)b`,
        note: 'a = suku pertama, b = beda',
      },
      {
        name: 'Jumlah n Suku Aritmatika',
        expr: 'Sn = n/2 (2a + (n − 1)b)',
        latex: String.raw`S_n = \frac{n}{2}\left(2a + (n - 1)b\right)`,
        note: 'Untuk menjumlahkan deret aritmatika',
      },
      {
        name: 'Suku ke-n Geometri',
        expr: 'Un = a · r^(n−1)',
        latex: String.raw`U_n = a \cdot r^{n-1}`,
        note: 'r = rasio antar suku',
      },
      {
        name: 'Jumlah n Suku Geometri',
        expr: 'Sn = a(r^n − 1)/(r − 1)',
        latex: String.raw`S_n = \frac{a(r^n - 1)}{r - 1}`,
        note: 'Berlaku untuk r > 1',
      },
      {
        name: 'Pola Bilangan Ganjil',
        expr: 'Un = 2n − 1',
        latex: String.raw`U_n = 2n - 1`,
        note: '1, 3, 5, 7, ...',
      },
      {
        name: 'Pola Bilangan Genap',
        expr: 'Un = 2n',
        latex: String.raw`U_n = 2n`,
        note: '2, 4, 6, 8, ...',
      },
    ],
    examples: [
      {
        q: '7, 9, 15, 33, ..., 249. Angka yang tepat untuk mengisi titik-titik adalah ...',
        answer: '87',
        explain: String.raw`Pola deret adalah $3 \times (n - 4)$. Maka suku setelah 33: $3 \times (33 - 4) = 3 \times 29 = 87$.`,
      },
      {
        q: '2, 8, ..., 128, 512, 2.048. Angka yang kosong adalah ...',
        answer: '32',
        explain: String.raw`Pola deret adalah dikali 4 $(n \times 4)$. Maka $8 \times 4 = 32$.`,
      },
      {
        q: '5, 9, 17, 33, 65, ...',
        answer: '129',
        explain: String.raw`Selisih antar suku: $4, 8, 16, 32$. Selisih berikutnya 64. Maka $65 + 64 = 129$.`,
      },
      {
        q: '66, 64, 60, 54, 46, 36, ..., 10',
        answer: '24',
        explain: String.raw`Pola pengurangan: $-2, -4, -6, -8, -10, -12, -14$. Maka $36 - 12 = 24$.`,
      },
    ],
  },
  {
    id: 'aritmetika',
    title: 'Aritmetika Sosial',
    short: 'Aritmetika Sosial',
    icon: 'aritmetika',
    desc: 'Persentase, diskon, untung, dan rugi dalam soal cerita.',
    formulas: [
      {
        name: 'Diskon',
        expr: 'Diskon = %Diskon × Harga Awal',
        latex: String.raw`\text{Diskon} = \%\text{Diskon} \times \text{Harga Awal}`,
        note: 'Potongan harga',
      },
      {
        name: 'Harga Bayar',
        expr: 'Harga Bayar = Harga Awal − Diskon',
        latex: String.raw`\text{Harga Bayar} = \text{Harga Awal} - \text{Diskon}`,
        note: 'Harga setelah diskon',
      },
      {
        name: 'Diskon Berganda',
        expr: 'Total Diskon = 1 − [(1−d1)(1−d2)]',
        latex: String.raw`\text{Total Diskon} = 1 - \left[(1 - d_1)(1 - d_2)\right]`,
        note: 'Diskon 20% + 15% bukan 35%',
      },
      {
        name: 'Untung',
        expr: 'Untung = HJ − HB',
        latex: String.raw`\text{Untung} = \text{HJ} - \text{HB}`,
        note: 'HJ = harga jual, HB = harga beli',
      },
      {
        name: 'Rugi',
        expr: 'Rugi = HB − HJ',
        latex: String.raw`\text{Rugi} = \text{HB} - \text{HJ}`,
        note: 'Terjadi jika HJ < HB',
      },
      {
        name: '% Untung / Rugi',
        expr: '% = (Untung atau Rugi / HB) × 100%',
        latex: String.raw`\% = \frac{\text{Untung atau Rugi}}{\text{HB}} \times 100\%`,
        note: 'Persentase terhadap harga beli',
      },
    ],
    examples: [
      {
        q: 'Harga laptop Rp8.000.000 turun 15%. Harga baru laptop adalah ...',
        answer: 'Rp6.800.000',
        explain: String.raw`Diskon $= 15\% \times 8.000.000 = 1.200.000$. Harga baru $= 8.000.000 - 1.200.000 = \text{Rp}6.800.000$.`,
      },
      {
        q: 'Modal Rp400.000, dijual Rp520.000. Persentase untungnya adalah ...',
        answer: '30%',
        explain: String.raw`$\text{Untung} = 520.000 - 400.000 = 120.000$. $\%\text{Untung} = \frac{120.000}{400.000} \times 100\% = 30\%$.`,
      },
      {
        q: 'Sebuah celana didiskon 50% + 20%. Berapa persentase harga akhir terhadap harga awal?',
        answer: '40%',
        explain: String.raw`Harga akhir $= (1 - 50\%) \times (1 - 20\%) = 0{,}5 \times 0{,}8 = 0{,}4 = 40\%$ dari harga awal. Total diskon efektif $60\%$.`,
      },
      {
        q: 'Paman membeli sepeda Rp750.000, dijual Rp500.000. Persentase kerugiannya adalah ...',
        answer: '33,33%',
        explain: String.raw`$\text{Rugi} = 750.000 - 500.000 = 250.000$. $\%\text{Rugi} = \frac{250.000}{750.000} \times 100\% = 33{,}33\%$.`,
      },
    ],
  },
  {
    id: 'perbandingan',
    title: 'Perbandingan Senilai & Berbalik Nilai',
    short: 'Perbandingan',
    icon: 'perbandingan',
    desc: 'Membandingkan dua besaran, baik searah maupun berbalik.',
    formulas: [
      {
        name: 'Perbandingan Senilai',
        expr: 'a₁ / a₂ = b₁ / b₂',
        latex: String.raw`\frac{a_1}{a_2} = \frac{b_1}{b_2}`,
        note: 'Jika satu naik, yang lain naik',
      },
      {
        name: 'Perbandingan Berbalik Nilai',
        expr: 'a₁ × b₁ = a₂ × b₂',
        latex: String.raw`a_1 \times b_1 = a_2 \times b_2`,
        note: 'Jika satu naik, yang lain turun',
      },
    ],
    examples: [
      {
        q: 'Uang Andi : Budi = 3 : 5. Total uang mereka Rp160.000. Uang Budi adalah ...',
        answer: 'Rp100.000',
        explain: String.raw`Jumlah bagian $= 3 + 5 = 8$. Satu bagian $= 160.000 / 8 = 20.000$. Uang Budi $= 5 \times 20.000 = \text{Rp}100.000$.`,
      },
      {
        q: '12 pekerja menyelesaikan renovasi dalam 3 hari. Jika pekerja menjadi 36 orang, waktu selesainya adalah ...',
        answer: '1 hari',
        explain: String.raw`Perbandingan berbalik nilai: $12 \times 3 = 36 \times t \Rightarrow 36 = 36t \Rightarrow t = 1$ hari.`,
      },
      {
        q: 'Seorang penjahit mampu membuat 60 pasang pakaian dalam 18 hari. Dalam 24 hari, ia dapat membuat ... pasang.',
        answer: '80 pasang',
        explain: String.raw`Perbandingan senilai: $\frac{60}{18} = \frac{x}{24} \Rightarrow x = \frac{60 \times 24}{18} = 80$ pasang.`,
      },
      {
        q: 'Pemborong mampu menyelesaikan pekerjaan 49 hari dengan 64 pekerja. Agar selesai 28 hari, banyak pekerja yang harus ditambahkan adalah ...',
        answer: '48 pekerja',
        explain: String.raw`Berbalik nilai: $49 \times 64 = 28 \times b \Rightarrow 3136 = 28b \Rightarrow b = 112$. Tambahan $= 112 - 64 = 48$ pekerja.`,
      },
    ],
  },
  {
    id: 'rata-rata',
    title: 'Rata-rata (Mean)',
    short: 'Rata-rata',
    icon: 'rata-rata',
    desc: 'Rata-rata tunggal dan rata-rata gabungan dua kelompok data.',
    formulas: [
      {
        name: 'Rata-rata Dasar',
        expr: 'x̄ = Jumlah data / Banyak data',
        latex: String.raw`\bar{x} = \frac{\text{Jumlah data}}{\text{Banyak data}}`,
        note: 'Mean data tunggal',
      },
      {
        name: 'Rata-rata Gabungan',
        expr: 'x̄ = (nA·x̄A + nB·x̄B) / (nA + nB)',
        latex: String.raw`\bar{x} = \frac{n_A\bar{x}_A + n_B\bar{x}_B}{n_A + n_B}`,
        note: 'Menggabungkan dua kelompok',
      },
    ],
    examples: [
      {
        q: 'Rata-rata dari data 12, 15, 18, 20, 25 adalah ...',
        answer: '18',
        explain: String.raw`Jumlah $= 12 + 15 + 18 + 20 + 25 = 90$. Banyak data $= 5$. Rata-rata $= \frac{90}{5} = 18$.`,
      },
      {
        q: 'Nilai rata-rata 15 siswa adalah 95. Jika S masuk, rata-rata menjadi 94. Nilai S adalah ...',
        answer: '79',
        explain: String.raw`Total 15 siswa $= 15 \times 95 = 1.425$. Total 16 siswa $= 16 \times 94 = 1.504$. Nilai S $= 1.504 - 1.425 = 79$.`,
      },
      {
        q: 'Rata-rata 39 siswa adalah 45. Jika Upik digabungkan, rata-rata menjadi 46. Nilai Upik adalah ...',
        answer: '85',
        explain: String.raw`Total 39 siswa $= 39 \times 45 = 1.755$. Total 40 siswa $= 40 \times 46 = 1.840$. Nilai Upik $= 1.840 - 1.755 = 85$.`,
      },
    ],
  },
  {
    id: 'pangkat',
    title: 'Bilangan Berpangkat & Bentuk Akar',
    short: 'Pangkat & Akar',
    icon: 'pangkat',
    desc: 'Sifat-sifat operasi pangkat dan hubungannya dengan akar.',
    formulas: [
      {
        name: 'Perkalian Pangkat',
        expr: 'a^m × a^n = a^(m+n)',
        latex: String.raw`a^m \times a^n = a^{m+n}`,
        note: 'Basis sama, pangkat dijumlah',
      },
      {
        name: 'Pembagian Pangkat',
        expr: 'a^m / a^n = a^(m−n)',
        latex: String.raw`\frac{a^m}{a^n} = a^{m-n}`,
        note: 'Basis sama, pangkat dikurang',
      },
      {
        name: 'Pangkat Berpangkat',
        expr: '(a^m)^n = a^(m×n)',
        latex: String.raw`(a^m)^n = a^{m \times n}`,
        note: 'Pangkat dikali',
      },
      {
        name: 'Bentuk Akar',
        expr: '√(a^m) = a^(m/2)',
        latex: String.raw`\sqrt{a^m} = a^{m/2}`,
        note: 'Akar sebagai pangkat pecahan',
      },
    ],
    examples: [
      {
        q: String.raw`Nilai dari $(2^3 \times 2^4) / 2^5$ adalah ...`,
        answer: '4',
        explain: String.raw`$2^3 \times 2^4 = 2^{3+4} = 2^7$. Lalu $\frac{2^7}{2^5} = 2^{7-5} = 2^2 = 4$.`,
      },
      {
        q: String.raw`Nilai dari $(3^2)^3$ adalah ...`,
        answer: '729',
        explain: String.raw`$(3^2)^3 = 3^{2 \times 3} = 3^6 = 729$.`,
      },
      {
        q: String.raw`Bentuk sederhana dari $\sqrt{a^6}$ adalah ...`,
        answer: 'a³',
        explain: String.raw`$\sqrt{a^6} = a^{6/2} = a^3$.`,
      },
    ],
  },
  {
    id: 'pecahan',
    title: 'Operasi Pecahan',
    short: 'Operasi Pecahan',
    icon: 'pecahan',
    desc: 'Penjumlahan, pengurangan, perkalian, dan pembagian pecahan.',
    formulas: [
      {
        name: 'Penjumlahan / Pengurangan',
        expr: 'a/b ± c/d = (a·d ± c·b) / (b·d)',
        latex: String.raw`\frac{a}{b} \pm \frac{c}{d} = \frac{a \cdot d \pm c \cdot b}{b \cdot d}`,
        note: 'Samakan penyebut',
      },
      {
        name: 'Perkalian',
        expr: 'a/b × c/d = (a·c) / (b·d)',
        latex: String.raw`\frac{a}{b} \times \frac{c}{d} = \frac{a \cdot c}{b \cdot d}`,
        note: 'Pembilang × pembilang',
      },
      {
        name: 'Pembagian',
        expr: 'a/b ÷ c/d = (a·d) / (b·c)',
        latex: String.raw`\frac{a}{b} \div \frac{c}{d} = \frac{a \cdot d}{b \cdot c}`,
        note: 'Kali kebalikan',
      },
    ],
    examples: [
      {
        q: String.raw`Hasil dari $\frac{3}{4} \times 120 + 25\% \times 80 - \frac{5}{8} \times 64$ adalah ...`,
        answer: '70',
        explain: String.raw`$\frac{3}{4} \times 120 = 90$; $25\% \times 80 = 20$; $\frac{5}{8} \times 64 = 40$. Maka $90 + 20 - 40 = 70$.`,
      },
      {
        q: String.raw`Hasil dari $\frac{2}{3} + \frac{1}{4}$ adalah ...`,
        answer: '11/12',
        explain: String.raw`Samakan penyebut menjadi 12: $\frac{2 \times 4}{3 \times 4} + \frac{1 \times 3}{4 \times 3} = \frac{8}{12} + \frac{3}{12} = \frac{11}{12}$.`,
      },
      {
        q: String.raw`Hasil dari $\frac{3}{5} \div \frac{2}{7}$ adalah ...`,
        answer: '21/10 atau 2,1',
        explain: String.raw`$\frac{3}{5} \div \frac{2}{7} = \frac{3}{5} \times \frac{7}{2} = \frac{21}{10} = 2{,}1$.`,
      },
    ],
  },
]
