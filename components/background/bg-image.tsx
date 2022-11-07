const BgImage = (props: any) => {
  const { children, imgSrc } = props;
  return (
    <div
      className="h-auto block bg-cover bg-center"
      style={{backgroundImage:`url(${imgSrc || '/cars.jpg'})`}}>
      {children}
    </div>
  );
};

export default BgImage;
