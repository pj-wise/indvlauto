import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="w-full layoutPadding pt-16 border-t border-white/10">
      <div className="max-w-screen-format mx-auto">
        <div className="flex gap-8 justify-between flex-wrap pb-12">
          <div className="max-md:min-w-[250px]">
            <h4 className="text-xl font-bold tracking-[0.2em] uppercase">
              INDVL
            </h4>
            <p className="pt-4 max-w-[280px] text-white/40 font-light text-sm leading-relaxed">
              Individuality drives design. A luxury automotive restyling studio
              in Orlando, FL.
            </p>
          </div>

          <div className="max-md:min-w-[200px]">
            <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-white/60">
              Services
            </h4>
            <ul className="text-sm flex flex-col gap-y-2 font-light tracking-wider">
              <li className="hover:text-white/60 transition-colors pt-4">
                <Link href="/vehicle-wraps">Vehicle Wraps</Link>
              </li>
              <li className="hover:text-white/60 transition-colors">
                <Link href="/ppf">Paint Protection Film</Link>
              </li>
              <li className="hover:text-white/60 transition-colors">
                <Link href="/ceramic-coating">Ceramic Coating</Link>
              </li>
              <li className="hover:text-white/60 transition-colors">
                <Link href="/window-tint">Window Tint</Link>
              </li>
              <li className="hover:text-white/60 transition-colors">
                <Link href="/commercial">Commercial</Link>
              </li>
            </ul>
          </div>

          <div className="max-md:min-w-[200px]">
            <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-white/60">
              Contact
            </h4>
            <ul className="text-sm flex flex-col gap-y-2 font-light tracking-wider">
              <li className="pt-4 text-white/60">
                (407) 257-3659
              </li>
              <li className="text-white/60">
                4822 South Orange Ave, Unit 6
                <br />
                Orlando, FL 32806
              </li>
            </ul>
          </div>

          <div className="max-md:min-w-[200px]">
            <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-white/60">
              Follow
            </h4>
            <ul className="text-sm flex flex-col gap-y-2 font-light tracking-wider">
              <li className="hover:text-white/60 transition-colors pt-4">
                <a
                  href="https://instagram.com/indvl.auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6">
          <span className="block text-xs text-white/30 text-center tracking-wider font-light">
            &copy; {new Date().getFullYear()} INDVL AUTO LLC | All Rights
            Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
