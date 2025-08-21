"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div>Example of 2 customers</div>

      <div className="flex gap-4 mb-4">
        <Link
          className="cursor-pointer border px-2 py-1.5"
          href="/?userId=customerA"
        >
          customerA
        </Link>
        <Link
          className="cursor-pointer border px-2 py-1.5"
          href="/?userId=customerB"
        >
          customerB
        </Link>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl capitalize font-semibold">
          Current theme: {theme}
        </h1>

        <div className="flex gap-4">
          <Button onClick={() => setTheme("light")}>Light</Button>
          <Button onClick={() => setTheme("dark")}>Dark</Button>
        </div>

        <div className="bg-primary text-primary-foreground p-5">
          bg-primary text-primary-foreground
        </div>
      </div>
    </>
  );
}
