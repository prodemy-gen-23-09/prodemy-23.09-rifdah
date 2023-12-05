import { IconChevronRight, IconHome } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="container -mt-6 py-4 flex items-center gap-3">
        <Link to="/" className="text-gray-600 text-base hover:text-primary">
          <IconHome size={30} />
        </Link>
        <span className="text-sm text-gray-400">
          <IconChevronRight size={30} />
        </span>
        <Link to="/" className="font-medium hover:text-primary">
          Product View
        </Link>
      </div>
    </div>
  );
};

export default Nav;
