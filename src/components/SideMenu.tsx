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
  return <div>{menu.title}</div>;
};
