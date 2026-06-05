import { MenuData } from "@/types/types";
import { shopifyFetch } from "./client";
import { MENU_QUERY } from "./queries";

export async function getMenu() {
  try {
    const data = await shopifyFetch<MenuData>(MENU_QUERY);

    return data.menu.items;
  } catch (error) {
    console.error("Menu Fetch Error:", error);
    return [];
  }
}