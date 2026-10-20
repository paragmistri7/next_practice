import Link from "next/link";
const Navigation = () => {
  return (
    <ul
      // style={{
      //   border: "1px solid #ccc",
      //   padding: "10px",
      //   justifyContent: "end",
      //   fontSize: "30px",
      //   display: "flex",
      //   gap: "20px",
      //   textDecoration: "none",
      //   listStyle: "none",
      // }}

      className=" bg-sky-500 p-6 flex justify-end gap-10 text-lg list-none"
    >
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/about"}>
        <li>About</li>
      </Link>
      <Link href={"/contact"}>
        <li>Contact</li>
      </Link>
      <Link href={"/service"}>
        <li>Service</li>
      </Link>
    </ul>
  );
};

export default Navigation;
