/* eslint-disable @next/next/no-img-element */
import Aside from "../Components/Aside";
import Other from "../Components/Other";
import SocialMedia from "../Components/SocialMedia";
import PopularTags from "../Components/PopularTags";
import Link from "next/link";
import MainPost from "@/Components/MainPost";
import SubContainer from "@/Components/SubContainer";

export default function Home() {
  return (
    <main>
      <header className="h-14 bg-white shadow-sm z-40 sticky top-0">
        <nav className="max-w-screen-2xl px-3 flex items-center relative h-14">
          <div className="max-w-xs text-gray-900 cursor-pointer">
            <img
              className="box-border max-w-full w-auto h-10 object-contain inline-block outline-none"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community'"
            />
          </div>
          <div className="block max-w-md flex-1 mx-4">
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-row text-base relative items-center flex-1">
                <input
                  className="bg-white border border-gray-300 text-gray-900 appearance-none rounded-md leading-normal py-[calc(0.5em-1.5px)] px-2 font-inherit text-base w-full resize-y"
                  type="text"
                  placeholder="Search..."
                />
                <button className="flex absolute right-0 p-2 font-inherit cursor-pointer border-none rounded-md bg-transparent overflow-wrap-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="icon"
                    focusable="false"
                  >
                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="h-full items-center flex ml-auto justify-end">
            <div className="flex mr-1">
              <span className="block">
                <Link href="/LogIn">
                  <div className="flex p-2 px-4 relative cursor-pointer max-w-full whitespace-nowrap no-underline rounded-md ml-auto mr-1">
                    Log in
                  </div>
                </Link>
              </span>
              <Link href="/CreateAccount">
                <div className="p-2 text-blue-600 border border-blue-600 rounded-md mx-auto my-0 cursor-pointer hover:bg-blue-600 hover:text-white hover:border-transparent hover:underline">
                  Create account
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex justify-between w-screen mx-auto p-2">
        <aside className="max-w-[17rem] p-4 box-border flex-1 block w-[280px] ml-[0.4rem] mr-[0.4rem]">
          <div className="p-4 border border-gray-200 rounded-md bg-white">
            <h2 className="block text-[1.5em] mt-[0.83em] mb-[1.83em] font-bold leading-[1.25]">
              DEV Community is a community of 1,258,580 amazing developers
            </h2>
            <p className="block my-4 mx-0 mb-4 text-gray-700">
              We re a place where coders share, stay up-to-date and grow their
              careers.
            </p>
            <div>
              <Link href="/CreateAccount">
                <div className="box-border p-2 border border-blue-600 no-underline rounded-md bg-transparent text-blue-600 outline-none text-center inline-flex relative mb-1 w-full justify-center cursor-pointer">
                  Create account
                </div>
              </Link>
              <Link href="/LogIn">
                <div className="flex py-2 px-4 bg-transparent relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full justify-center">
                  Log in
                </div>
              </Link>
            </div>
          </div>
          <Aside />
          <nav className="block mt-4 mb-4">
            <h2 className="block pl-3 pt-4 pb-4 text-2xl font-bold mb-3 mt-3 mx-0">
              Other
            </h2>
            <Other />
            <div className="flex justify-start mb-4">
              <SocialMedia />
            </div>
            <nav className="mb-6">
              <h3 className="block text-lg font-bold mx-0 my-4 p-4">
                Popular Tags
              </h3>
              <div className="w-full h-48 overflow-y-auto">
                <div className="padding-left: 0.75rem;">
                  <PopularTags />
                </div>
              </div>
            </nav>
            <div>
              <div>
                <div className="p-4 border border-gray-200 rounded-md bg-white">
                  <div className="relative w-full flex justify-between">
                    <div>DEV Community</div>
                    <a href="#" className="rounded-md pl-[2%] pr-[2%] pt-[2%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a3fq3lq15u66daw3ik8yqahtqndzye1g"
                      >
                        <title id="a3fq3lq15u66daw3ik8yqahtqndzye1g">
                          Dropdown menu
                        </title>
                        <path d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                    </a>
                  </div>
                  <p>
                    <img
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
                      alt="Dark Mode"
                      loading="lazy"
                      className="w-full h-56 rounded-md"
                    />
                  </p>
                  <h2>
                    Life is too short to browse without
                    <a
                      href="#"
                      className="underline text-blue-600 cursor-pointer text-2xl font-bold ml-1"
                    >
                      dark mode
                    </a>
                    .
                  </h2>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <div></div>
            </div>
            <footer className="text-gray-700 mt-6 block text-sm">
              <p>
                <a
                  className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full mr-1"
                  href="#"
                >
                  DEV Community
                </a>
                A constructive and inclusive social network for software
                developers. With you every step of your journey.
              </p>
              <p className="block mt-4 mx-0 my-4">
                Built on
                <a
                  href="#"
                  className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full ml-1"
                >
                  Forem
                </a>
                — the
                <a
                  href="#"
                  className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full ml-1 mr-1"
                >
                  open source
                </a>
                software that powers
                <a
                  href="#"
                  className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full ml-1 mr-1"
                >
                  DEV
                </a>
                and other inclusive communities.
              </p>
              <p className="block mt-4 mx-0 my-4">
                Made with love and
                <a
                  href=""
                  className="relative rounded-md font-inherit cursor-pointer outline-none no-underline text-gray-400 max-w-full ml-1"
                >
                  Ruby on Rails
                </a>
                . DEV Community
                <span>©</span>
                2016 - 2024.
              </p>
            </footer>
          </nav>
        </aside>
        <main className="flex flex-col justify-start h-screen w-screen p-2.5 gap-5">
          <header>
            <nav>
              <ul className="list-none flex">
                <li className="overflow-hidden rounded-md mx-1 list-item text-left">
                  <b>Relevant</b>
                </li>
                <li className="overflow-hidden rounded-md mx-1 list-item text-left">
                  Latest
                </li>
                <li className="overflow-hidden rounded-md mx-1 list-item text-left">
                  Top
                </li>
              </ul>
            </nav>
          </header>
          <MainPost />
          <SubContainer />
        </main>
        <div className="flex-2 border-none p-4 mx-[1.4rem] block">
          <section className="rounded bg-white">
            <div>
              <div className="p-3 border-b border-gray-200">
                <h3>
                  <a href="#" className="font-bold">
                    #discuss
                  </a>
                </h3>
                <p className="text-xs">
                  Discussion threads targeting the whole community
                </p>
              </div>
              <div className="border-none">
                <div href="" className="p-3 border-b border-gray-200">
                  <a>How to Become a Better Coder?</a>
                  <div className="text-xs">47 comments</div>
                </div>
                <div href="" className="p-3 border-b border-gray-200">
                  <a>The Front-End Development we’re used to is dying</a>
                  <div className="text-xs">47 comments</div>
                </div>
                <div href="" className="p-3 border-b border-gray-200">
                  <a> I suck at writing!</a>
                  <div className="text-xs">47 comments</div>
                </div>
                <div href="" className="p-3 border-b border-gray-200">
                  <a>What was your win this week?</a>
                  <div className="text-xs">47 comments</div>
                </div>
                <div href="" className="p-3 border-b border-gray-200">
                  <a>Should You Be Documenting Your Coding Journey?</a>
                  <div className="text-xs">47 comments</div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded bg-white shadow-inner mt-2">
            <div className="listSidebar">
              <div className="p-3 border-b border-gray-200">
                <h3>
                  <a href="">#watercooler</a>
                </h3>
                <p> Light, and off-topic conversation.</p>
              </div>
              <div className="border-none">
                <div href="" className="p-3 border-b border-gray-200">
                  <a>Caption This! 🤔💭</a>
                  <div className="text-xs">6 comments</div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-gray-200 p-0 px-4 pb-4 mt-2">
            <div className="p-3">
              <h4>trending guides/resources</h4>
            </div>
            <div>
              <div className="p-3 border-b border-gray-200">
                <a href="">The future of frontend development</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  GitHub Readme: Responsive? 🤔 Animated? 🤯 Light and dark
                  modes? 😱 You bet! 💪🏼
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">10 Programming Languages Worth Learning in 2024</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  ✨ Top 5 Underrated Open Source Projects that no one talks
                  about 🫵🤐
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  What is the ideal Tech stack to build a website in 2024? 👨‍💻
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Optimizing SQL Queries by 23x!!!</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Modern Data Engineering RoadMap - 2024</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  Git Good: Best Practices for Branch Naming and Commit Messages
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  So I completed Replit's free 100 Days of Python course
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  From Next.js to Rails then Elixir: My journey through React.js
                  burnout
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">UUID in PostgreSQL</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  1 billion rows challenge in PostgreSQL and ClickHouse
                </a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">
                  S.O.L.I.D: The 5 Golden Rules to Level Up Your Coding Skills
                </a>
              </div>
            </div>
          </section>

          <section className="border-b border-gray-200 p-0 px-4 pb-4 mt-2">
            <div className="p-3">
              <h4>recently queried</h4>
            </div>
            <div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Programming Discord</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href=""> Dino Tutorial</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href=""> Clean Architecture</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Sublime Text vs Vscode</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Strikethrough Text Twitter</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">GCC for Windows</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Django Allauth</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Best VSCode Themes</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Landing Page Template</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Free Apis</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Line-height CSS</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">Spotify Shuffle Sucks</a>
              </div>
              <div className="p-3 border-b border-gray-200">
                <a href="">JavaScript Reverse String</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
