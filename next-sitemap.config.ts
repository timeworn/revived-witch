import { IConfig } from "next-sitemap";
import siteData from "./src/data/siteData";

const sitemapConfig: IConfig = {
  siteUrl: siteData.siteUrl,
  generateRobotsTxt: true,
};

export default sitemapConfig;
