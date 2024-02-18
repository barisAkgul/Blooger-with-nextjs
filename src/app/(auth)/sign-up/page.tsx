import React from "react";

import SignUpForm from "@/components/auth/SignUpForm";

const SignInPage = async () => {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-2/3 flex justify-center items-center ">
        {/* Form */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignInPage;
