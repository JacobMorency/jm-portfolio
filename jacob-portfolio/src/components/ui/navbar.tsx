export default function NavBar() {
  return (
    <nav className="sticky top-0 shadow-md p-4 bg-primary my-4">
      <ul className="flex space-x-8 justify-end">
        <li>
          <a className="text-lg font-bold" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="text-lg font-bold" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-lg font-bold" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="text-lg font-bold" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
