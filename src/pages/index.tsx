import { SideMenu } from "@/components/SideMenu";

let sideMenus = [
  {
    title: "string",
    buttonText: "string",
    contents: [
      {
        name: "string",
        price: 123,
        isVerified: false,
      },
      {
        name: "string",
        price: 350,
        isVerified: false,
      },
      {
        name: "string",
        price: 462,
        isVerified: false,
      },
    ],
  },
  {
    title: "string",
    buttonText: "string",
    contents: [
      {
        name: "string",
        price: 600,
        isVerified: false,
      },
      {
        name: "string",
        price: 750,
        isVerified: false,
      },
      {
        name: "string",
        price: 154,
        isVerified: false,
      },
    ],
  },
  {
    title: "string",
    buttonText: "string",
    contents: [
      {
        name: "string",
        price: 999,
        isVerified: false,
      },
      {
        name: "string",
        price: 863,
        isVerified: false,
      },
      {
        name: "string",
        price: 472,
        isVerified: false,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col gap-10 items-start p-24 `}>
      {sideMenus.map((menu) => (
        <SideMenu menu={menu} />
      ))}
    </main>
  );
}
