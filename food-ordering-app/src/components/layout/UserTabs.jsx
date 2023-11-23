"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserTabs = ({ isAdmin }) => {
  const path = usePathname();

  return (
    <div className="flex mx-auto justify-center gap-2 tabs">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href={"/categories"}
            className={path === "/categories" ? "active" : ""}
          >
            Categories
          </Link>
          <Link
            href={"/menu-items"}
            className={/menu-item/.test(path) ? "active" : ""}
          >
            Menu Items
          </Link>
          <Link href={"/users"} className={path === "/users" ? "active" : ""}>
            Users
          </Link>
          <Link href={"/orders"} className={path === "/orders" ? "active" : ""}>
            Orders
          </Link>
        </>
      )}
    </div>
  );
};

export default UserTabs;
