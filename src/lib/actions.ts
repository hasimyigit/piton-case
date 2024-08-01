"use server";

import { getIronSession,SessionOptions  } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State =
  | {
      status: "success" | 'warning';
      message: string;
    }
  | null;

let email = "hasimyigit@gmail.com";
let password = 'Test123'

const sessionOptions:SessionOptions  = {
    password: "2%46_5sem67^$e8uy27of@_cmp68)_o7!*gw5^d$5z)@9)*y3",
    cookieName: "piton-session",
    cookieOptions:{
      httpOnly:true,
      secure: process.env.NODE_ENV === "production"
    }
  }

   const defaultSession = {
    userId:"",
    email:'',
    isLoggedIn:false
  }

export const getSession = async () => {
  const session = await getIronSession<typeof defaultSession>(cookies(), sessionOptions);
  
  if (typeof session.isLoggedIn === 'undefined') {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }


  return session;
};

export const login = async (prevState: State | null, formData: FormData) : Promise<State> => {
  const session = await getSession();
  const formEmail = formData.get("email")?.toString();
  const formPassword = formData.get("password")?.toString();

  if (formEmail !== email || formPassword !== password) {
    return { message: "Wrong Credentials!",status:"warning" };
  }

  session.userId = "1";
  session.email = formEmail;
  session.isLoggedIn = true;
  await session.save();
  redirect("/home");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/sign-in");
};


