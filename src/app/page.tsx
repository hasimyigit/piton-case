import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";


export default async function  Home() {
  const  session  = await getSession()
  if(!session.isLoggedIn) {
    redirect("/sign-in");
  }
  redirect('/home')

}
