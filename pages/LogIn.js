/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SignupButtons from "@/Components/SignupButtons";
import { LoginUser } from "@/lib/api";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/router";

export default function LogIn () {
 const [formData, setFormData] = useState({
   email: "",
   password: "",
 });
 const router = useRouter(); // Inicializar useRouter

 const handleChange = (event) => {
   setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 const handleSubmit = async (event) => {
  event.preventDefault();
  
  const response = await LoginUser(formData);
  // console.log("Respuesta del API:", response); // Para depuración
  
  if (response && response.data && response.data.token) {
    localStorage.setItem("token", response.data.token); // Corregido para guardar correctamente el token
    toast.success("Bienvenido");
    router.push("/HomeLogueado"); // Redirigir al usuario al index después del inicio de sesión exitoso
  } else {
    // Si la respuesta no tiene el formato esperado
    console.error("La respuesta del API no tiene el formato esperado:", response);
    toast.error("Error al iniciar sesión");
  }
};
 ;

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
            <Toaster />
            <div className="mb-4 grid gap-3 w-full">
              <SignupButtons />
              <div
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                id="sign-in-password-form"
              >
                <div class="flex items-center border-b border-gray-200 py-2">
                  <hr class="flex-grow border-gray-200" />
                  <span class="px-4 text-gray-500">OR</span>
                  <hr class="flex-grow border-gray-200" />
                </div>
                <form
                  data-testid="login-form"
                  class="space-y-6"
                  id="new_user"
                  accept-charset="UTF-8"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="user_email"
                      class="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      autocomplete="email"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      id="user_email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      for="user_password"
                      class="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      autocomplete="current-password"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      name="password"
                      id="user_password"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        name="user[remember_me]"
                        type="hidden"
                        value="0"
                        autocomplete="off"
                      />
                      <input
                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        type="checkbox"
                        value="1"
                        checked="checked"
                        name="user[remember_me]"
                        id="user_remember_me"
                      />
                      <label
                        for="user_remember_me"
                        class="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      class="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
                      href="/users/password/new"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div class="flex items-center justify-between pt-3">
                    <input
                      type="submit"
                      name="commit"
                      value="Log in"
                      class="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      data-disable-with="Log in"
                    />
                  </div>
                </form>
                <div class="mt-6 text-center text-sm text-gray-600">
                  By signing in, you are agreeing to our{" "}
                  <a
                    href="/privacy"
                    class="text-indigo-500 hover:text-indigo-800"
                  >
                    privacy policy
                  </a>
                  ,{" "}
                  <a
                    href="/terms"
                    class="text-indigo-500 hover:text-indigo-800"
                  >
                    terms of use
                  </a>{" "}
                  and{" "}
                  <a
                    href="/code-of-conduct"
                    class="text-indigo-500 hover:text-indigo-800"
                  >
                    code of conduct
                  </a>
                  .
                </div>
                <hr class="my-6 border-gray-200" />
                <div class="text-center text-sm text-gray-600">
                  New to DEV Community?{" "}
                  <a
                    href="/enter?state=new-user"
                    class="text-indigo-500 hover:text-indigo-800"
                  >
                    Create account
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}