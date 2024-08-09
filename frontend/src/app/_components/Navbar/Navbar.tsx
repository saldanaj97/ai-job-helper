'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import {
  Activity,
  ChevronDown,
  Flash,
  Lock,
  Scale,
  Server as ServerIcon,
  TagUser,
} from '../Icons';

export default function Nav() {
  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={16} width={16} />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    server: (
      <ServerIcon
        className="text-success"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={30}
        width={30}
      />
    ),
  };

  return (
    <Navbar
      className="absolute mt-4 bg-transparent"
      isBlurred={false}
      position="sticky"
      maxWidth="sm"
    >
      <NavbarContent
        className="mx-auto w-full max-w-4xl gap-4 rounded-full bg-neutral-200/20 sm:flex"
        justify="center"
      >
        <Dropdown className="backdrop-blur">
          <NavbarItem className="ml-4">
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-md flex items-center p-0 data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px] rounded-xl shadow-lg"
          >
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
        <p>|</p>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <p>|</p>
        <NavbarItem className="mr-4">
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
