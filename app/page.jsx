import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import About from './About/page'
import Services from './service/page'
import Blog from './blog/page'
import Team from './Team/page'
import Testimonial from './Testimonial/page'
import Cta from './Cta/page'
import Footer from './footer/page' 
import Mobile from './Mobile/page'
// import Form from './form/page'




export default function Home() {
  return (
    <main>
      <Navbar/>
      {/* <Mobile/> */}
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Team/>
      <Testimonial/>
      <Cta/>
      <Footer/>
       
    </main>
  )
}
