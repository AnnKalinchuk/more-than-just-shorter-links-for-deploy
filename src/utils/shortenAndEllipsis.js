export default function shortenAndEllipsis(longLink, maxLongLinkLength = 40) {
  if (longLink.length > maxLongLinkLength) {
    return longLink.substring(0, maxLongLinkLength) + "...";
  }
  return longLink;
}
