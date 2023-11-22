"use client";
import React, { useState } from "react";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import EditableImage from "@/components/layout/EditableImage";
import toast from "react-hot-toast";
import Link from "next/link";
import Right from "@/components/icons/Right";

const MenuItemsPage = () => {
  const { loading, data } = useProfile();

  if (loading) {
    return "Loading user infor...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link href={"/menu-items/new"} className="button flex">
          <span>Create new menu item</span>
          <Right />
        </Link>
      </div>
    </section>
  );
};

export default MenuItemsPage;
