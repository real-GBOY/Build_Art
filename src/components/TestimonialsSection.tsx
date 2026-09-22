/** @format */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sectionImage from "../../assets/imgs/Image 1.jpg";
import {
	fadeInUp,
	slideInLeft,
	staggerContainer,
	viewport,
} from "../lib/motion";

const avatar = (name: string) =>
	`https://ui-avatars.com/api/?name=${encodeURIComponent(
		name,
	)}&background=424d26&color=ffffff&size=128&bold=true&font-size=0.38`;

const testimonials = [
	{
		quote:
			"Working with your design team was an absolute pleasure. Every detail in our new apartment was handled with real care and craftsmanship.",
		name: "Ahmed El-Sayed",
		location: "Cairo, Egypt",
		avatar: avatar("Ahmed El-Sayed"),
	},
	{
		quote:
			"From the first meeting to the final handover, the team understood exactly what our family needed. Our home finally feels like us.",
		name: "Mona Abdelrahman",
		location: "Giza, Egypt",
		avatar: avatar("Mona Abdelrahman"),
	},
	{
		quote:
			"The lighting and finishing work exceeded what we imagined. Guests always ask who designed our villa.",
		name: "Youssef Hassan",
		location: "Alexandria, Egypt",
		avatar: avatar("Youssef Hassan"),
	},
	{
		quote:
			"They balanced modern style with comfort perfectly. Our living room is now the favorite spot in the house.",
		name: "Nourhan Mostafa",
		location: "Mansoura, Egypt",
		avatar: avatar("Nourhan Mostafa"),
	},
	{
		quote:
			"Professional from start to finish, and always quick to respond. I would recommend Build Art to anyone renovating in Menoufia.",
		name: "Khaled Ibrahim",
		location: "Shebin El-Kom, Egypt",
		avatar: avatar("Khaled Ibrahim"),
	},
	{
		quote:
			"Our office redesign completely changed how the team works. It feels open, calm, and truly reflects our brand.",
		name: "Rania Farouk",
		location: "New Cairo, Egypt",
		avatar: avatar("Rania Farouk"),
	},
	{
		quote:
			"Even managing the project remotely from Dubai, communication was smooth and transparent the whole way through.",
		name: "Omar Al-Farsi",
		location: "Dubai, UAE",
		avatar: avatar("Omar Al-Farsi"),
	},
	{
		quote:
			"The attention to detail in our Riyadh apartment was outstanding. Every corner feels intentional and elegant.",
		name: "Sara Al-Otaibi",
		location: "Riyadh, Saudi Arabia",
		avatar: avatar("Sara Al-Otaibi"),
	},
];

