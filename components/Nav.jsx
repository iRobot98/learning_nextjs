"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ProfileImage } from "./subcomponents";
import Image from "next/image";

function Nav() {
  const isUserLoggedIn = true;
  const { data: session } = useSession();
  const [providers, set_Providers] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => setDropDown(!dropDown);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      set_Providers(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          className="object-contain"
          width={30}
          alt="logo"
          height={30}
        />
        <p className="logo">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-prompt">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <ProfileImage />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn bg-black"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <div onClick={toggleDropDown}>
              <ProfileImage />
            </div>
            {dropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="black_btn bg-black mt-5 w-full "
                  onClick={() => {
                    setDropDown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
