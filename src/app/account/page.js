import { redirect } from "next/navigation";

export default function AccountPage() {
  const userProfile = null;
  if (userProfile === null) {
    redirect("product?search=product1");
  }
  return <div>Account</div>;
}
