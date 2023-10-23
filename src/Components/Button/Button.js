const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-[#111827] w-[100%] hover:bg-[#F6BD0E] border-[1px] hover:border-[1px] hover:border-[#111827] text-white font-bold py-2 px-5 rounded-lg text-base mx-auto my-2 transition-colors duration-300 block"
    >
      {props.value}
    </button>
  );
};
export default Button;