interface MovieDetails {
  id: string;
  title: string;
  year: number;
  titleBgColor: "Eerie_Black" | "Fire_Engine_Red" | "Forest_Green";
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
    titleBgColor: "Eerie_Black",
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
      "https://i.ibb.co/cyG1kBS/hq720.jpg",
      "https://i.ibb.co/mct98F6/thumb-1.jpg",
      "https://i.ibb.co/Q9SzknY/hq720-1.jpg",
    ],
  },
  {
    id: "piklur-janala",
    title: "Piklur Janala",
    year: 2017,
    titleBgColor: "Eerie_Black",
    directors: ["Anirban Chakraborty"],
    cast: ["Pulokita Ghosh", "Amlan Majumdar", "Joy Sengupta"],
    mainImage: "https://i.ibb.co/fHbbwf9/images-1.png",
    galleryImages: [
      "https://i.ibb.co/DkSKFP4/scene1-1.png",
      "https://i.ibb.co/gwrGbmn/scene-2-1.png",
      "https://i.ibb.co/DkSKFP4/scene1-1.png",
      "https://i.ibb.co/gwrGbmn/scene-2-1.png",
    ],
  },
  {
    id: "nonte-fonte",
    title: "Nonte Fonte",
    year: 2023,
    titleBgColor: "Eerie_Black",
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
    titleBgColor: "Eerie_Black",
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
];
