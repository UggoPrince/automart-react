const Backdrop = (props: any) => {
  const { children } = props;
  return (
    <div className="
    backdrop-blur-lg
    box-border block bg-white/60">
      {children}
    </div>
  );
};

export default Backdrop;
