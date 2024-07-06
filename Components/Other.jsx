export default function Other () {

const links = [
  {
    src: "./CodeofConduct.svg",
    alt: "Code of Conduct",
    text: "Code of Conduct",
  },
  {
    src: "./PrivacyPolicy.svg",
    alt: "Privacy Policy",
    text: "Privacy Policy",
  },
  {
    src: "/TermsofUse.svg",
    alt: "Terms of Use",
    text: "Terms of Use",
  },
];
return (
  <ul>
    {links.map((link) => (
      <li key={link.text}>
        <a
          href=""
          className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full flex py-2 px-4 overflow-wrap-normal bg-transparent"
        >
          <span className="overflow-wrap-normal font-inherit cursor-pointer text-gray-400 mr-2 ml-[-2]">
            <img src={link.src} alt={link.alt} />
          </span>
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);
}