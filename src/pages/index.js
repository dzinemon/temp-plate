import React from "react";
import { Article } from "../components/common";
import config from "../utils/siteConfig";
import Seo from "../components/Seo";

export default function HomePage() {
  return (
    <Article>
      <Seo
        title={config.siteTitleMeta}
        description={config.siteDescriptionMeta}
        type="website"
        image={``}
        canonical={``}
      />

      <div className="mx-auto" style={{ maxWidth: "1920px"}}>
        <div className="h-screen w-screen " />
        
      </div>
    </Article>
  );
}
