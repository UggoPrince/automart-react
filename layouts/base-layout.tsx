export const BaseLayout = ({ children }: any) => {
  return (
    <div className="2xl:container relative min-h-screen">
      {children}
    </div>
  );
};
