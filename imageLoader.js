const customLoader = ({ src }) => {
  return src.startsWith('/') ? src : `/${src}`;
};

export default customLoader;
