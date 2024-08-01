
import Login from "@/app/components/Login";
import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/home");
  }
  return <Login />;
};
export default SignInPage;