export function TestimonialsSection() {
	const viewportRef = useRef<HTMLDivElement>(null);
	const activeIndexRef = useRef(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);
	const [gap, setGap] = useState(24);
	const [visibleCount, setVisibleCount] = useState(2);
	const [isInstant, setIsInstant] = useState(false);

	activeIndexRef.current = activeIndex;

	useLayoutEffect(() => {
		const updateSizes = () => {
			const viewport = viewportRef.current;
			if (!viewport) return;

			const styles = getComputedStyle(viewport);
			const measuredGap =
				parseFloat(styles.getPropertyValue("--carousel-gap")) ||
				(window.innerWidth >= 1024 ? 32 : 24);

			const isSingleCard = window.innerWidth < 640;
			const count = isSingleCard ? 1 : 2;
			const width =
				isSingleCard ?
					viewport.offsetWidth
				:	(viewport.offsetWidth - measuredGap) / count;

			setVisibleCount(count);
			setGap(measuredGap);
			setCardWidth(width);
		};

		updateSizes();
		window.addEventListener("resize", updateSizes);
		return () => window.removeEventListener("resize", updateSizes);
	}, []);

	const slides = [...testimonials, ...testimonials.slice(0, visibleCount)];
	const stepSize = cardWidth + gap;

	const goToPrevious = () => {
		if (isInstant || !cardWidth) return;

		if (activeIndexRef.current === 0) {
			setIsInstant(true);
			setActiveIndex(testimonials.length);
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setIsInstant(false);
					setActiveIndex(testimonials.length - 1);
				});
			});
			return;
		}

		setActiveIndex((index) => index - 1);
	};

	const goToNext = () => {
		if (isInstant || !cardWidth) return;

		setActiveIndex((index) => {
			if (index >= testimonials.length - 1) {
				return testimonials.length;
			}

			return index + 1;
		});
	};

	const handleAnimationComplete = () => {
		if (activeIndexRef.current === testimonials.length) {
			setIsInstant(true);
			setActiveIndex(0);
			requestAnimationFrame(() => {
				requestAnimationFrame(() => setIsInstant(false));
			});
		}
	};

	useEffect(() => {
		setActiveIndex((index) =>
			Math.min(index, Math.max(testimonials.length - visibleCount, 0)),
		);
	}, [visibleCount]);

	return (
		<section className='overflow-hidden bg-page'>
			<div className='site-container py-16 lg:py-24'>
				<div className='relative'>
					<motion.div
						className='relative z-0 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%] lg:pb-[72px]'
						variants={slideInLeft}
						initial='hidden'
						whileInView='visible'
						viewport={viewport}>
						<div className='relative z-0 h-[400px] overflow-hidden rounded-[4px] sm:h-[480px] lg:h-full'>
							<img
								src={sectionImage}
								alt='Elegant interior living space'
								className='h-full w-full object-cover'
							/>
						</div>
					</motion.div>

					<motion.div
						className='relative z-40 mt-6 flex gap-4 lg:absolute lg:bottom-0 lg:left-0'
						variants={fadeInUp}
						initial='hidden'
						whileInView='visible'
						viewport={viewport}>
						<button
							type='button'
							aria-label='Previous testimonial'
							onClick={goToPrevious}
							disabled={isInstant || !cardWidth}
							className='pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-[4px] border border-nav-dark/15 bg-page text-nav-dark transition-colors duration-200 hover:border-nav-dark hover:bg-nav-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50'>
							<ChevronLeft className='h-5 w-5' strokeWidth={1.5} />
						</button>
						<button
							type='button'
							aria-label='Next testimonial'
							onClick={goToNext}
							disabled={isInstant || !cardWidth}
							className='pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-[4px] border border-nav-dark/15 bg-page text-nav-dark transition-colors duration-200 hover:border-nav-dark hover:bg-nav-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50'>
							<ChevronRight className='h-5 w-5' strokeWidth={1.5} />
						</button>
					</motion.div>

					<motion.div
						className='relative z-20 mt-10 lg:mt-0 lg:pl-[32%]'
						variants={staggerContainer(0.12)}
						initial='hidden'
						whileInView='visible'
						viewport={viewport}>
						<motion.h2
							className='text-start font-body text-[clamp(2rem,3.5vw,56px)] font-medium leading-[1.1] text-nav-dark lg:ml-[15%] lg:max-w-[85%]'
							variants={fadeInUp}>
							What Our Customers Say
						</motion.h2>

						<motion.div
							ref={viewportRef}
							className='mt-8 overflow-hidden [--carousel-gap:1.5rem] lg:mt-12 lg:[--carousel-gap:2rem]'
							variants={fadeInUp}>
							<motion.div
								className='flex'
								style={{ gap }}
								animate={{ x: cardWidth ? -activeIndex * stepSize : 0 }}
								transition={
									isInstant ?
										{ duration: 0 }
									:	{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }
								}
								onAnimationComplete={handleAnimationComplete}>
								{slides.map((testimonial, index) => (
									<article
										key={`${testimonial.name}-${index}`}
										style={{ width: cardWidth || undefined }}
										className={`relative flex min-h-[380px] shrink-0 flex-col rounded-[2px] border-[6px] border-page bg-nav-dark p-10 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.45)] sm:aspect-square sm:min-h-0 lg:p-12 xl:p-14 ${
											(
												index >= activeIndex &&
												index < activeIndex + visibleCount
											) ?
												"z-30"
											:	"z-20"
										}`}>
										<span
											className='mb-8 block shrink-0 font-body text-5xl font-medium leading-none text-white lg:text-6xl'
											aria-hidden>
											“
										</span>

										<p className='flex-1 text-start font-body text-base font-medium leading-[160%] text-white lg:text-lg'>
											{testimonial.quote}
										</p>

										<div className='mt-8 flex items-center gap-4'>
											<img
												src={testimonial.avatar}
												alt={testimonial.name}
												loading='lazy'
												className='h-12 w-12 shrink-0 rounded-full object-cover'
											/>
											<div>
												<p className='font-body text-base font-semibold text-white lg:text-lg'>
													{testimonial.name}
												</p>
												<p className='font-body text-sm font-medium text-white/60'>
													{testimonial.location}
												</p>
											</div>
										</div>
									</article>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
