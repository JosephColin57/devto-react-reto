import SignupButtons from "@/Components/SignupButtons";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <section className="max-w-full font-size[1rem] w-full m-auto grid gap-1 grid-cols-1 p-1 bg-white">
      <div className="rounded-md p-12 pt-6 m-auto w-[640px]">
        <div className="mb-6 text-center">
          <img
            className="mx-auto h-12 block"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="DEV Community"
          />
          <h1 className="mt-4 text-gray-700 text-[1.875rem] leading-snug">
            Join the DEV Community
          </h1>
          <p className="mt-1 text-gray-700 text-base">
            DEV Community is a community of 1,714,810 amazing developers
          </p>
        </div>
        <div>
          <div className="mb-4 grid gap-3 w-full">
            <SignupButtons />
            <Link href="/Register">
              <div
                className="flex items-center justify-center p-3 w-full rounded-md bg-white border border-gray-300 space-x-2 cursor-pointer"
                data-no_instant=""
              >
                <img src="/Email.svg" className="mr-2" />
                <span className="flex-1 text-center font-medium text-sm text-primary">
                  Sign up with Email
                </span>
              </div>
            </Link>
            <div className="flex font-medium text-sm w-full justify-center self-center items-center text-gray-900">
              By signing up, you are agreeing to our{" "}
              <a href=" ">privacy policy</a>, <a href=" ">terms of use</a> and{" "}
              <a href=" ">code of conduct</a>.
            </div>
            <div className="text-center text-gray-700 font-normal">
              Already have an account?{" "}
              <a href="/enter" className="hover:text-blue-600">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}