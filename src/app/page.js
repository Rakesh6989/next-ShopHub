import HeroSlider from "./Components/HeroSlider";
export default function Home() {
  return (
    <main className="min-h-screen pt-20 p-5">
      <h1 className="text-3xl font-bold text-center py-2">Welcome to ShopHub</h1>
      <HeroSlider/>
      {/* Yahan tu Hero, banners, featured products, etc. laga sakta hai */}
    </main>
  );
}
