"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(pathName, searchParams);
  return <div>This is the cart page🛒</div>;
}
