"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

interface formType {
  email: string;
  password: string;
}

const SignInPage = () => {

  const router = useRouter();
  const [formState, setFormState] = useState<formType>({
    email: "",
    password: "",
  });

  const fetchPost = async (formState: formType) => {
    const res = await fetch("https://assign-api.piton.com.tr/api/rest/login", {
      method: "POST",
      body: JSON.stringify(formState),
    });
    const data = await res.json();
    router.push("/best");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex ">
      <div className="w-[50%] h-[100%] relative">
        <Image src="/Picture.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-[50%] flex flex-col pt-[80px] px-6 items-center">
        <Image
          src="/logo.png"
          alt=""
          className="object-contain"
          width={120}
          height={78}
        />
        <div className="mt-[111px]">
          <span className="text-[#09093760] text-[24px]">Welcome back!</span>
          <h3 className="text-[#090937] text-[32px]">Login to your account</h3>
        </div>
        <div className="flex flex-col mt-[80px] gap-[10px] w-[400px]">
          <label>E-mail</label>
          <Input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="john@mail.com"
          />

          <label className="mt-[40px]">Password</label>
          <Input
            name="password"
            type="text"
            
            value={formState.password}
            onChange={handleChange}
            placeholder="******"
          />
          <div className="flex flex-col gap-1">
            <Button onClick={() => fetchPost(formState)}>Login</Button>
            <Button onClick={() => fetchPost(formState)}>Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
