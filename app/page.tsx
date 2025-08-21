"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button onClick={() => setTheme("light")}>Light</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
      </div>

      <div className="bg-primary text-primary-foreground p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at
        inventore architecto, asperiores hic, magni repellendus facere
        consequuntur deserunt ducimus tempore. Illo, laborum! Inventore dolores
        vero officiis hic earum dicta?
      </div>
    </div>
  );
}
