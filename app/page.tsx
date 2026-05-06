import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import MainSections from "./_components/MainSections";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  );
}
