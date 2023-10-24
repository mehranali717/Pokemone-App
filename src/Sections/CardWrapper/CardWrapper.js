const CardWrapper = ({ children }) => {
  return (
    <section className=" flex flex-wrap justify-between gap-y-10">
      {children}
    </section>
  );
};
export default CardWrapper