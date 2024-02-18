"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

type Props = {};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
});

type SettingsFormValues = z.infer<typeof formSchema>;

const SignInForm = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const Login = async (data: SettingsFormValues) => {
    try {
      setLoading(true);

      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log(response);
      if (response?.ok) {
        toast.success("Logged in");
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Invalid credential.");
      }
    } catch (error) {
      toast.error(`Error while logging in ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col m-auto  space-y-8 w-full md:px-32 "
      onSubmit={handleSubmit(Login)}
    >
      <h1 className="font-medium text-xl">Sign in to Blooger</h1>
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
            <span className="text-sm text-red-500  m-0">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-3 ">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="border rounded p-2 mb-3 input-wrapper"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-sm text-red-500 ">
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
        <Link href="/sign-up">
          <strong>&nbsp;here</strong>
        </Link>
      </span>
    </form>
  );
};

export default SignInForm;
