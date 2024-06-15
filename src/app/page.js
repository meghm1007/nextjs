import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold">Welcome niggas</h1>
      <Link href={"/product"}>Products</Link>
      <Link href={"/account"}>Account</Link>
    </main>
  );
}
