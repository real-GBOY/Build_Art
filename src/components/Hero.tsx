/** @format */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import heroImage1 from "../../assets/imgs/Image 1.jpg";
import heroImage2 from "../../assets/imgs/Image 2.jpg";
import arrowDown from "../assets/arrow-down.svg";
import {
	fadeInUp,
	slideInLeft,
	slideInRight,
	staggerContainer,
} from "../lib/motion";

const stats = [
	{ value: 400, label: "Project Complete" },
	{ value: 600, label: "Satisfied Clients" },
	{ value: 100, label: "Unique Styles" },
];

function CountUp({
	target,
	duration = 2000,
}: {
	target: number;
	duration?: number;
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		let startTime: number | null = null;
		let frameId = 0;

		const animate = (timestamp: number) => {
			if (startTime === null) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.round(eased * target));

			if (progress < 1) {
				frameId = requestAnimationFrame(animate);
			}
		};

		frameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frameId);
	}, [isInView, target, duration]);

	return (
		<span ref={ref} className='relative inline-block tabular-nums'>
			<span className='invisible'>{target}+</span>
			<span className='absolute inset-0'>{count}+</span>
		</span>
	);
}

export function Hero() {
	return (
		<section id='home' className='overflow-hidden bg-page'>
			<div className='site-container pb-16 pt-4 lg:pb-20 lg:pt-6'>
				<div className='relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10 xl:gap-16 2xl:gap-24'>
					<motion.div
						className='max-w-3xl xl:max-w-none'
						variants={staggerContainer(0.12, 0.1)}
						initial='hidden'
						animate='visible'>
						<motion.h1
							className='text-[clamp(3rem,7vw,133px)] font-medium leading-none text-nav-dark'
							variants={fadeInUp}>
							Interior Design
						</motion.h1>

						<motion.p
							className='mt-8 max-w-3xl text-xl font-medium leading-[145%] text-nav-muted lg:mt-[42px] lg:text-2xl xl:max-w-4xl'
							variants={fadeInUp}>
							Step into a world where the art of Interior Design is meticulously
							crafted to bring together timeless elegance and cutting-edge
							modern Innovation, Allowing you to transform your living spaces
							into the epitome of luxury and sophistication
						</motion.p>

						<motion.div
							className='mt-12 grid w-full grid-cols-3 gap-x-4 sm:gap-x-8 lg:mt-16 lg:gap-x-12 xl:gap-x-16'
							variants={staggerContainer(0.1, 0)}>
							{stats.map((stat) => (
								<motion.div
									key={stat.label}
									className='text-nav-muted'
									variants={fadeInUp}>
									<p className='mb-[15px] text-[clamp(2.5rem,5vw,70px)] font-normal leading-[1.755]'>
										<CountUp target={stat.value} />
									</p>
									<p className='whitespace-nowrap text-lg font-normal leading-[1.755] lg:text-[22px]'>
										{stat.label}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<motion.div
						className='relative mx-auto mt-16 h-[520px] w-full max-w-2xl sm:max-w-3xl lg:mx-0 lg:mt-0 lg:h-[min(52vw,866px)] lg:max-w-none lg:min-h-[640px]'
						initial={{ opacity: 0, x: 48 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.75,
							ease: [0.4, 0, 0.2, 1],
							delay: 0.25,
						}}>
						<motion.div
							className='absolute right-0 top-0 h-[45%] w-[72%] overflow-hidden rounded-[4px] lg:h-[49%] lg:w-[66%]'
							variants={slideInRight}
							initial='hidden'
							animate='visible'
							transition={{ delay: 0.35 }}>
							<img
								src={heroImage1}
								alt='Bright interior with rattan chair and dome lamp'
								className='h-[120%] w-full object-cover object-top'
							/>
						</motion.div>

						<motion.div
							className='absolute left-0 top-[48%] hidden h-[22%] w-[27%] rounded-[4px] border-2 border-nav-dark sm:block lg:top-[50%]'
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.55 }}
						/>

						<motion.div
							className='absolute bottom-0 right-0 h-[47%] w-full overflow-hidden rounded-[4px] lg:left-[4%] lg:h-[47%] lg:w-[83%]'
							variants={slideInLeft}
							initial='hidden'
							animate='visible'
							transition={{ delay: 0.45 }}>
							<img
								src={heroImage2}
								alt='Living room with blue sofa and monstera plant'
								className='h-[115%] w-full object-cover object-center'
							/>
						</motion.div>

						<motion.a
							href='#services'
							aria-label='Scroll to services'
							className='absolute -bottom-2 right-0 hidden transition-opacity duration-200 hover:opacity-80 lg:block'
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}>
							<img
								src={arrowDown}
								alt=''
								className='h-[120px] w-[120px] xl:h-[151px] xl:w-[151px]'
							/>
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
