import Advert from "@/components/Advert";
import EditorsPick from "@/components/Home/EditorsPick";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mt-22 lg:mt-45">
        <Advert />
        <EditorsPick />
      </div>
    </main>
  );
}
