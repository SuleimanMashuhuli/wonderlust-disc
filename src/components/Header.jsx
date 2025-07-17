import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 py-4 z-50">
            <nav className="gap-10 justify-center items-center flex">
                <Link
                    href=""
                    className="py-1 px-5 text-base uppercase font-semibold text-white rounded-2xl hover:bg-green-700"
                >
                    HOME
                </Link>

                <Link
                    href=""
                    className="py-1 px-5 text-base uppercase font-semibold text-white rounded-2xl hover:bg-green-700"
                >
                    EXPLORE
                </Link>

                <Link
                    href=""
                    className="py-1 px-5 text-base uppercase font-semibold text-white rounded-2xl hover:bg-green-700"
                >
                    PACKAGES
                </Link>

                <Link
                    href=""
                    className="py-1 px-5 text-base uppercase font-semibold text-white rounded-2xl hover:bg-green-700"
                >
                    EVENTS
                </Link>
            </nav>
        </header>
    );
}