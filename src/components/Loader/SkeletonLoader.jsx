import React from "react";
import ContentLoader from "react-content-loader";
import "./skeletonLoader.scss";

const SkeletonLoader = (props) => {
  return (
    <div className="skeleton__container">
      <ContentLoader
        speed={1}
        width="100%"
        height="100%"
        backgroundColor="#e8e3e8"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="-3" y="3" rx="10" ry="10" width="100%" height="100%" />
      </ContentLoader>
    </div>
  );
};
export default SkeletonLoader;
