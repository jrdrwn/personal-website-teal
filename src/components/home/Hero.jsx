import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HeroImg from '../../images/hero.webp';

export default function Hero() {
  return (
    <section id="hero" className="mb-10 md:mb-24">
      <div className="container flex flex-col px-4 pt-20 md:flex-row">
        <div className="prose flex-1" id="hero-first-look">
          <h2 className="text-xl font-medium">Let's begin the adventure!</h2>
          <h1 className="mr-2 mb-2 text-5xl font-semibold text-primary">
            I'm Jordi Irawan, A <br />
            <span className="text-5xl italic text-secondary">
              Backend Programmer
            </span>
          </h1>
          <p>
            Currently studying at the University of Palangka Raya majoring in{' '}
            <span className="italic">Informatics Engineering.</span>
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to={'/contact'} className="btn btn-primary">
              Hire Me
            </Link>
            <button className="btn btn-outline gap-2">
              Learn more
              <BsArrowRightCircle
                size={24}
                className="animate-bounce-to-right ml-1"
              />
            </button>
          </div>
        </div>
        <div
          className="hidden flex-1 text-center lg:block"
          id="hero-second-look"
        >
          <a
            href="https://pngtree.com/so/Mobile"
            className="tooltip tooltip-bottom inline-block h-fit"
            data-tip="Mobile png from pngtree.com/"
            target="_blank"
          >
            <img
              src={HeroImg}
              alt="Hero Image"
              loading="lazy"
              width="320"
              height="320"
              className="mask mask-squircle bg-base-200 object-fill"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
