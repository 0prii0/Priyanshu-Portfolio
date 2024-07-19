import Link from "next/link";
import {Button} from "./button"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto">header</div>
        <Link href="/">
        <h1 className="">
            PG <span>.</span>
        </h1>
        </Link>
    </header>
  )
}

export default Header
