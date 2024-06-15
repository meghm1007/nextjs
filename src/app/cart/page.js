"use client";

import { usePathname } from "next/navigation";

export default function Cart() {
  const pathName = usePathname();
  return <div>This is the cart page🛒</div>;
}
