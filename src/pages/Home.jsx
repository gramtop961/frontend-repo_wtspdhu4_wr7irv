import Hero from '../components/Hero';
import { Services, Highlights } from '../components/Sections';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Highlights />
      <Services />
    </div>
  );
}
