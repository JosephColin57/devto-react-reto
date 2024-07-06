export default function SignupButtons () {

    const buttons = [
      {
        id: "apple",
        name: "Sign up with Apple",
        iconSrc: "/Apple.svg",
      },
      {
        id: "facebook",
        name: "Sign up with Facebook",
        iconSrc: "/Facebook.svg",
      },
      {
        id: "Forem",
        name: "Sign up with Forem",
        iconSrc: "/Forem.svg",
      },
      {
        id: "Github",
        name: "Sign up with Github",
        iconSrc: "/Github.svg",
      },
        {
            id: "Google",
            name: "Sign up with Google",
            iconSrc: "/Google.svg",
        },
        {
            id: "Twitter",
            name: "Sign up with Twitter (X)",
            iconSrc: "/X.svg",
        },
    ];

    return (
      <form className="w-full flex flex-col">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="flex p-3 w-full items-center rounded-md bg-white mb-4 border border-gray-300"
          >
            <img src={button.iconSrc} alt="" />
            <span className="flex font-semibold text-sm w-full justify-center self-center items-center text-gray-900">
              {button.name}
            </span>
          </button>
        ))}
      </form>
    );
}