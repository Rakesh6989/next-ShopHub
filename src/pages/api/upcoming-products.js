export default function handler(req, res) {
    const upcomingProducts = [
      {
        id: 1,
        name: "iPhone 16 Pro",
        releaseDate: "2025-09-20",
        image: "https://images.unsplash.com/photo-1616439818170-efc27f1e8773?auto=format&fit=crop&w=600&q=80",
        price: "$1199",
        status: "Coming Soon",
        description: "Experience the future of smartphones with iPhone 16 Pro. Featuring A18 Bionic chip, periscope zoom camera, and titanium finish.",
      },
      {
        id: 2,
        name: "Samsung Galaxy Z Flip 7",
        releaseDate: "2025-08-10",
        image: "https://images.unsplash.com/photo-1621420640380-bd4cfbda8ec7?auto=format&fit=crop&w=600&q=80",
        price: "$1399",
        status: "Pre-Order",
        description: "Foldable tech with 200Hz refresh rate, triple-lens camera, and refined hinge system.",
      },
      {
        id: 3,
        name: "OnePlus Nord 5",
        releaseDate: "2025-07-25",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c1?auto=format&fit=crop&w=600&q=80",
        price: "$499",
        status: "Coming Soon",
        description: "Snapdragon 7 Gen 2, 120Hz AMOLED, 80W charging — all in a sleek new design.",
      },
      {
        id: 4,
        name: "Google Pixel 9 Pro",
        releaseDate: "2025-10-05",
        image: "https://images.unsplash.com/photo-1589395522104-8c3dc5d74f50?auto=format&fit=crop&w=600&q=80",
        price: "$1099",
        status: "Coming Soon",
        description: "Flagship phone with Tensor G4 chip, unbeatable AI camera, and Pixel magic.",
      },
      {
        id: 5,
        name: "Nothing Phone 3",
        releaseDate: "2025-09-15",
        image: "https://images.unsplash.com/photo-1682685797208-c741d58c6a4a?auto=format&fit=crop&w=600&q=80",
        price: "$699",
        status: "Pre-Order",
        description: "Glyph interface 2.0, transparent design, and bloat-free UI for purists.",
      },
    ];
  
    res.status(200).json(upcomingProducts);
  }
  