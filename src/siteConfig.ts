"server-only";

interface ITwitter {
  username: string
  url: string
}

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
  meta: {
    title: string;
    description: string;
  };
  creator: {
    name: string;
    url: string;
    twitter: ITwitter;
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
  meta: {
    // seo title length between 50 and 60
    title: "Story Generator",
    // seo description length between 50 and 160
    description: "Transform text into captivating videos. Unleash your storytelling skills with Story Generator. Create visually stunning narratives effortlessly.",
  },
  creator: {
    name: "JagodanaStudio",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
    twitter: {
      username: "@JagodanaStudio",
      url: "https://twitter.com/JagodanaStudio",
    },
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
