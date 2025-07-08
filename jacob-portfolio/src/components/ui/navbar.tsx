export default function NavBar() {
  return (
    <nav className="sticky top-0 shadow-md p-4 bg-primary">
      <ul className="flex space-x-4 justify-end">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
