export default function SocialMedia () {

    function IconLink({ href, className, svgProps, pathProps }) {
  return (
    <a href={href} className={className}>
      <svg {...svgProps}>
        <path {...pathProps} />
      </svg>
    </a>
  );
}

const iconLinks = [
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      fill: "#000000",
      width: "20",
      height: "20",
      viewBox: "0 0 1920 1920",
      xmlns: "http://www.w3.org/2000/svg",
    },
    pathProps: {
      d: "M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444",
    },
  },
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      role: "img",
      "aria-labelledby": "arj3np8c5hme97h8562aj3z5c3bdccbp",
    },
    pathProps: {
      d: "M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z",
    },
  },
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      fill: "#000000",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-labelledby": "aaxicldsdupe8xd5w8n55e2py66g08p9",
    },
    pathProps: {
      d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z",
    },
  },
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      fill: "#000000",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-labelledby": "af1x877585jmcczs8syqio44kyuvasvs",
    },
    pathProps: {
      d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z",
    },
  },
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      fill: "#000000",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    },
    pathProps: {
      d: "M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z",
      title: "Twitch",
    },
  },
  {
    href: "#",
    className:
      "inline-block relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full p-2 bg-transparent overflow-wrap-normal",
    svgProps: {
      fill: "#000000",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    },
    pathProps: {
      d: "M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z",
      title: "Mastodon",
    },
  },
];

    return (
      <>
        {iconLinks.map((link, index) => (
          <IconLink key={index} {...link} />
        ))}
      </>
    );
}