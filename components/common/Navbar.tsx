import { getMenu } from "@/lib/shopify/menu";
import Link from "next/link";

export const Navbar = async () => {
  const menuItems = await getMenu();
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
