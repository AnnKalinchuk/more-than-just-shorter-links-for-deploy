import React from "react";
import "./cardLink.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import shortenAndEllipsis from "../../../utils/shortenAndEllipsis";

const CardLink = ({ link, index, isCopied, onCopy }) => {
  return (
    <div className="card__link">
      <div className="added__link" title={link.longLink}>
        {shortenAndEllipsis(link.longLink)}
      </div>
      <div className="horizontal__line"></div>
      <div className="shortered__link">{link.shortLink}</div>
      <CopyToClipboard text={link.shortLink} onCopy={onCopy}>
        <button className={isCopied ? "button__copy active" : "button__copy"}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};
export default CardLink;
