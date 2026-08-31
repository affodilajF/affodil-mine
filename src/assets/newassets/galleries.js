import broilerarch from "./nestedfiles/broiler-arch.webp";
import broilertechstack from "./nestedfiles/broiler-techstack.webp";
import techfestpiagam from "./nestedfiles/techfest-piagam.webp";
import magnamini from "./nestedfiles/magna-mini.webp";

// extra images shown as thumbnails under the main one, per project id
const GALLERIES = {
  "w-broiler": [
    { src: broilerarch, label: "System architecture" },
    { src: broilertechstack, label: "Tech stack" },
  ],
  "w-techfest": [{ src: techfestpiagam, label: "Certificate" }],
  "w-magna": [{ src: magnamini, label: "Design detail" }],
};

export default GALLERIES;
