import { Search } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className=" flex justify-between items-center p-6 md:px-20 shadow-sm fixed w-full top-0 left-0">
      <div>logo</div>
      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input
          className="bg-transparent w-full outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search dishes or restaurants"
        />
        <Search />
      </div>
      <div className="flex gap-5">
        <Button variant="outline" className="border-primary">
          Login
        </Button>
        <Button variant="outline" className="border-primary">
          Signup
        </Button>
      </div>
    </div>
  );
}
