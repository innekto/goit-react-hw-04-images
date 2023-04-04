import { RotatingTriangles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="80"
      width="100%"
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="rotating-triangels-wrapper"
      colors={['#0099ff', '#00eaff', '#00fffb']}
    />
  );
};
