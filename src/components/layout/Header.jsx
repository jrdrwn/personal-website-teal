import { useWindowScroll } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import useSwapTheme from '../../hooks/useSwapTheme';
import { CgMenuRight, CgClose } from 'react-icons/cg';
export default function Header() {
  const btnRef = useRef(null);
  const [{ y: windowScrollY }] = useWindowScroll();
  const swapTheme = useSwapTheme(btnRef, { light: 'cupcake', dark: 'night' });
  const [swap, setSwap] = useState(false);
  return (
    <header
      className={`fixed right-0 left-0 top-0 z-50 rounded-b-lg bg-opacity-90 backdrop-blur transition-all duration-300 ${
        windowScrollY > 80 && 'shadow'
      }`}
    >
      <div className="container navbar">
        <div className="navbar-start">
          <NavLink className="btn btn-ghost btn-sm" to={'/'}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 38 29"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.5078 2.94434C29.2773 3.13574 27.9512 3.44336 26.5293 3.86719C26.2422 3.94922 26.0098 3.99023 25.832 3.99023C25.4766 3.99023 25.2988 3.78516 25.2988 3.375C25.2988 3.11523 25.4766 2.90332 25.832 2.73926C26.666 2.3291 28.3545 1.89844 30.8975 1.44727C33.6045 0.955078 35.7305 0.708984 37.2754 0.708984C37.7539 0.708984 37.9932 0.893555 37.9932 1.2627C37.9932 1.52246 37.8633 1.7002 37.6035 1.7959C37.4395 1.87793 36.9541 1.95996 36.1475 2.04199C34.4932 2.21973 33.2764 2.54785 32.4971 3.02637C31.8682 3.38184 30.4395 4.76953 28.2109 7.18945C23.9863 11.8379 20.5068 16.0898 17.7725 19.9453C16.2275 22.1191 14.5664 24.6553 12.7891 27.5537C12.4199 28.1416 12.0576 28.4355 11.7021 28.4355C11.2783 28.4355 11.0254 28.251 10.9434 27.8818C10.875 27.6221 10.8408 27.3213 10.8408 26.9795C10.8408 25.4756 11.1621 22.9873 11.8047 19.5146C12.1738 17.4639 12.7139 15.0645 13.4248 12.3164C13.4932 12.0566 13.5273 11.8926 13.5273 11.8242C13.5273 11.6602 13.4521 11.5781 13.3018 11.5781C13.2197 11.5781 13.083 11.6875 12.8916 11.9062L12.748 12.0703C11.9414 12.9043 10.1436 15.3584 7.35449 19.4326C5.64551 21.9482 4.0459 24.5459 2.55566 27.2256C2.13184 27.9639 1.71484 28.333 1.30469 28.333C0.757812 28.333 0.484375 27.8955 0.484375 27.0205C0.484375 25.5303 0.689453 23.4385 1.09961 20.7451C1.64648 17.2588 2.48047 13.6562 3.60156 9.9375C4.29883 7.62695 5.00293 5.6582 5.71387 4.03125C4.96191 4.19531 4.19629 4.41406 3.41699 4.6875C2.22754 5.11133 1.52344 5.32324 1.30469 5.32324C0.949219 5.32324 0.771484 5.16602 0.771484 4.85156C0.771484 4.53711 0.962891 4.29102 1.3457 4.11328C2.67188 3.48438 4.46289 2.91699 6.71875 2.41113C8.93359 1.90527 10.8066 1.65234 12.3379 1.65234C12.9258 1.65234 13.2197 1.85742 13.2197 2.26758C13.2197 2.65039 12.9326 2.85547 12.3584 2.88281C10.5947 2.99219 9.50098 3.16309 9.07715 3.39551C8.69434 3.62793 8.37305 4.01074 8.11328 4.54395C7.25195 6.3623 6.21289 9.61621 4.99609 14.3057C4.09375 17.874 3.56055 20.7588 3.39648 22.96C5.70703 19.2686 8.44141 15.4199 11.5996 11.4141C13.8008 8.625 15.2227 6.92969 15.8652 6.32812C16.2344 5.97266 16.5488 5.79492 16.8086 5.79492C17.2871 5.79492 17.5264 6.05469 17.5264 6.57422C17.5264 6.7793 17.082 8.33789 16.1934 11.25C15.332 14.1484 14.6416 17.0742 14.1221 20.0273C13.8486 21.5312 13.6846 22.6592 13.6299 23.4111C14.8877 21.374 17.1846 18.2773 20.5205 14.1211C22.0654 12.1934 23.7471 10.1973 25.5654 8.13281C26.3311 7.27148 27.8145 5.70605 30.0156 3.43652L30.5078 2.94434Z"
                fill="currentColor"
                stroke="currentColor"
                className="text-primary"
              />
            </svg>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div
            ref={btnRef}
            className="mask swap mask-circle swap-rotate mr-2 bg-primary p-1 text-primary-content shadow-lg"
            onClick={swapTheme}
          >
            <MdOutlineDarkMode size={24} className="swap-off" />
            <MdOutlineLightMode size={24} className="swap-on" />
          </div>
          <button
            className={`swap-rotate mask swap mask-circle mr-2 bg-primary p-1 text-primary-content shadow-lg md:hidden ${
              swap ? 'swap-active' : ''
            }`}
            onClick={() => setSwap(!swap)}
          >
            <CgMenuRight className="swap-off" size={24} />
            <CgClose className="swap-on" size={24} />
          </button>
          <ul
            className={`menu rounded-box menu-compact absolute -bottom-48 gap-2 bg-base-100 p-2 shadow-md transition-all md:menu-horizontal md:static md:bg-transparent md:p-0 md:shadow-none [&>li>a]:rounded [&>li>a]:uppercase ${
              swap ? 'right-4' : '-right-36'
            } `}
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/technology'}>Technology</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
