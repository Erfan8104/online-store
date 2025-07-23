import HeroSlider from "./../components/HeroSlider";
import FeaturedProducts from "./../components/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col gap 12">
      <HeroSlider />

      <FeaturedProducts />
    </div>
  );
}
