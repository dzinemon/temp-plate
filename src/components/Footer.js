import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, StaticQuery, graphql } from "gatsby";

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterImages {
          logo: file(relativePath: { eq: "logo-home.png" }) {
            childImageSharp {
              fixed(width: 84, quality: 100) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <section className=" z-10 relative pt-24">
            <div className="container mx-auto pb-20 md:pb-11">
              <div className="flex flex-col md:flex-row justify-center md:justify-start -mx-4">
                <div className="flex-shrink w-full md:w-3/12 px-4 mb-10 flex justify-center md:justify-start">
                  <div className="w-auto flex-shrink flex flex-col items-center">
                    <Link to={`/`} className="inline-block mb-8">
                      <div className="w-40 h-12 bg-gray-200 flex items-center">
                        <span className="uppercase font-bold">Logo</span>
                      </div>
                    </Link>
                    <div className="flex flex-row -mx-1 mb-8">
                      <div className="px-1">
                        <a
                          target="_blank"
                          rel="noopener"
                          href="#"
                          className="w-10 h-10 flex justify-center items-center bg-white inline-block rounded-full hover:bg-white hover:opacity-100 opacity-80"
                        >
                          <FontAwesomeIcon size={"lg"} icon={faTwitter} />
                        </a>
                      </div>
                      <div className="px-1">
                        <a
                          target="_blank"
                          rel="noopener"
                          href="#"
                          className="w-10 h-10 flex justify-center items-center bg-white inline-block rounded-full hover:bg-white hover:opacity-100 opacity-80"
                        >
                          <FontAwesomeIcon size={"lg"} icon={faLinkedin} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow md:w-9/12 px-4">
                  <div className="flex flex-wrap justify-start">
                    <div className="w-1/2 px-4 md:w-6/12 lg:w-3/12 text-white mb-4">
                      <p className="font-bold mb-6">Footer Column</p>
                      <ul className="font-light">
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to={`#`}
                          >
                            Column Item
                          </Link>
                        </li>
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to={`#`}
                          >
                            Column Item
                          </Link>
                        </li>
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to={`#`}
                          >
                            Column Item
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 px-4 md:w-6/12 lg:w-3/12 text-white mb-4">
                      <p className="font-bold mb-6">Footer Column</p>
                      <ul className="font-light">
                        <li className="mb-4">
                          <a
                            className="hover:underline opacity-60 hover:opacity-100"
                            href="#"
                          >
                            Column Item
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="hover:underline opacity-60 hover:opacity-100"
                            href="#"
                          >
                            Column Item
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            className="hover:underline opacity-60 hover:opacity-100"
                            href={`#`}
                          >
                            Column Item
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 px-4 md:w-6/12 lg:w-3/12 text-white mb-4">
                      <p className="font-bold mb-6">Footer Column</p>
                      <ul className="font-light">
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to="#"
                          >
                            Column Item
                          </Link>
                        </li>
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to="#"
                          >
                            Column Item
                          </Link>
                        </li>
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to="#"
                          >
                            Column Item
                          </Link>
                        </li>
                        <li className="mb-4">
                          <Link
                            className="hover:underline opacity-60 hover:opacity-100"
                            to="#"
                          >
                            Column Item
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
