"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };

  return (
    <main className="sign-in">
      {/* LEFT SIDE :  TESTIMONIAL FROM PREVIOUS USER */}
      <aside className="testimonial">
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            alt={"logo"}
            width={32}
            height={32}
          />
          <h1>Easy Screen</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={16}
                  height={16}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Easy Screen makes screen recording easy. From quick walkthroughs
              to full presentations, it's fast , smooth and sharable in seconds.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="user"
                width={64}
                height={64}
                className="rounded-full"
              />
              <h2>John Doe</h2>
              <p>CEO, Easy Screen</p>
            </article>
          </section>
        </div>
        ©️ Easy Screen {new Date().getFullYear()}
      </aside>
      {/* RIGHT SIDE :  SIGN IN FORM */}
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src={"/assets/icons/logo.svg"}
              alt={"logo"}
              width={42}
              height={42}
            />
            <h1>Easy Screen</h1>
          </Link>
          <p>
            Create and share your very first <span>Easy Screen video</span> in
            no time!
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={24}
              height={24}
            />
            <span className="text-md font-semibold">Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default Page;
