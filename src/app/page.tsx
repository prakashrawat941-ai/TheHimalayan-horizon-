import EntryCards from "@/components/EntryCards";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <EntryCards />
    </div>
  );
}
