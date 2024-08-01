"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormState, login } from "@/lib/actions";
import { schema } from "@/lib/Schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm, UseFormRegister } from "react-hook-form";
import { z } from "zod";



// Everything within our <form> tag
export function FormContent({
  register,
  isValid,
  state,
}: {
  register: UseFormRegister<z.output<typeof schema>>;
  isValid: boolean;
  state: FormState;
}) {
  // Pending reflects the loading state of our form
  const { pending } = useFormStatus();
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-col mt-[80px] gap-[10px] w-[400px]">
      <label className="font-semibold text-[#090937] text-[20px]">E-mail</label>
      <Input {...register("email")} placeholder="john@mail.com" />

      <label className="mt-[30px] font-semibold text-[#090937] text-[20px]">
        Password
      </label>
      <div className="relative">
        <Input
          type={toggle ? "password" : "text"}
          {...register("password")}
          placeholder="******"
        />
        <span
          className="flex justify-around items-center absolute bottom-2 right-3 text-2xl"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "☻" : "☺"}
        </span>
      </div>

      <div className="flex">
        <input type="checkbox" checked name="" id="" />
        <span className="font-bold text-[#6251DD] text-[16px] ml-1">
          Remember Me
        </span>
      </div>
      {state?.message !== "" && !state.issues && (
        <div className="text-red-500">{state.message}</div>
      )}
      {state?.issues && (
        <div className="text-red-500">
          <ul>
            {state.issues.map((issue: string) => (
              <li key={issue} className="flex gap-1">
                <X fill="red" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={`flex flex-col gap-1  ${state?.issues ? 'mt-[20px]' : 'mt-[150px]'}`}>
        <Button disabled={pending}>
          {pending ? (
            <span className="float-left">
              <LoaderCircle className="animate-spin float-end" /> Loading
            </span>
          ) : (
            <span>Login</span>
          )}
        </Button>
      </div>
    </div>
  );
}

const Login = () => {
  const [state, formAction] = useFormState<FormState, FormData>(login, {
    message: "",
  });

  const {
    register,
    formState: { isValid },
  } = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(state?.fields ?? {}),
    },
  });

  return (
    <div className="h-screen flex ">
      <div className="w-[50%] h-[100%] relative">
        <Image src="/Picture.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-[50%] flex flex-col mt-[80px]  items-center">
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
        <form action={formAction}>
          <FormContent register={register} isValid={isValid} state={state} />
        </form>
      </div>
    </div>
  );
};

export default Login;
