import { IconChevronRight, IconHome } from "@tabler/icons-react";
import React from "react";

const Nav = () => {
  return (
    <div>
      <div class="container -mt-6 py-4 flex items-center gap-3">
        <a href="#" class="text-gray-600 text-base hover:text-primary">
          <IconHome size={30} />
        </a>
        <span class="text-sm text-gray-400">
          <IconChevronRight size={30} />
        </span>
        <p class="font-medium hover:text-primary">Product View</p>
      </div>
    </div>
  );
};

export default Nav;
