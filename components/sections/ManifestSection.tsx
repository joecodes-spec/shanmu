import React from "react";
import ManifestHeader from "./manifest/ManifestHeader";
import ManifestImages from "./manifest/ManifestImages";
import ManifestTextGrid from "./manifest/ManifestTextGrid";

export default function ManifestSection() {
  return (
    <section className="relative w-full bg-[#262421] text-white pt-24 md:pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto relative flex flex-col w-full">
        <ManifestHeader />
        <ManifestImages />
        <ManifestTextGrid />
      </div>
    </section>
  );
}
