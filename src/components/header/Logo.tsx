import { ScreenRoutes } from "@/helpers/config/site";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      className="text-2xl font-bold text-columbia-blue flex gap-2"
      href={`/${ScreenRoutes.HOME}`}
    >
      <Image height={30} width={30} alt="logo" src="/logo.svg" />
      Blooger
    </Link>
  );
};
