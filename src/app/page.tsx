import Image from "next/image";
import Middle from "@/components/ui/Middle";
// import Middle from "@/components/ui/middle";
import Blog from '../components/ui/Blog'
import Header from '../components/ui/Navbar'
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="bg-black">
        <Header/>
      <Middle/>
      <Blog/>
      <Footer/>
    </div>
  );
}
