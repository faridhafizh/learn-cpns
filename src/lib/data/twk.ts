import type { Category } from '../types'

export const twkCategories: Category[] = [
  {
    id: 'pancasila',
    title: 'Pancasila',
    short: 'Pancasila',
    icon: 'pancasila',
    desc: 'Sejarah perumusan, kedudukan, dan pengamalan Pancasila.',
    formulas: [
      {
        name: 'Sidang BPUPKI I',
        expr: '29 Mei – 1 Juni 1945',
        note: 'Merumuskan dasar negara',
      },
      {
        name: 'Piagam Jakarta',
        expr: '22 Juni 1945',
        note: 'Disusun oleh Panitia Sembilan',
      },
      {
        name: 'Pengesahan Pancasila',
        expr: '18 Agustus 1945',
        note: 'Disahkan oleh PPKI bersama UUD 1945',
      },
      {
        name: 'Sila ke-1 Piagam Jakarta',
        expr: 'Ketuhanan dengan kewajiban menjalankan syariat Islam...',
        note: 'Diubah menjadi Ketuhanan Yang Maha Esa',
      },
    ],
    examples: [
      {
        q: 'Pancasila sebagai dasar negara secara resmi disahkan pada tanggal ...',
        answer: '18 Agustus 1945',
        explain:
          'PPKI mengesahkan UUD 1945 yang memuat rumusan Pancasila pada 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan.',
      },
      {
        q: 'Rumusan Pancasila dalam Piagam Jakarta yang kemudian diubah terdapat pada sila ke- ...',
        answer: 'Pertama',
        explain:
          "Sila pertama Piagam Jakarta berbunyi 'Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya', kemudian diubah menjadi 'Ketuhanan Yang Maha Esa' demi persatuan bangsa.",
      },
      {
        q: "Tokoh yang pertama kali mengusulkan nama 'Pancasila' adalah ...",
        answer: 'Ir. Soekarno',
        explain:
          'Pada sidang BPUPKI tanggal 1 Juni 1945, Ir. Soekarno mengusulkan nama Pancasila (panca = lima, sila = dasar) untuk dasar negara Indonesia.',
      },
      {
        q: 'Kedudukan Pancasila bagi bangsa Indonesia adalah sebagai ...',
        answer: 'Dasar negara dan ideologi bangsa',
        explain:
          'Pancasila berfungsi sebagai dasar negara (falsafah negara), ideologi nasional, pandangan hidup bangsa, dan sumber dari segala sumber hukum.',
      },
    ],
  },
  {
    id: 'uud1945',
    title: 'UUD 1945',
    short: 'UUD 1945',
    icon: 'uud1945',
    desc: 'Sejarah, amandemen, dan pasal-pasal penting UUD 1945.',
    formulas: [
      {
        name: 'Pengesahan UUD 1945',
        expr: '18 Agustus 1945',
        note: 'Oleh PPKI',
      },
      {
        name: 'Amandemen',
        expr: '4 kali (1999 – 2002)',
        note: 'Perubahan bertahap',
      },
      {
        name: 'Masa Jabatan Presiden',
        expr: '5 tahun, maksimal 2 periode',
        note: 'Pasal 7 UUD 1945',
      },
      {
        name: 'Lembaga Pengubah UUD',
        expr: 'MPR',
        note: 'Pasal 3 ayat (1) UUD 1945',
      },
    ],
    examples: [
      {
        q: 'UUD 1945 telah mengalami amandemen sebanyak ...',
        answer: '4 kali',
        explain:
          'Amandemen UUD 1945 dilakukan sebanyak empat kali, yaitu pada tahun 1999, 2000, 2001, dan 2002 dalam Sidang Umum/Majelis MPR.',
      },
      {
        q: 'Masa jabatan presiden dan wakil presiden menurut UUD 1945 hasil amandemen adalah ...',
        answer: '5 tahun, maksimal 2 periode',
        explain:
          'Pasal 7 UUD 1945: Presiden dan Wakil Presiden memegang jabatan selama lima tahun, dan sesudahnya dapat dipilih kembali dalam jabatan yang sama, hanya untuk satu kali masa jabatan.',
      },
      {
        q: 'Lembaga negara yang berwenang mengubah UUD 1945 adalah ...',
        answer: 'MPR',
        explain:
          'Pasal 3 ayat (1) UUD 1945: Majelis Permusyawaratan Rakyat berwenang mengubah dan menetapkan Undang-Undang Dasar.',
      },
      {
        q: 'Pasal 27 ayat (3) UUD 1945 mengatur tentang ...',
        answer: 'Hak dan kewajiban bela negara',
        explain:
          "Pasal 27 ayat (3): 'Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.'",
      },
    ],
  },
  {
    id: 'bhinneka',
    title: 'Bhinneka Tunggal Ika',
    short: 'Bhinneka Tunggal Ika',
    icon: 'bhinneka',
    desc: 'Semboyan persatuan dalam keberagaman bangsa Indonesia.',
    formulas: [
      {
        name: 'Sumber',
        expr: 'Kitab Sutasoma',
        note: 'Karya Mpu Tantular',
      },
      {
        name: 'Makna',
        expr: 'Berbeda-beda tetapi tetap satu',
        note: 'Persatuan dalam keberagaman',
      },
      {
        name: 'Kedudukan',
        expr: 'Semboyan negara',
        note: 'Tercantum pada pita Garuda Pancasila',
      },
    ],
    examples: [
      {
        q: 'Semboyan Bhinneka Tunggal Ika diambil dari kitab ...',
        answer: 'Sutasoma',
        explain:
          'Semboyan ini diambil dari kitab Sutasoma karya Mpu Tantular yang ditulis pada masa Kerajaan Majapahit.',
      },
      {
        q: 'Makna Bhinneka Tunggal Ika adalah ...',
        answer: 'Berbeda-beda tetapi tetap satu',
        explain:
          'Menggambarkan persatuan dan kesatuan bangsa Indonesia yang terdiri dari beragam suku, agama, ras, dan budaya, namun tetap satu dalam ikatan NKRI.',
      },
      {
        q: 'Semboyan Bhinneka Tunggal Ika tercantum pada ...',
        answer: 'Pita yang dicengkeram kaki Burung Garuda',
        explain:
          "Pada lambang negara Garuda Pancasila, terdapat pita di kaki Garuda yang bertuliskan 'Bhinneka Tunggal Ika'.",
      },
    ],
  },
  {
    id: 'nkri',
    title: 'NKRI (Negara Kesatuan Republik Indonesia)',
    short: 'NKRI',
    icon: 'nkri',
    desc: 'Konsep negara kepulauan dan batas wilayah Indonesia.',
    formulas: [
      {
        name: 'Deklarasi Djuanda',
        expr: '13 Desember 1957',
        note: 'Konsep negara kepulauan (archipelagic state)',
      },
      {
        name: 'UNCLOS',
        expr: '1982',
        note: 'Diakui internasional, diratifikasi 1994',
      },
      {
        name: 'Batas Wilayah',
        expr: 'Darat, laut, udara',
        note: 'Sesuai hukum internasional',
      },
    ],
    examples: [
      {
        q: 'Deklarasi Djuanda berkaitan erat dengan ...',
        answer: 'Konsep negara kepulauan (archipelagic state)',
        explain:
          'Deklarasi Djuanda 13 Desember 1957 menyatakan bahwa laut di antara pulau-pulau Indonesia menjadi bagian dari wilayah NKRI, bukan memisahkan pulau-pulau.',
      },
      {
        q: 'Pengakuan internasional atas konsep negara kepulauan Indonesia diperoleh melalui ...',
        answer: 'UNCLOS 1982',
        explain:
          'Konvensi Hukum Laut PBB (UNCLOS) 1982 mengakui konsep negara kepulauan. Indonesia meratifikasinya melalui UU No. 17 Tahun 1985.',
      },
      {
        q: 'Wilayah NKRI menurut UUD 1945 meliputi ...',
        answer: 'Daratan, laut, dan udara',
        explain:
          "Pasal 25A UUD 1945: 'Negara Kesatuan Republik Indonesia adalah sebuah negara kepulauan yang berciri Nusantara dengan wilayah yang batas-batas dan hak-haknya ditetapkan dengan undang-undang.'",
      },
    ],
  },
  {
    id: 'nasionalisme',
    title: 'Nasionalisme & Integritas',
    short: 'Nasionalisme',
    icon: 'nasionalisme',
    desc: 'Cinta tanah air dan konsistensi nilai dalam kehidupan berbangsa.',
    formulas: [
      {
        name: 'Nasionalisme',
        expr: 'Cinta tanah air',
        note: 'Menempatkan kepentingan bangsa di atas pribadi',
      },
      {
        name: 'Integritas',
        expr: 'Konsistensi nilai & tindakan',
        note: 'Jujur, disiplin, tanggung jawab',
      },
      {
        name: 'Cinta Tanah Air',
        expr: 'Pasal 27 ayat (3)',
        note: 'Wujud bela negara',
      },
    ],
    examples: [
      {
        q: 'Sikap nasionalisme dapat diwujudkan dengan cara ...',
        answer: 'Menggunakan produk dalam negeri',
        explain:
          'Nasionalisme diwujudkan dengan mencintai produk dalam negeri, menjaga budaya, membayar pajak, dan berkontribusi positif bagi bangsa.',
      },
      {
        q: 'Integritas seorang ASN tercermin dari ...',
        answer: 'Konsistensi antara ucapan dan perbuatan',
        explain:
          'Integritas berarti memiliki konsistensi antara nilai, ucapan, dan tindakan, serta menjunjung tinggi kejujuran dan tanggung jawab.',
      },
      {
        q: 'Upaya bela negara diatur dalam UUD 1945 Pasal ...',
        answer: '27 ayat (3) dan Pasal 30',
        explain:
          'Pasal 27 ayat (3) mengatur hak dan kewajiban bela negara, sedangkan Pasal 30 mengatur pertahanan dan keamanan negara.',
      },
    ],
  },
  {
    id: 'belanegara',
    title: 'Bela Negara',
    short: 'Bela Negara',
    icon: 'belanegara',
    desc: 'Dasar hukum dan wujud bela negara bagi warga negara.',
    formulas: [
      {
        name: 'Dasar Hukum',
        expr: 'Pasal 27 ayat (3) & Pasal 30',
        note: 'UUD 1945',
      },
      {
        name: 'UU Terkait',
        expr: 'UU No. 3 Tahun 2002',
        note: 'Tentang Pertahanan Negara',
      },
      {
        name: 'Komponen',
        expr: 'Utama & Cadangan',
        note: 'TNI, Polri, dan rakyat',
      },
    ],
    examples: [
      {
        q: 'Dasar hukum bela negara dalam UUD 1945 adalah ...',
        answer: 'Pasal 27 ayat (3) dan Pasal 30',
        explain:
          'Pasal 27 ayat (3) mengatur hak dan kewajiban bela negara, sedangkan Pasal 30 mengatur pertahanan dan keamanan negara.',
      },
      {
        q: 'Undang-undang yang mengatur pertahanan negara adalah ...',
        answer: 'UU No. 3 Tahun 2002',
        explain:
          'UU No. 3 Tahun 2002 tentang Pertahanan Negara mengatur sistem pertahanan semesta yang melibatkan seluruh warga negara.',
      },
      {
        q: 'Bentuk bela negara bagi pelajar dapat dilakukan dengan ...',
        answer: 'Belajar dengan tekun dan menjaga persatuan',
        explain:
          'Bela negara tidak selalu berupa angkat senjata. Bagi pelajar, dapat diwujudkan dengan belajar tekun, menaati hukum, dan menjaga persatuan bangsa.',
      },
    ],
  },
]
