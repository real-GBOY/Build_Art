import sectionImage from '../../assets/imgs/Image 2.jpg';

const steps = [
  {
    number: '01',
    title: 'Start Project',
    description:
      'Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.',
  },
  {
    number: '02',
    title: 'Craft',
    description:
      'Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.',
  },
];

export function StepsSection() {
  return (
    <section className="bg-white">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24">
          <div>
            <h2 className="font-body text-[clamp(2.25rem,5vw,80px)] font-medium leading-[1.05] text-nav-dark">
              Designing Your Dream in Three Simple Steps
            </h2>

            <div className="mt-10 space-y-10 lg:mt-12 lg:space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 lg:gap-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-nav-dark lg:h-16 lg:w-16">
                    <span className="font-body text-lg font-semibold text-white lg:text-xl">
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3 className="font-body text-xl font-semibold text-nav-dark lg:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-base font-medium leading-[145%] text-nav-muted lg:mt-4 lg:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[4px] lg:h-full">
            <img
              src={sectionImage}
              alt="Modern living room with white sofa and large windows"
              className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
