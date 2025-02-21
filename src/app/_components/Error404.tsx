import Link from "next/link";
import React from "react";

interface Error404Props {
  href: string;
}

const Error404: React.FC<Error404Props> = (props) => {
  return (
    <section className="mx-auto h-screen w-full px-4 pt-32 lg:w-1/3">
      <div>
        <p className="text-default mb-3 mt-5 text-xl font-bold md:text-2xl">
          Page not found (404)
        </p>
        <p className="mb-3 text-base font-medium">
          The page you&apos;re looking for may have moved or no longer exists.{" "}
          <Link href={props.href} className="text-underlined">
            Click here
          </Link>{" "}
          to head back.
        </p>
      </div>
    </section>
  );
};

export default Error404;
