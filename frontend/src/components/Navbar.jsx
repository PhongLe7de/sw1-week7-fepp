const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Job Search</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/add-job">Add Job</a>
        <a href="/login">login</a>
        <a href="/signup">signup</a>
      </div>
    </nav>
  );
}
 
export default Navbar;