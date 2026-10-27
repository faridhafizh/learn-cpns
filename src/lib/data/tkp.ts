import type { Category } from '../types'

export const tkpCategories: Category[] = [
  {
    id: 'pelayanan',
    title: 'Pelayanan Publik',
    short: 'Pelayanan Publik',
    icon: 'pelayanan',
    desc: 'Sikap responsif, ramah, dan solutif dalam melayani masyarakat.',
    formulas: [
      {
        name: 'Prinsip',
        expr: 'Cepat, tepat, ramah',
        note: 'Utamakan kepuasan publik',
      },
      {
        name: 'Skor 5',
        expr: 'Responsif & solutif',
        note: 'Pilih tindakan paling proaktif',
      },
    ],
    examples: [
      {
        q: 'Anda seorang petugas layanan. Seorang warga datang dengan marah karena berkasnya belum selesai padahal sudah dijanjikan selesai hari ini. Sikap Anda adalah ...',
        options: [
          'A. Meminta maaf dan segera mengecek serta menyelesaikan berkas',
          'B. Menjelaskan bahwa itu bukan tugas Anda',
          'C. Menyuruh warga menunggu tanpa kejelasan',
          'D. Menanggapi dengan nada tinggi',
          'E. Meninggalkan warga begitu saja',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan sikap responsif, bertanggung jawab, dan solutif. Meminta maaf dan segera menyelesaikan masalah adalah inti pelayanan prima.',
      },
      {
        q: 'Anda melihat rekan kerja melayani warga dengan tidak ramah. Tindakan Anda adalah ...',
        options: [
          'A. Menegur dengan baik dan mengingatkan prinsip pelayanan',
          'B. Diam saja karena bukan urusan Anda',
          'C. Melaporkan langsung ke atasan tanpa menegur',
          'D. Ikut bersikap tidak ramah',
          'E. Menjauhi rekan tersebut',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan kepedulian dan profesionalisme tanpa mempermalukan rekan. Teguran santun lebih efektif daripada langsung melapor.',
      },
    ],
  },
  {
    id: 'jejaring',
    title: 'Jejaring Kerja',
    short: 'Jejaring Kerja',
    icon: 'jejaring',
    desc: 'Membangun relasi, koordinasi, dan kerja sama yang efektif.',
    formulas: [
      {
        name: 'Kolaborasi',
        expr: 'Bangun relasi positif',
        note: 'Saling mendukung antar unit',
      },
      {
        name: 'Komunikasi',
        expr: 'Efektif & terbuka',
        note: 'Dengarkan aktif, sampaikan jelas',
      },
    ],
    examples: [
      {
        q: 'Anda mendapat tugas baru yang memerlukan data dari divisi lain. Tindakan Anda adalah ...',
        options: [
          'A. Menghubungi divisi terkait dan berkoordinasi dengan baik',
          'B. Menunggu data datang sendiri',
          'C. Meminta atasan memerintah divisi lain',
          'D. Mengerjakan tanpa data lengkap',
          'E. Menyalahkan divisi lain jika hasil kurang baik',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan inisiatif membangun jejaring kerja dan koordinasi yang baik. Kolaborasi aktif lebih dihargai daripada menunggu pasif.',
      },
      {
        q: 'Rekan kerja Anda kesulitan menyelesaikan tugas. Sikap Anda adalah ...',
        options: [
          'A. Membantu sesuai kemampuan dan berbagi solusi',
          'B. Membiarkan karena bukan tugas Anda',
          'C. Mengambil alih seluruh pekerjaannya',
          'D. Melaporkan ke atasan agar ia ditegur',
          'E. Menertawakannya',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) mencerminkan kerja sama tim dan empati. Membantu sesuai kapasitas adalah wujud jejaring kerja yang sehat.',
      },
    ],
  },
  {
    id: 'sosbud',
    title: 'Sosial Budaya',
    short: 'Sosial Budaya',
    icon: 'sosbud',
    desc: 'Toleransi, adaptasi, dan penghargaan terhadap keberagaman.',
    formulas: [
      {
        name: 'Toleransi',
        expr: 'Hormati perbedaan',
        note: 'Keberagaman sebagai kekuatan',
      },
      {
        name: 'Adaptasi',
        expr: 'Menyesuaikan diri',
        note: 'Tanpa kehilangan jati diri',
      },
    ],
    examples: [
      {
        q: 'Anda ditempatkan di daerah dengan budaya yang sangat berbeda. Sikap Anda adalah ...',
        options: [
          'A. Mempelajari dan menghormati budaya setempat',
          'B. Tetap dengan kebiasaan sendiri',
          'C. Menilai budaya setempat kurang baik',
          'D. Menghindari interaksi sosial',
          'E. Memaksakan budaya sendiri kepada warga',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan sikap terbuka dan menghargai keberagaman. Adaptasi budaya mempercepat proses kerja dan membangun kepercayaan.',
      },
      {
        q: 'Ada rekan kerja yang berbeda agama merayakan hari raya. Tindakan Anda adalah ...',
        options: [
          'A. Memberi ucapan selamat dan menghormati',
          'B. Diam saja',
          'C. Menegur karena berbeda keyakinan',
          'D. Menjauhi rekan tersebut',
          'E. Melarangnya merayakan',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) mencerminkan toleransi dan sikap saling menghormati antarumat beragama sesuai nilai Pancasila.',
      },
    ],
  },
  {
    id: 'tik',
    title: 'Teknologi Informasi & Komunikasi',
    short: 'TIK',
    icon: 'tik',
    desc: 'Adaptif terhadap teknologi dan bijak dalam etika digital.',
    formulas: [
      {
        name: 'Adaptif',
        expr: 'Manfaatkan teknologi',
        note: 'Tingkatkan efisiensi kerja',
      },
      {
        name: 'Bijak',
        expr: 'Etika digital',
        note: 'Jaga data & privasi',
      },
    ],
    examples: [
      {
        q: 'Anda diminta mengikuti pelatihan aplikasi baru untuk pekerjaan. Sikap Anda adalah ...',
        options: [
          'A. Antusias mengikuti dan mempraktikkannya',
          'B. Mengikuti karena terpaksa',
          'C. Menolak karena sudah nyaman dengan cara lama',
          'D. Mengikuti sambil bermain HP',
          'E. Meminta orang lain mengerjakan',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan kemauan belajar dan adaptasi teknologi. Antusiasme mempercepat penguasaan aplikasi baru.',
      },
      {
        q: 'Anda menerima email berisi data penting dari atasan. Tindakan Anda adalah ...',
        options: [
          'A. Menyimpan dengan aman dan tidak membagikannya sembarangan',
          'B. Meneruskan ke semua rekan',
          'C. Mengunggah ke media sosial',
          'D. Membagikan ke grup keluarga',
          'E. Menghapusnya',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) mencerminkan etika digital dan menjaga kerahasiaan data. Data penting tidak boleh disebarluaskan tanpa izin.',
      },
    ],
  },
  {
    id: 'profesionalisme',
    title: 'Profesionalisme',
    short: 'Profesionalisme',
    icon: 'profesionalisme',
    desc: 'Tanggung jawab, etika kerja, dan dedikasi terhadap tugas.',
    formulas: [
      {
        name: 'Tanggung Jawab',
        expr: 'Selesaikan tugas',
        note: 'Tepat waktu dan tuntas',
      },
      {
        name: 'Etika Kerja',
        expr: 'Jujur & disiplin',
        note: 'Sesuai aturan yang berlaku',
      },
    ],
    examples: [
      {
        q: 'Anda menemukan kesalahan dalam laporan yang akan diserahkan ke atasan. Tindakan Anda adalah ...',
        options: [
          'A. Memperbaiki dan melaporkan perbaikan kepada atasan',
          'B. Menyerahkan apa adanya',
          'C. Menyembunyikan kesalahan',
          'D. Menyalahkan rekan kerja',
          'E. Menunda penyerahan',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan profesionalisme dan tanggung jawab. Memperbaiki kesalahan sebelum diserahkan adalah wujud integritas kerja.',
      },
      {
        q: 'Atasan memberikan tugas di luar jam kerja dengan tenggat mendesak. Sikap Anda adalah ...',
        options: [
          'A. Mengerjakan dengan sungguh-sungguh dan menyelesaikan tepat waktu',
          'B. Menolak karena di luar jam kerja',
          'C. Mengerjakan asal-asalan',
          'D. Meminta rekan mengerjakan',
          'E. Mengabaikan tugas',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) mencerminkan dedikasi dan tanggung jawab. Menyelesaikan tugas mendesak dengan sungguh-sungguh adalah bentuk profesionalisme.',
      },
    ],
  },
  {
    id: 'radikalisme',
    title: 'Anti Radikalisme',
    short: 'Anti Radikalisme',
    icon: 'radikalisme',
    desc: 'Menolak paham radikal, menjaga kerukunan, dan bersikap moderat.',
    formulas: [
      {
        name: 'Waspada',
        expr: 'Kenali paham radikal',
        note: 'Tolak segala bentuk kekerasan',
      },
      {
        name: 'Moderat',
        expr: 'Beragama dengan santun',
        note: 'Hargai perbedaan keyakinan',
      },
    ],
    examples: [
      {
        q: 'Anda menerima pesan berantai berisi ajakan memboikot kelompok tertentu karena berbeda keyakinan. Tindakan Anda adalah ...',
        options: [
          'A. Tidak meneruskan pesan dan mengingatkan pengirim dengan santun',
          'B. Meneruskan ke semua kontak',
          'C. Membalas dengan makian',
          'D. Diam saja',
          'E. Ikut menyebarkan',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) menunjukkan sikap bijak menolak radikalisme dan menjaga kerukunan. Pesan berantai provokatif harus diputus rantainya.',
      },
      {
        q: 'Seorang rekan mulai menunjukkan sikap intoleran terhadap perbedaan. Sikap Anda adalah ...',
        options: [
          'A. Mengajak diskusi santun dan menanamkan nilai toleransi',
          'B. Menjauhi rekan tersebut',
          'C. Melaporkan langsung tanpa dialog',
          'D. Ikut bersikap intoleran',
          'E. Mendiamkannya',
        ],
        answer: 'A',
        explain:
          'Pilihan A (skor 5) mencerminkan pendekatan dialogis dan preventif. Diskusi santun lebih efektif menumbuhkan kesadaran toleransi.',
      },
    ],
  },
]
