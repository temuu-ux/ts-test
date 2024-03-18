type ContentsArray = {
  name: string;
  price: number;
  isVerified: boolean;
};
type MenuType = {
  title: string;
  buttonText: string;
  contents: Array<ContentsArray>;
};


export const SideMenu = ({ menu }: { menu: MenuType }) => {
  return (
    <div className="dropdown flex ">
      <button
        tabIndex={0}
        role="button"
        className="bg-gray-300 justify-start border-none text-center p-2 w-80 flex rounded-xl mt-1 "
      >
        {menu.title}
      </button>
      {/* <div>
        {menu.contents.map((contents) => (
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li> {contents.name}</li>
            <li>{contents.price}</li>
            <li> {contents.isVerified}</li>
          </ul>
        ))}
      </div> */}
    </div>
  );
};
