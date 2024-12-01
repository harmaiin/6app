"use client"
import Achievements from "@/components/Achievement";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Courses from "@/components/Courses";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testinomial";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
import MobileHome from "@/components/MobileHome";
import MobileServices from "@/components/MobileServices";
import MobileAchievements from "@/components/MobileAchievement";
import MobileCourses from "@/components/MobileCourse";
import MobileAboutUs from "@/components/MobileAboutUs";
import MobileTestimonials from "@/components/MobileTestinomial";
import MobileFooter from "@/components/MobileFooter";
import { useMediaQuery } from 'react-responsive';



export default function Home() {
  const isMobile = useMediaQuery({ query: '(min-width: 429px)' });
  const isMobileHome = useMediaQuery({ query: '(min-width: 800px)' });
  const isMobileHeader = useMediaQuery({ query: '(min-width: 550px)' });
  const isMobileAchievements = useMediaQuery({ query: '(min-width: 450px)' });
  const isMobileCourses = useMediaQuery({ query: '(min-width: 850px)' });
  const isMobileTestimonials = useMediaQuery({ query: '(min-width: 850px)' });
  const isMobileFooter = useMediaQuery({ query: '(min-width: 600px)' });
  return (
  <>
  {isMobileHeader ? <Header/> : <MobileHeader/>}
  {isMobileHome ? <Section1/> : <MobileHome/>}
  {isMobile ? <Services/> : <MobileServices/>}
  {isMobileAchievements ? <Achievements/> : <MobileAchievements/>}
  {isMobileCourses ? <Courses/> : <MobileCourses/>}
  {isMobile ? <AboutUs/> : <MobileAboutUs/>}
  {isMobileTestimonials ? <Testimonials/> : <MobileTestimonials/>}
  {isMobileFooter ? <Footer/> : <MobileFooter/>}
  
  </>
  );
}