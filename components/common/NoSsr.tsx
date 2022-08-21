import dynamic from "next/dynamic";
import { ReactNode } from "react";

// const NoSsr = dynamic(
//   () =>
//     Promise.resolve(({ children }: { children: ReactNode }) => <>{children}</>),
//   { ssr: false }
// );
// export default NoSsr;

const NoSsr = ({ children }: { children: ReactNode }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
