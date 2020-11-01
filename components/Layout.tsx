import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  tags?: string[];
  active?: string;
};

const Layout = ({
  children,
  title = "Rick And Morty",
  description,
  tags,
  active,
}: Props) => {
  const links = [
    {
      name: "Characters",
      link: "/",
    },
    {
      name: "Locations",
      link: "/locations",
    },
    {
      name: "Episodes",
      link: "/episodes",
    },
  ];
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-152902992-2"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-152902992-2');
  `,
          }}
        />

        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={tags?.join(" , ")} />
        <meta name="author" content="Phiber Soft" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="navHeader">
        <nav className="nav">
          {links.map((link) => {
            var pr = { className: "navLink" };
            if (active == link.link) {
              pr.className = "navLink active";
            }
            return (
              <Link href={link.link} key={link.link}>
                <a {...pr}>{link.name}</a>
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="bodyWrap">{children}</div>
    </div>
  );
};

export default Layout;
