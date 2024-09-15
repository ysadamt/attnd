import {
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/clerk-react"
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className={`${caprasimo.className} flex items-center gap-2 text-lg font-bold md:text-xl`}
        >
          Attnd
          <span className="sr-only">Attnd</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className={`${caprasimo.className} flex items-center gap-2 text-lg font-semibold`}
            >
              Attnd
              <span className="sr-only">Attnd</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <UserButton />
    </header>
  )
}

export default Navbar;