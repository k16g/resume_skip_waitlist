"use client";

import { Button } from "./Button";

export function NavCta() {
  return (
    <Button
      variant="primary"
      className="h-10 px-4 text-xs sm:h-11 sm:px-5 sm:text-sm"
      onClick={() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Join the waitlist
    </Button>
  );
}
