"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from "@/components/layout/UserTabs";
import UserForm from "@/components/layout/UserForm";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [status, session]);

  async function handleProfileInfoUpdate(e, data) {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error!",
    });
  }

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
};

export default ProfilePage;
