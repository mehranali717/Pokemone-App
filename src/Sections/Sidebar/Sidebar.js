import { useNavigate } from "react-router";
import { useGetGenrationsQuery } from "../../Redux/Apis/ApiSlice";

const Sidebar = () => {
    const navigate = useNavigate()
  const { data: pokemoneGenerations, isLoading: generationsLoading } =
  useGetGenrationsQuery("");
  if (generationsLoading) {
    return "Loading...";
  }
  const onClick = (name) => {
    navigate("genration", {
      state: {
        name: name,
      },
    });
  };
  return (
    <div className="w-[250px] fixed h-[100vh] bg-[#f0f0f0] p-9 pe-0">
      <h3 className="font-[700] flex flex-col text-[#7f7f7f] text-[18px] border-b-2 border-b-[#4f4f4f] mb-[10px]">
        Genrations
      </h3>
      <ul className="flex flex-col gap-y-2 ps-0">
        {pokemoneGenerations.results.map((item, index) => (
          <a onClick={()=>onClick(item.name)} 
            className="hover:bg-[#d1e0e0] font-[700] text-[#7f7f7f] text-decoration-none transition duration-[0.6s]  px-8 py-2 rounded-[5px] self-start capitalize cursor-pointer text-[18px]"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
// className="bg-[#f0f0f0] h-[89vh] mt-[70px] bottom-[2px] w-[20%] p-9 pe-0"
