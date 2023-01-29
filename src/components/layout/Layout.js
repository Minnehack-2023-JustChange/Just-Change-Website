
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* Main is a special tag that signals the containment of the main content of the website */}
      <main> {props.children}</main>
    </div>
  );
}

export default Layout;
