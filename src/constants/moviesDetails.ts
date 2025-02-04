interface MovieDetails {
  id: string;
  title: string;
  year: number;
  titleBgColor: string;
  directors: string[];
  writters?: string[];
  cast: string[];
  mainImage: string;
  galleryImages: string[];
}

export const movieDetails: MovieDetails[] = [
  {
    id: "mallik-bari",
    title: "Mallick Bari",
    year: 2009,
    titleBgColor: "#1B1B1B",
    directors: ["Anirban Chakraborty", "P.J. Joseph"],
    cast: [
      "Sabyasachi Chakraborty",
      "Rimjhim Mitra",
      "Swarma Kamal Dutta",
      "Kanchan Mallick",
      "Rishi Koushik",
      "Paoli Dam",
      "Biswanath Basu",
    ],
    mainImage: "https://i.ibb.co/jw0zjSP/maxresdefault.jpg",
    galleryImages: [
      "https://i.ibb.co/PY1TZPJ/thumb.jpg",
      "https://i.ibb.co/dJHcYM42/Whats-App-Image-2025-02-04-at-12-53-03-18cde95f.jpg",
      "https://i.ibb.co/Y51HNcn/Whats-App-Image-2025-02-04-at-12-53-04-619e39e0.jpg",
      "https://i.ibb.co/m5Hht5M7/Whats-App-Image-2025-02-04-at-12-53-04-bb54deb0.jpg",
    ],
  },
  {
    id: "piklur-janala",
    title: "Piklur Janala",
    year: 2017,
    titleBgColor: "#CE2020",
    directors: ["Anirban Chakraborty"],
    cast: ["Pulokita Ghosh", "Amlan Majumdar", "Joy Sengupta"],
    //mainImage: "https://i.ibb.co/fHbbwf9/images-1.png",
    mainImage: "https://i.ibb.co/Rk4GV5Kb/IMG-20170123-WA0005.jpg",
    galleryImages: [
      "https://i.ibb.co/99ZM7ZK8/DSC1765.jpg",
      "https://i.ibb.co/9HLMkVH6/DSC1670.jpg",
      "https://i.ibb.co/DHYzq81F/KAU-6954.jpg",
      "https://i.ibb.co/5hWQdgBZ/IMG-9902.jpg",
      "https://i.ibb.co/HT8Jr5j7/KAU-6885.jpg",
    ],
  },
  {
    id: "Jah-kala",
    title: "Jah Kala",
    year: 2019,
    titleBgColor: "#1B1B1B",
    directors: ["Anirban Chakraborty"],
    cast: ["Ena Saha", "Rajatava Dutta", "Kharaj Mukherjee"],
    mainImage:
      "https://i.ibb.co/9mRmTC9k/Whats-App-Image-2025-02-04-at-13-12-00-22e102ee.jpg",
    galleryImages: [
      "https://i.ibb.co/8DSY1Sbj/IMG-1346.jpg",
      "https://i.ibb.co/VYqrhc9s/IMG-1034.jpg",
      "https://i.ibb.co/Tx08cnDH/IMG-1022.jpg",
      "https://i.ibb.co/tRSxxfx/IMG-1331.jpg",
      "https://i.ibb.co/zH5PCd99/IMG-1144.jpg",
    ],
  },
  {
    id: "nonte-fonte",
    title: "Nonte Fonte",
    year: 2023,
    titleBgColor: "#1A2421",
    directors: ["Anirban Chakraborty"],
    cast: [
      "Paran Bandopadhyay",
      "Subhasish Mukherjee",
      "Biswajit Chakraborty",
      "Amlan Majumder",
      "Sumit Samaddar",
      "Parthasarathi Dev",
      "Soham Bose Roy Chowdhury",
      "Soham Bose",
      "Krishna Banerjee",
      "Manojyoti Mukherjee",
      "Nimai Ghosh",
    ],
    mainImage:
      "https://i.ibb.co/41ZVgVc/MV5-BOWM3-Yj-Bk-YTAt-OWQ3-Yy00-NGFk-LTgy-Zjgt-Mj-I2-NTRm-NGRk-ZGY4-Xk-Ey-Xk-Fqc-Gc-V1-QL75-UX480-2.png",
    galleryImages: [
      "https://i.ibb.co/Jk6w0hW/images-2-1.png",
      "https://i.ibb.co/mcyCxfB/nn-1.png",
      "https://i.ibb.co/9nNNzc6/Whats-App-Image-2024-12-28-at-8-13-50-PM-2-1.png",
      "https://i.ibb.co/G2NSc2M/Whats-App-Image-2024-12-28-at-8-13-50-PM-1.png",
      " https://i.ibb.co/2s5NX42/Whats-App-Image-2024-12-28-at-8-13-50-PM-1-1.png",
    ],
  },
  {
    id: "o-abhagi",
    title: "O Abhagi",
    year: 2024,
    titleBgColor: "#1B1B1B",
    directors: ["Anirban Chakraborty"],
    writters: ["Anirban Chakraborty", "Sarat Chandra Chattopadhayay"],
    cast: [
      "Rafiath Rashid Mithila",
      "Subrat Dutta",
      "Debjani Chatterjee",
      "Ishan Mazumder",
      " Sayan Ghosh",
      " Jinia Pande",
      "Krishna Banerjee",
      "Sourav Halder",
    ],
    mainImage:
      "https://i.ibb.co/YZpb82d/MV5-BNj-Zl-MWQ3-ZDct-OWNj-ZS00-OTRl-LThh-YTkt-Yj-Q5-ODEy-Mj-Yx-Yz-I0-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
    galleryImages: [
      "https://i.ibb.co/FWJ9MVS/news4-2.png",
      "https://i.ibb.co/Gt1K9JM/x720-1.png",
      "https://i.ibb.co/yRrbzLh/article-1.png",
      "https://i.ibb.co/XCdKLMh/435574986-10224336755713438-7004916970106953552-n-1.png",
    ],
  },
  {
    id: "khacha",
    title: "Khacha",
    year: 2025,
    titleBgColor: "#1A2421",
    directors: ["Anirban Chakraborty"],
    writters: ["Anirban Chakraborty"],
    cast: [
      "Rajatava Dutta",
      "Mrinmoy Das",
      "Mir Afsar Ali",
      "Kanchana Moitra",
      "Anindya Bandopadhyay",
      "Sonali Chowdhury",
      "Prattusa Pal",
      "Krishna Bandopadhyay",
      "Iman Chakraborty",
      "Arunava Dutta",
    ],
    mainImage: "https://i.ibb.co/YkrZWz1/imgpsh-fullsize-anim.jpg",
    galleryImages: [
      "https://i.ibb.co/CPQRJx9/thumb-34446.jpg",
      "https://i.ibb.co/frscsnC/download-2.jpg",

      "https://i.ibb.co/HHVprKp/Screenshot-2025-01-10-010650.png",
      "https://i.ibb.co/1mRbzyN/1736362198-enter-f-2.jpg",
    ],
  },
];
