import React, { useRef } from "react";
import ChevronMobile from "./common/chevron-mobile";
import useOutsideClick from "../utils/outside-click";
const NavbarItem = ({ data, dark, idx, activeItem, setActiveItem }) => {
  const isActive = data.name === activeItem ? true : false;
  const subItems = data.subItems || null;
  const currentEl = useRef(null);
  const onClick = (e) => {
    if (window.innerWidth < 1024) {
      if (e.target === currentEl.current) {
        if (isActive) {
          setActiveItem("");
        } else {
          setActiveItem(data.name);
        }
      }
    }
  };
  const onHover = (e) => {
    if (window.innerWidth >= 1024) {
      setActiveItem(data.name);
    }
  };
  const onFocus = (e) => {
    console.log("focus", e.target, currentEl.current.contains(e.target), e);
    setActiveItem(data.name);
  };
  const onBlur = (e) => {
    console.log("blur", e.target, currentEl.current.contains(e.target), e);
    if (!currentEl.current.contains(e.target)) {
      setActiveItem("");
    }
  };

  const onLeave = (e) => {
    if (window.innerWidth >= 1024) {
      if (
        e.target !== currentEl.current &&
        currentEl.current.contains(e.target)
      ) {
        setActiveItem("");
      }
    }
  };

  useOutsideClick(currentEl, () => {
    if (window.innerWidth >= 1024) {
      if (isActive) {
        setActiveItem("");
      }
    }
  });

  if (subItems == null) {
    return (
      <li className="block lg:inline-block lg:border-none w-full lg:w-auto text-center">
        <a
          className={`${
            isActive ? "text-gray-200" : "text-white"
          }
            text-grey-3 inline-block hover:opacity-80 w-full px-6 lg:px-6 py-4 lg:py-8 text-left border-b lg:border-none border-white focus:outline-none`}
          href={data.url}
          ref={currentEl}
          onMouseOver={onHover}
          onMouseLeave={onLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
        >
          {data.name}
        </a>
      </li>
    );
  }

  return (
    <li
      className={`${
        isActive ? `is-active` : ``
      } block lg:inline-block lg:border-none w-full lg:w-auto text-center `}
      ref={currentEl}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <button
        className={`${
          idx === 0 ? "lg:px-6" : "lg:px-6"
        } ${
          isActive ? "text-gray-200" : "text-white"
        } px-6 text-left hover:opacity-80 w-full lg:w-auto focus:outline-none py-4 lg:py-8 border-b lg:border-none border-white pointer-events-none lg:pointer-events-auto`}
      >
        {data.name}{" "}
        <span className="inline-block float-right">
          <span className={` w-3.5 h-3.5 mt-1.5`}>
            <ChevronMobile isActive={isActive} />
          </span>
        </span>
      </button>
      <div className="lg:absolute lg:left-0 right-0 text-left lg:top-21 dr-dwn">
        <div
          className="container bg-white p-4 lg:p-8"
          style={{ maxWidth: "1920px" }}
        >
          <div
            className="text-sdv-dark mx-auto max-w-3xl pb-3 text-center leading-tight text-lg"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
          <div className="max-w-3xl h-0.5 bg-gray-100 mx-auto my-4"></div>
          <div className="container mx-auto px-0 lg:px-4">
            <div className="flex flex-wrap -mx-4">
              {Array.from(subItems).map((item, idx, arr) => {
                return (
                  <div
                    className={`px-4 ${arr.length >= 8? "w-1/2 md:w-1/3 lg:w-1/4" : "w-full md:w-1/2 lg:w-1/3"}`}
                    key={`nav-${idx}`}
                  >
                    <a
                      className="bg-white hover:bg-gray-800 text-gray-800 hover:text-white focus:text-white w-full block rounded-lg xl:px-5 xl:py-4 px-3 py-2 focus:bg-gray-800 focus:outline-none"
                      href={`${item.url}`}
                    >
                      <div className="flex justify-start items-center -mx-2">
                        <div className="w-auto px-2 text-2xl font-bold">
                          {item.icon}
                        </div>
                        <div className="w-auto px-2 xl:text-xl my-2">
                          {item.title}
                        </div>
                      </div>
                      <div
                        className="opacity-70 text-sm xl:text-base"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavbarItem;
