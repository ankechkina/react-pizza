import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="119" cy="134" r="117" />
    <rect x="0" y="270" rx="10" ry="10" width="243" height="26" />
    <rect x="-1" y="309" rx="15" ry="15" width="240" height="84" />
    <rect x="0" y="415" rx="10" ry="10" width="85" height="25" />
    <rect x="103" y="407" rx="20" ry="20" width="136" height="39" />
  </ContentLoader>
);

export default Skeleton;
