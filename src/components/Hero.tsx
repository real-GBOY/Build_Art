import heroImage1 from '../../assets/imgs/Image 1.jpg';
import heroImage2 from '../../assets/imgs/Image 2.jpg';
import arrowDown from '../assets/arrow-down.svg';

const stats = [
  { value: '400+', label: 'Project Complete' },
  { value: '600+', label: 'Satisfied Clients' },
  { value: '100+', label: 'Unique Styles' },
];

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="site-container pb-16 pt-4 lg:pb-20 lg:pt-6">
        <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10 xl:gap-16 2xl:gap-24">
          <div className="max-w-3xl xl:max-w-none">
            <h1 className="font-body text-[clamp(3rem,7vw,133px)] font-medium leading-none text-nav-dark">
              Interior Design
            </h1>

            <p className="mt-8 max-w-3xl font-body text-xl font-medium leading-[145%] text-nav-muted lg:mt-[42px] lg:text-2xl xl:max-w-4xl">
              Step into a world where the art of Interior Design is meticulously crafted to bring
              together timeless elegance and cutting-edge modern Innovation, Allowing you to
              transform your living spaces into the epitome of luxury and sophistication
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex h-[86px] w-[302px] items-center justify-center rounded-[4px] bg-nav-dark font-body text-2xl font-semibold text-white transition-colors duration-200 hover:bg-nav-dark/90 lg:mt-[102px]"
            >
              Start Project
            </a>

            <div className="mt-12 flex flex-wrap gap-x-16 gap-y-8 lg:mt-[129px] xl:gap-x-20 2xl:gap-x-28">
              {stats.map((stat) => (
                <div key={stat.label} className="text-nav-muted">
                  <p className="mb-[15px] font-body text-[clamp(2.5rem,5vw,70px)] font-normal leading-[1.755]">
                    {stat.value}
                  </p>
                  <p className="font-body text-lg font-normal leading-[1.755] lg:text-[22px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-16 h-[520px] w-full max-w-2xl sm:max-w-3xl lg:mx-0 lg:mt-0 lg:h-[min(52vw,866px)] lg:max-w-none lg:min-h-[640px]">
            <div className="absolute right-0 top-0 h-[45%] w-[72%] overflow-hidden rounded-[4px] lg:h-[49%] lg:w-[66%]">
              <img
                src={heroImage1}
                alt="Bright interior with rattan chair and dome lamp"
                className="h-[120%] w-full object-cover object-top"
              />
            </div>

            <div className="absolute left-0 top-[48%] hidden h-[22%] w-[27%] rounded-[4px] border-2 border-nav-dark sm:block lg:top-[50%]" />

            <div className="absolute bottom-0 right-0 h-[47%] w-full overflow-hidden rounded-[4px] lg:left-[4%] lg:h-[47%] lg:w-[83%]">
              <img
                src={heroImage2}
                alt="Living room with blue sofa and monstera plant"
                className="h-[115%] w-full object-cover object-center"
              />
            </div>

            <a
              href="#services"
              aria-label="Scroll to services"
              className="absolute -bottom-2 right-0 hidden transition-opacity duration-200 hover:opacity-80 lg:block"
            >
              <img src={arrowDown} alt="" className="h-[120px] w-[120px] xl:h-[151px] xl:w-[151px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
