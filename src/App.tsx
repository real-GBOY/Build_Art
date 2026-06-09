/** @format */

import { DreamSection } from "./components/DreamSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { StepsSection } from "./components/StepsSection";
import { Footer } from "./components/Footer";
import { NewsletterSection } from "./components/NewsletterSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

function App() {
	return (
		<div className='font-body antialiased'>
			<Navbar />
			<main className='pt-20 lg:pt-[88px]'>
				<Hero />
				<Services />
				<DreamSection />
				<StepsSection />
				<TestimonialsSection />
				<NewsletterSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
