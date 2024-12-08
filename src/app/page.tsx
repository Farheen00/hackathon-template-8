import Companylogo from "./components/CompanyLogo"
import ExploreStyles from "./components/ExploreStyles"
import FeaturedProducts from "./components/FeaturedProducts"
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
    <ExploreStyles />
    <OurProducts />

  
  </main>)
}