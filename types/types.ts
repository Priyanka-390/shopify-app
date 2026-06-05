export interface MenuItem {
  id: string;
  title: string;
  url: string;
}

export interface MenuData {
  menu: {
    id: string;
    title: string;
    items: MenuItem[];
  };
}
