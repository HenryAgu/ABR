import Advert from "@/components/Advert";
import EditorsPick from "@/components/Home/EditorsPick";
import NewlyAdded from "@/components/Home/NewlyAdded";
import Trending from "@/components/Home/Trending";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mt-22 lg:mt-45">
        <Advert />
        <EditorsPick />
        <Trending />
        <NewlyAdded />
      </div>
    </main>
  );
}
