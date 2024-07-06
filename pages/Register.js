import { useState } from "react";
import { NewUser } from "@/lib/api";
import { Toaster, toast } from "sonner";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await NewUser(formData);
    toast.success("Registro correcto");
    setFormData({
      name: "",
      email: "",
      password: "",
      profilePic: "",
    });
  };

  return (
    <div
      id="sign-in-password-form"
      className="mt-8 mb-6 bg-white shadow-md p-7 align-left mx-auto"
      style={{ maxWidth: "580px" }}
    >
      <Toaster />
      <form
        data-testid="registration-form"
        className="space-y-4"
        id="new_user"
        enctype="multipart/form-data"
        action="/users"
        acceptCharset="UTF-8"
        method="post"
        onSubmit={handleSubmit}
      >
        <input name="utf8" type="hidden" value="✓" autoComplete="off" />
        <p className="pb-4 font-bold">Create your account</p>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="user_profile_image"
          >
            Profile image
          </label>
          <input
            accept="image/*"
            className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="file"
            name="profilePic"
            id="user_profile_image"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="user_name"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            type="text"
            name="name"
            id="user_name"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="user_email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            autoComplete="email"
            className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            type="email"
            name="email"
            id="user_email"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="user_password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            autoComplete="current-password"
            className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            type="password"
            name="password"
            id="user_password"
            onChange={handleChange}
          />
        </div>
        <div className="pt-3">
          <input
            type="submit"
            name="commit"
            value="Sign up"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </div>
      </form>
    </div>
  );
}
