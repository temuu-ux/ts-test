import { SideMenu } from "@/components/SideMenu";
import { Contents } from "@/components/Contents";

let sideMenus = [
  {
    title: "TypeScript for the New Programmer",
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
    title: "TypeScript for JavaScript Programmers",
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
    title: "TypeScript for Java/C# Programmers",
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
    <main
      className={`flex min-h-screen flex-col gap-10  w-96 border bg-gray-500  p-1`}
    >
      <div>
        {sideMenus.map((menu) => (
          <div>
            {" "}
            <SideMenu menu={menu} />
            <div>
              {menu.contents.map((con) => (
                <Contents  con={con}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
