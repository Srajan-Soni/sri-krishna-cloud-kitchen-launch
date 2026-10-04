export const SITE_CONFIG = {
  name: "Sri Krishna Cloud Kitchen",
  shortName: "Sri Krishna",
  locationHindi: "गढ़ा, जबलपुर, मध्य प्रदेश",
  locationEnglish: "Garha, Jabalpur, Madhya Pradesh",
  phones: ["8103560228", "7828244431"],
  instagramHandle: "@srikrishna_cloud_kitchen_jbp",
  instagramUrl: "https://www.instagram.com/srikrishna_cloud_kitchen_jbp/",
  zomatoUrl: "",
  swiggyUrl: "",
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
