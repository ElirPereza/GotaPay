import Header from "@/components/landing/header";
import SectionMain from "@/components/landing/section-main";
import SectionCharacter from "@/components/landing/section-character";
import SectionFuntion from "@/components/landing/section-funtion";
import SectionOur from "@/components/landing/section-our";
import SectionRegister from "@/components/landing/section-register";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
<div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <Header/>
      <main className="flex-1">
        <SectionMain/>
        <SectionCharacter/>
        <SectionFuntion/>
        <SectionOur/>
        <SectionRegister/>
      </main>
      <Footer/>
    </div>
  );
}
