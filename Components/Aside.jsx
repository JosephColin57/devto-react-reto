export default function Aside () {

  const navLinks = [
    { href: "/Home", src: "/Home.svg", alt: "Home", text: "Home" },
    { href: "/podcast", src: "/Podcast.svg", alt: "Podcast", text: "Podcast" },
    { href: "/videos", src: "/Videos.svg", alt: "Videos", text: "Videos" },
    { href: "/Tags", src: "/Tags.svg", alt: "Tags", text: "Tags" },
    { href: "/FAQ", src: "/FAQ.svg", alt: "FAQ", text: "FAQ" },
    {
      href: "/ForemShop",
      src: "/ForemShop.svg",
      alt: "ForemShop",
      text: "ForemShop",
    },
    {
      href: "/AdvertiseonDev",
      src: "/AdvertiseonDev.svg",
      alt: "AdvertiseonDev",
      text: "Advertise on Dev",
    },
    { href: "/About", src: "/About.svg", alt: "About", text: "About" },
    { href: "/Contact", src: "/Contact.svg", alt: "Contact", text: "Contact" },
    { href: "/Guides", src: "/Guides.svg", alt: "Guides", text: "Guides" },
    {
      href: "/SoftwareComparasions",
      src: "/SoftwareComparasions.svg",
      alt: "SoftwareComparasions",
      text: "SoftwareComparasions",
    },
  ];

  return (
    <nav className="block mb-4 mt-4">
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full flex py-2 px-4 overflow-wrap-normal bg-transparent"
            >
              <span className="overflow-wrap-normal font-inherit cursor-pointer text-gray-400 mr-4">
                <img src={link.src} alt={link.alt} width="24" height="24" />
              </span>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}