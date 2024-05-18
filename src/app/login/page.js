

import { signIn } from "../../../auth";

export default async function LoginPage() {
  return (

    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action={async () => {
            "use server"
            console.log(signIn);
            await signIn("google", {redirectTo: '/auth'})
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>


      </div>
    </div>

  )
}
