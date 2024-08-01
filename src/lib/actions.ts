"use server";

import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { schema } from "./Schema/formSchema";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

let email = "hasimyigit@gmail.com";
let password = "Test123";

const sessionOptions: SessionOptions = {
  password: "2%46_5sem67^$e8uy27of@_cmp68)_o7!*gw5^d$5z)@9)*y3",
  cookieName: "piton-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

const defaultSession = {
  userId: "",
  email: "",
  isLoggedIn: false,
};

export const getSession = async () => {
  const session = await getIronSession<typeof defaultSession>(
    cookies(),
    sessionOptions
  );

  if (typeof session.isLoggedIn === "undefined") {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  prevState: FormState | null,
  data: FormData
): Promise<FormState> => {
  const session = await getSession();
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);
  const formEmail = data.get("email")?.toString();

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (parsed.data.email !== email || parsed.data.password !== password) {
    return {
      message: "Wrong Credentials!",
      fields: parsed.data,
    };
  }

  session.userId = "1";
  session.email = email;
  session.isLoggedIn = true;
  await session.save();
  redirect("/home");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/sign-in");
};
