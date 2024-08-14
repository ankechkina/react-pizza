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
    <rect x="13" y="200" rx="10" ry="10" width="243" height="26" />
    <rect x="15" y="237" rx="15" ry="15" width="240" height="84" />
    <rect x="22" y="343" rx="10" ry="10" width="85" height="25" />
    <rect x="130" y="340" rx="20" ry="20" width="117" height="32" />
    <rect x="12" y="21" rx="25" ry="25" width="240" height="164" />
  </ContentLoader>
);

export default Skeleton;
