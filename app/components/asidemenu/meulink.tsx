import Link from "next/link";
import { useMouseHoverAndMenuContext } from "@/app/context/globalcontext";

export const MenuLinks = ({
  type,
  name,
  links,
  last,
  color,
  contact,
}: {
  type: string;
  name: string;
  links: string[];
  last?: boolean;
  color?: string;
  contact?: boolean;
}) => {
  const { onCusor } = useMouseHoverAndMenuContext();

  return (
    <div
      className={`font-neue grow text-textw relative ${
        !last &&
        " after:border-[1px] after:content-[''] after:h-full after:bordeer-textw after:right-0 after:top-0 after:absolute"
      }`}
    >
      <div className="text-textw font-neue mb-[20px] uppercase">
        <small>{name}</small>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        {links.map((link, index) => {
          return (
            <span
              key={index}
              className="overflow-hidden"
              onMouseEnter={() => onCusor("link")}
              onMouseLeave={() => onCusor(false)}
            >
              <Link
                href="/about"
                className={`
                    group text-[56px] relative after:capitalize after:content-['${link}'] after:absolute after:left-0 after:translate-y-[100%] hover:after:translate-y-[0%]  after:transition-all after:duration-[0.75s] after:ease-[cubic-bezier((.19,1,.22,1)] overflow-hidden capitalize`}
              >
                <span className="group-hover:translate-y-[-100%] inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)]">
                  {link}
                </span>
                <span className="absolute inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)] left-0 translate-y-[100%] group-hover:translate-y-[0%]">
                  {link}
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const HomeMenuLinks = ({
  type,
  name,
  links,
  last,
  color,
}: {
  type: string;
  name: string;
  links: string[];
  last?: boolean;
  color?: string;
}) => {
  const { onCusor } = useMouseHoverAndMenuContext();

 
  return (
    <div
      className={`font-neue grow text-accent relative ${
        !last &&
        " after:border-[1px] after:content-[''] after:h-full after:borderr-textw after:right-0 after:top-0 after:absolute"
      }`}
    >
      <div className="text-accent font-neue mb-[20px] uppercase">
        <small>{name}</small>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        {links.map((link, index) => {
          return (
            <span
              key={index}
              className="overflow-hidden"
              onMouseEnter={() => onCusor("link")}
              onMouseLeave={() => onCusor(false)}
            >
              <Link
                href="/about"
                className={`
                    group text-[56px] relative after:capitalize after:content-['${link}'] after:absolute after:left-0 after:translate-y-[100%] hover:after:translate-y-[0%]  after:transition-all after:duration-[0.75s] after:ease-[cubic-bezier((.19,1,.22,1)] overflow-hidden capitalize`}
              >
                <span className="group-hover:translate-y-[-100%] inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)]">
                  {link}
                </span>
                <span className="absolute inline-block transition-all duration-[0.75s] ease-[cubic-bezier((.19,1,.22,1)] left-0 translate-y-[100%] group-hover:translate-y-[0%]">
                  {link}
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};
