export default function PopularTags() {
    
  const hashtags = [
    "#webdev",
    "#javascript",
    "#beginners",
    "#programming",
    "#tutorial",
    "#react",
    "#python",
    "#productivity",
    "#devops",
    "#aws",
    "#opensource",
    "#ai",
    "#discuss",
    "#css",
    "#node",
    "#news",
    "#career",
    "#typescript",
    "#html",
    "#database",
  ];

  return (
    <div>
      {hashtags.map((hashtag) => (
        <div key={hashtag} className="padding-left: 0.75rem;">
          <a
            href=""
            className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full flex py-2 px-4 overflow-wrap-normal bg-transparent"
          >
            {hashtag}
          </a>
        </div>
      ))}
    </div>
  );
}
