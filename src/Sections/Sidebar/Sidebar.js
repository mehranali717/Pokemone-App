import { useNavigate } from "react-router";
import { useGetGenrationsQuery } from "../../Redux/Apis/ApiSlice";
import { Loader } from "../../Components";

const Sidebar = () => {
    const navigate = useNavigate()
  const { data: pokemoneGenerations, isLoading: generationsLoading, error:loadingError, isSuccess:loaded } =
  useGetGenrationsQuery("");
  const onClick = (name) => {
    navigate("genration", {
      state: {
        name: name,
      },
    });
  };
  return (
    <>
    {generationsLoading && <Loader />}
    {loadingError && <h1 className="text-[red] font-bold text-[20px]">Error While Loading Data</h1>}
    {loaded && <div className="w-[250px] fixed h-[100vh] bg-[#f0f0f0] p-9 pe-0">
      <h3 className="font-[700] flex flex-col text-[#7f7f7f] text-[18px] border-b-2 border-b-[#4f4f4f] mb-[10px]">
        Genrations
      </h3>
      <ul className="flex flex-col gap-y-2 ps-0">
        {pokemoneGenerations.results.map((item, index) => (
          <a onClick={()=>onClick(item.name)} 
            className="hover:bg-[#d1e0e0] font-[500] text-[#7f7f7f] text-decoration-none transition duration-[0.6s]  px-8 py-2 rounded-[5px] self-start capitalize cursor-pointer text-[18px]"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </div>}
    </>
  );
};
export default Sidebar;
// className="bg-[#f0f0f0] h-[89vh] mt-[70px] bottom-[2px] w-[20%] p-9 pe-0"
