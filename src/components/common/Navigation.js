import React, { useRef, useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import PropTypes from "prop-types";
import NavbarItem from "../NavbarItem";

import useOutsideClick from "../../utils/outside-click";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSlack, faLinkedin, faAmazon, faTwitch, faYoutube, faInstagram, faFacebook, faPinterest, faGoogle, faHackerNews, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faDatabase, faKeyboard, faRocket } from '@fortawesome/free-solid-svg-icons'

const navbarItems = [
    {
      name: "Nav Item 1",
      text:
        "<p class='leading-tight'>Navbar Top text description for extra info.</p>",
      subItems: [
        {
          title: "Navbar Item Title",
          icon: <FontAwesomeIcon size="lg" icon={faGoogle} />,
          url: "https://github.com",
          text:
            "Navbar item text description for extra info.",
        },
        {
          title: "Navbar Item Title",
          icon: <FontAwesomeIcon size="lg" icon={faHackerNews} />,
          url: "https://github.com",
          text: "Navbar item text description for extra info.",
        },
        {
          title: "Navbar Item Title",
          icon: <FontAwesomeIcon size="lg" icon={faKeyboard} />,
          url: "https://github.com",
          text:
            "Navbar item text description for extra info.",
        },
        {
          title: "Navbar Item Title",
          icon: <FontAwesomeIcon  size="lg" icon={faWhatsapp} />,
          url: "https://github.com",
          text: "Navbar item text description for extra info.",
        },
        {
          title: "Navbar Item Title",
          icon: "Text",
          url: "https://github.com",
          text:
            "Navbar item text description for extra info.",
        }
      ],
    },
    {
        name: "Nav Item 2",
        text:
          "<p class='leading-tight'>Navbar Top text description for extra info.</p>",
        subItems: [
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon size="lg" icon={faAmazon} />,
            url: "https://github.com",
            text:
              "Navbar item text description for extra info.",
          },
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon size="lg" icon={faGithub} />,
            url: "https://github.com",
            text: "Navbar item text description for extra info.",
          },
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon size="lg" icon={faCopy} />,
            url: "https://github.com",
            text:
              "Navbar item text description for extra info.",
          },
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon  size="lg" icon={faSlack} />,
            url: "https://github.com",
            text: "Navbar item text description for extra info.",
          },
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon  size="lg" icon={faDatabase} />,
            url: "https://github.com",
            text:
              "Navbar item text description for extra info.",
          },
          {
            title: "Navbar Item Title",
            icon: <FontAwesomeIcon  size="lg" icon={faRocket} />,
            url: "https://github.com",
            text:
              "Navbar item text description for extra info.",
          }
        ],
      },
      { name: "Pricing", url: "#" },
    { 
        name: "Social Items",
        text: `Navbar item social items description for extra info.`,

        subItems: [
            {
                title: "Linkedin",
                icon: <FontAwesomeIcon  size="lg" icon={faLinkedin} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Facebook",
                icon: <FontAwesomeIcon  size="lg" icon={faFacebook} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Instagram",
                icon: <FontAwesomeIcon  size="lg" icon={faInstagram} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Twitch",
                icon: <FontAwesomeIcon  size="lg" icon={faTwitch} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Youtube",
                icon: <FontAwesomeIcon  size="lg" icon={faYoutube} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Twitter",
                icon: <FontAwesomeIcon  size="lg" icon={faLinkedin} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Pinterest",
                icon: <FontAwesomeIcon  size="lg" icon={faPinterest} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
            {
                title: "Slack",
                icon: <FontAwesomeIcon  size="lg" icon={faSlack} />,
                url: "https://github.com",
                text: `<p>Visit us on any platform</p>`
            },
        ]
    },
    { name: "Contact Us", url: "#" }
  ]



/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const Navigation = ({ children }) => {

    const ref = useRef();

    const [isWhite, setNavbarColor] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const changeNavBackground = () => {
        const scrolledThrough = window.scrollY >= 30;
        if (scrolledThrough && isWhite) {
            document.body.classList.add("nav-bg-white");
            setNavbarColor(false);
        } else if (!scrolledThrough) {
            document.body.classList.remove("nav-bg-white");
            setNavbarColor(true);
        }
    };  

    useEffect(() => {
        window.addEventListener("scroll", changeNavBackground);
        window.addEventListener("resize", removeNavbarStatuses);
        return () => {
            window.removeEventListener("scroll", changeNavBackground);
            window.addEventListener("resize", removeNavbarStatuses);
        };
    });

    function removeNavbarStatuses () {
        document.body.classList.remove('overflow-hidden');
        document.querySelector('body main').classList.remove('pointer-events-none');
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.remove('overflow-hidden');
        document.querySelector('body main').classList.remove('pointer-events-none');
    }, []);

    useOutsideClick(ref, () => {
        console.log('outside navbar click')
        setNavActive(false);
            document.body.classList.remove('overflow-hidden');
            document.querySelector('body main').classList.remove('pointer-events-none');
        if (isActive) {
            setNavActive(!isActive);
            document.body.classList.remove('overflow-hidden');
        }
    });

    const [isActive, setNavActive] = useState(false);

    const handleNavCollapse = () => {
        setNavActive(!isActive);
        if (!isActive) {
            document.body.classList.add('overflow-hidden');
            document.querySelector('body main').classList.add('pointer-events-none');
        } else {
            document.body.classList.remove('overflow-hidden');
            document.querySelector('body main').classList.remove('pointer-events-none');
        };
    };

    return (
        <nav
            className={`lg:h-auto h-20 flex flex-col justify-center items-center z-50 fixed w-full`}
            id="navbar"
            ref={ref}
        >
            <div className="container mx-auto">
                <div className=" flex md:flex-row flex-col items-center justify-between -mx-5">
                    <div className="absolute inset-y-0 px-2 right-0 flex items-center lg:hidden ">
                        <Hamburger
                            color="#ffffff"
                            rounded
                            size={20}
                            toggled={isActive}
                            toggle={handleNavCollapse}
                            onClick={handleNavCollapse}
                        />
                    </div>
                    <div className="flex md:flex-row flex-wrap flex-col items-center justify-between w-full px-5">
                        <div className="md:order-2 w-full lg:w-2/12 flex md:justify-center lg:justify-start justify-center">
                            {children}
                        </div>
                        <div className="md:order-1 w-auto lg:order-2">
                            <div
                                
                                className={`${
                                    isActive ? "flex" : "hidden"
                                } lg:block nav-collapse absolute lg:static top-20 lg:top-auto inset-x-0 bg-gray-800 lg:bg-transparent z-30`}
                            >
                                <div className=" flex lg:flex-row flex-col lg:justify-center items-center w-full h-full relative lg:static z-50">
                                    {navbarItems.map((item, idx) => <NavbarItem 
                                        data={item} 
                                        key={idx} 
                                        idx={idx} 
                                        activeItem={activeItem} 
                                        setActiveItem={setActiveItem} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navigation.defaultProps = {
    navClass: `site-nav-item`,
};

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    navClass: PropTypes.string,
};

export default Navigation;
