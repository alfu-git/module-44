import { Button } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-5xl font-bold text-center">Hero Page</h2>

        <div className="mt-7 flex gap-3 flex-wrap justify-center">
          <Button>Button Primary</Button>

          <Button variant="secondary">Button Secondary</Button>

          <Button variant="tertiary">Button Tertiary</Button>

          <Button variant="outline">Button Outline</Button>

          <Button variant="ghost">Button Ghost</Button>

          <Button variant="danger">Button Danger</Button>

          <Button variant="danger-soft">Button Danger Soft</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
