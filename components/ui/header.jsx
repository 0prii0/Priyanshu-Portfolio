import Link from "next/link";
import {Button} from "./button"
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Priyanshu<span className="text-accent">.</span>
        </h1>
        </Link>
        {/* nav-bar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          <button>Hire Me</button>
          </Link>
        </div>
        {/* mobile nav bar */}
        <div className="xl:hidden">mobile nav

        </div>
        </div>
    </header>
  )
}

export default Header
