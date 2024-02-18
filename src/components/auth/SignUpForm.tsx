"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Props = {};

const formSchema = z.object({
  name: z.string().min(5).max(40),
  email: z.string().email(),
  password: z.string().min(5).max(20),
});

type SettingsFormValues = z.infer<typeof formSchema>;

const SignUpForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
  });

  const submitData = (data: SettingsFormValues) => {
    console.log("IT WORKED", data);

    setLoading(true);
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
        if (response?.status == 200) {
          toast.success("Sign up succesfull");
          router.refresh();
          router.push("/sign-in");
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      className="flex flex-col m-auto px-10 space-y-8 w-full md:px-32 pt-20 "
      onSubmit={handleSubmit(submitData)}
    >
      <h1 className="font-medium text-xl">Sign in to Blooger</h1>
      <div className="flex flex-col space-y-3">
        <label htmlFor="email">Name</label>
        <div className="">
          <input
            id="name"
            type="text"
            className="border rounded p-2 w-full mb-3 input-wrapper"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-sm text-red-600 m-0">
              {errors.name.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="email">Email Address</label>
        <div className="">
          <input
            id="email"
            type="email"
            className="border rounded p-2 w-full mb-3 input-wrapper"
            {...register("email")}
            placeholder="E-mail"
          />
          {errors.email && (
            <span className="text-sm text-red-600 m-0">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="border rounded p-2 mb-3 input-wrapper"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-sm text-red-600 m-0">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#03A9F4] rounded-full p-2 text-white font-semibold"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      <span className="flex justify-center text-sm text-gray-500">
        Don’t have an account. Create account{" "}
        <Link href="/sign-in">
          <strong>&nbsp;here</strong>
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;
