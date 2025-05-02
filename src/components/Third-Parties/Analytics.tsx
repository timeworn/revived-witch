import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const Umami = () => {
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_WEBSITE;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId || !umamiUrl) {
    return <></>;
  }
  return (
    <Script async src={`${umamiUrl}/script.js`} data-website-id={websiteId} />
  );
};

const Google = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) {
    return <></>;
  }
  return <GoogleAnalytics gaId={gaId} />;
};

export const Analytics = () => {
  return (
    <>
      <Umami />
      <Google />
    </>
  );
};
