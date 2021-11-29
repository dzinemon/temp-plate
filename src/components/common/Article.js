import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon } from "@fortawesome/free-solid-svg-icons";

import { Navigation } from ".";

import Footer from "../Footer";

import favicon from "../../../static/favicon.ico";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const PostDefaultLayout = ({ children, bodyClass, isPost }) => {
  return (
    <>
      <Helmet>
        <html lang={`en`} />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>


      <Navigation navClass="block my-4 lg:my-0 px-2 py-2 leading-none rounded-md text-base hover:underline-none focus:outline-none transition duration-150 ease-in-out navbar-item">
        <Link to="/" className="text-gray-200 hover:opacity-80">
          <div className="w-auto max-w-xs">
            <div className="w-40 h-12  flex items-center">
              <FontAwesomeIcon size={"2x"} icon={faBacon} />
              {" "}
              <span className="uppercase font-bold text-2xl ml-2">Logo</span>
            </div>
          </div>
        </Link>
      </Navigation>
      <main className="relative z-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PostDefaultLayout;
