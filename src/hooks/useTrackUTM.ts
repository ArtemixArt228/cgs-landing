import { useEffect } from "react";
import { useRouter } from "next/router";
import { Browsers_SearchEngines } from "../consts";
import { useUTM } from "./useUTM";
import { UTMParams } from "../contexts/UTMContext/UTMContext";

const getReferrerSource = (): UTMParams => {
  const referrer = document.referrer;
  if (!referrer) return { utm_source: "direct", utm_medium: "none" };
  const hostname = new URL(referrer).hostname;
  const domainParts = hostname.split(".");
  const serviceName = domainParts.length > 2 ? domainParts[1] : domainParts[0];

  if (serviceName === "cgsteam") return {}; // Ignore if the source is "cgsteam"

  const isSearchEngine = Browsers_SearchEngines.includes(serviceName);
  return {
    utm_source: serviceName,
    utm_medium: isSearchEngine ? "organic" : "referral",
  };
};

export const useTrackUTM = (): void => {
  const router = useRouter();
  const { params, setParams } = useUTM();

  useEffect(() => {
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } =
      router.query;

    const newParams: UTMParams = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    };

    // Check if any new UTM params are in the URL and need to be set
    const hasNewUTMParams = Object.values(newParams).some(
      (value) => value !== undefined
    );

    if (hasNewUTMParams) {
      // Only update params if they are different from the existing ones
      if (
        newParams.utm_source !== params.utm_source ||
        newParams.utm_medium !== params.utm_medium ||
        newParams.utm_campaign !== params.utm_campaign ||
        newParams.utm_term !== params.utm_term ||
        newParams.utm_content !== params.utm_content
      ) {
        setParams(newParams);
      }
    } else if (!params.utm_source && typeof window !== "undefined") {
      // Only set referrer params if UTM params are empty
      const referrerParams = getReferrerSource();
      if (Object.keys(referrerParams).length > 0) {
        setParams(referrerParams);
      }
    }
  }, [router.query, params, setParams]);
};
