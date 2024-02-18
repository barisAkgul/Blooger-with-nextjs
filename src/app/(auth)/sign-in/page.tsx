import React from "react";

import SignInForm from "@/components/auth/SignInForm";

const SignInPage = async () => {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-2/3 flex justify-center items-center ">
        {/* Form */}
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
