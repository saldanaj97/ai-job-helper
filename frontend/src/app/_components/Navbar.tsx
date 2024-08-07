"use client"

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { useTheme } from "next-themes"
import { Activity, ChevronDown, Flash, Lock, Scale, Server as ServerIcon, TagUser } from "./Icons"
import { ThemeSwitcher } from "./ThemeSwitcher"

// Utility function to get dynamic class names
const getDropdownClassNames = (theme: string | undefined) => {
  return `w-[340px] rounded-xl shadow-lg ${
    theme === "dark" ? "bg-black/70 text-neutral-100" : "bg-white/70 text-neutral-900"
  }`
}

export default function Nav() {
  const { theme } = useTheme()

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <ServerIcon className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
  }

  return (
    <Navbar className="p-4">
      <NavbarBrand>
        <p className="font-bold text-inherit">WannabeHired.ai</p>
      </NavbarBrand>
      <NavbarContent className="hidden w-full justify-center gap-4 sm:flex">
        <Dropdown className="backdrop-blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex items-center p-0 data-[hover=true]:bg-transparent"
                endContent={<div className="ml-1">{icons.chevron}</div>}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className={getDropdownClassNames(theme)}>
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
              className="p-4"
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
              className="p-4"
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
              className="p-4"
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
              className="p-4"
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
              className="p-4"
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="items-center">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  )
}
