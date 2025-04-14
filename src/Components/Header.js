export default function Header() {
    return (

        <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="logo">
                <a href="/" aria-label="Homepage">
                    <img src="Medium_1.png" alt="Company Logo" width={109.6} height={40} />
                </a>
            </div>
            <div className="menu">
                <li><a href="#partner" aria-label="About Us">Partners</a></li>
                <li><a href="#team" aria-label="Our Services">About</a></li>
                <li><a href="#footer" aria-label="Contact Us">Contact</a></li>
            </div>
        </nav>

    )
}