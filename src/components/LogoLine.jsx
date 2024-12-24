// import { logoLine } from "../constants";

import { constLogos } from "../constants";

const LogoLine = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Let's Begin the Journey with
      </h5>
      <ul className="flex">
        {constLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoLine;
