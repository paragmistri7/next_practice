import Link from "next/link";
const Navigation = () => {
  return (
    <ul className=" bg-sky-500 p-4 font-bold hover:bg-sky-600 flex  gap-10 text-lg list-none  ">
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/about"}>
        <li>About</li>
      </Link>
      <Link href={"/contact"}>
        <li>Contact - Server Action</li>
      </Link>
      <Link href={"/service"}>
        <li>Service</li>
      </Link>
      <Link href={"/servercompo"}>
        <li>Server Component</li>
      </Link>
      <Link href={"/clientcompo"}>
        <li>Client Component</li>
      </Link>
      <Link href={"/user/"}>
        <li>User</li>
      </Link>
      <Link href={"/cache"}>
        <li>Cache</li>
      </Link>
      <Link href={"/datafetch/postgresdatafetch"}>
        <li>Data Fetching</li>
      </Link>
    </ul>
  );
};

export default Navigation;
