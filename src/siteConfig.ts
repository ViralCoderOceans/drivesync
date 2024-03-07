"server-only";

interface ISiteConfig {
  domain: string;
  shortName: string;
  baseUrl: string;
  applicationName: string;
  title: string;
  description: string;
  logo: string;
  keywords: string[];
  publisher: string;
  twitter: {
    username: string;
    url: string;
    title: string;
    description: string;
  };
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    images: {
      url: string;
      alt?: string;
      secureUrl?: string;
      type?: string;
      width?: string | number;
      height?: string | number;
    }[];
  };
  social: {
    title: string;
    url: string;
  }[];
  authors: {
    name: string;
    url: string;
  }[];
  xml?: string;
  wholeWebsiteBgColor?: string
}

const SiteConfig: ISiteConfig = {
  domain: "DriveSync",
  shortName: "DriveSync",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  applicationName: "DriveSync",
  title: "DriveSync",
  description: "DriveSync's description",
  logo: "/assets/images/coderoceans-logo.png",
  keywords: ["DriveSync"],
  publisher: "DriveSync",
  twitter: {
    username: "username",
    url: "https://exmple.com",
    title: "title",
    description: "description",
  },
  organization: {
    name: "DriveSync",
    url: "url",
    logo: "/assets/images/driveSync.svg",
  },
  seo: {
    title: "DriveSync",
    description: "DriveSync's description",
    keywords: ["DriveSync"],
    images: [],
  },
  social: [],
  authors: [],
  xml: "",
  wholeWebsiteBgColor: "#000000"
};

export default SiteConfig;
