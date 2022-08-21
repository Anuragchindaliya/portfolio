import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import NoSsr from "./NoSsr";

type PropType = {
  exact?: boolean;
  href: string;
  className: string;
  children: ReactNode;
  activeClassName: string;
};
const NavLink = ({
  exact,
  href,
  className,
  children,
  activeClassName,
}: PropType) => {
  const { pathname, asPath } = useRouter();
  const isActive = exact ? pathname === href : asPath === href;
  return (
    <NoSsr>
      <Link href={href}>
        <a
          className={isActive ? activeClassName : className}
          {...(isActive && { "aria-current": "page" })}
        >
          {children}
        </a>
      </Link>
    </NoSsr>
  );
};

export default NavLink;
