import ThemeToggle from "@/components/shared/darkModeButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      hola mundo
      <h1>aqui va una landpage</h1>
      <ThemeToggle />
    </div>
  );
}
