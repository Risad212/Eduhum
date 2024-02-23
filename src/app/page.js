import Banner from "./components/banner/banner";
import About from "./components/about/About";
import Featurecard from "./components/featurecard/featurecard";
import Course from './components/course/course';
import Count from "./components/count/count";
import Testimonial from "./components/testimonial/testimonial";
import Blog from './components/blog/blog';
import Instractor from "./components/instractor/instractor";

export default function Home() {
  return (
     <>
       <Banner />
       <Featurecard />
       <About />
       <Course />
       <Count />
       <Testimonial />
       <Instractor />
     </>
  )
}





