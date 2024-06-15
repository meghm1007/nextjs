import { redirect } from "next/navigation";

export default function AccountPage() {
  const userProfile = null;
  if (userProfile === null) {
    redirect("/profile");
  }
  return <div>Account</div>;
}
