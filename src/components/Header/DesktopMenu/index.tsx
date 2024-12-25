import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/BeansProject-my/beans">Beans</Link>
      <Link to="/BeansProject-my/facts">Facts</Link>
      <Link to="/BeansProject-my/recipes">Recipes</Link>
      <Link to="/BeansProject-my/combinations">Combinations</Link>
      <Link to="/BeansProject-my/history">History</Link>
    </nav>
  );
};
