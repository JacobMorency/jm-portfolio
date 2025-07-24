export default function NavBar() {
  return (
    <nav className="sticky top-0 shadow-md p-4 bg-primary my-4">
      <ul className="flex space-x-8 justify-end">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
