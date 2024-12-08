import Companylogo from "./components/CompanyLogo"
import FeaturedProducts from "./components/FeaturedProducts"
import FeaturesProducts from "./components/FeaturedProducts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurProducts from "./components/OurProducts"
import TopCategory from "./components/TopCategory"

export default function Home() {
  return(
  <main>
  
    <Hero />
    <Companylogo />
    <FeaturedProducts />
    <TopCategory />
    <OurProducts />

  
  </main>)
}