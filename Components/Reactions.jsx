export default function Reactions() {

const reactionImages = [
  {
    id: 1,
    url: "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
  },
  {
    id: 2,
    url: "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
  },
  {
    id: 3,
    url: "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
  },
  {
    id: 4,
    url: "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
  },
  {
    id: 5,
    url: "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
  },
];
    return (
      <div className="reactions-container">
        {reactionImages.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            className="absolute w-7 h-7 rounded-full p-1 bg-blue-200"
            style={{ left: `${index * 15}px`, top: "0px" }}
            alt={`Reaction ${index + 1}`}
          />
        ))}
      </div>
    );
}