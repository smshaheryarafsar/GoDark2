import React from "react";
import Navigation from "./NavigationComponents/Navigation";

const App: React.FC = () => {
  const navItems = [
    { text: "About", href: "#about" },
    // { text: "Team", href: "#team" },
    { text: "Solutions", href: "#solutions" },
    { text: "Why US", href: "#why-us" },
    { text: "Our Values", href: "#our-values" },
    { text: "Blogs And Resources", href: "#blogs-resources" },
  ];

  return (
    <header style={{ paddingTop: "30px" }}>
      <Navigation navItems={navItems} />
    </header>
  );
};

export default App;
