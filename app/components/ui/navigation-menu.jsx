"use client";

import React, { forwardRef, useState } from "react";

// simple utility to merge class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ▼ Chevron Icon (no lucide import)
const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── NavigationMenu Root ───────────────────────────────
const NavigationMenu = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
});
NavigationMenu.displayName = "NavigationMenu";

// ─── NavigationMenuList ────────────────────────────────
const NavigationMenuList = forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

// ─── NavigationMenuItem ────────────────────────────────
const NavigationMenuItem = ({ children, ...props }) => (
  <li className="relative group" {...props}>
    {children}
  </li>
);
// ─── NavigationMenuTrigger (hoverable, no state) ───────
const NavigationMenuTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2   transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
// ─── NavigationMenuContent (shows on hover) ────────────
const NavigationMenuContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "invisible absolute left-0 top-full mt-2 w-48 rounded-md border bg-white shadow-md p-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";
// ─── NavigationMenuLink ────────────────────────────────
const NavigationMenuLink = forwardRef(({ className, ...props }, ref) => (
  <a ref={ref} className={cn("", className)} {...props} />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

// ─── NavigationMenuIndicator (optional caret) ──────────
const NavigationMenuIndicator = () => (
  <div className="absolute top-full flex justify-center">
    <div className="relative top-[2px] h-2 w-2 rotate-45 bg-gray-300" />
  </div>
);

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
