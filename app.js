import React from "react";
import ReactDOM from "react-dom/client";

const repository = (
  <a
    href="https://github.com/AniketSharma24/react-jsx-practice"
    target="_blank"
  >
    repository
  </a>
);
const logo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
    alt="react-logo"
  />
);
const brandName = <span className="brand-name">React JSX Practice</span>;
const searchBar = (
  <input className="search-bar" type="search" placeholder="Enter text..." />
);
const userProfile = (
  <img
    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
    alt="user-logo"
  />
);

const BrandComponent = () => (
  <div className="brand-container">
    {logo}
    {brandName}
  </div>
);

const ToolBarComponent = () => {
  return (
    <div className="toolbar-container">
      {BrandComponent()}
      {searchBar}
      {userProfile}
    </div>
  );
};

const InfoComponent = () => (
  <main>
    {ToolBarComponent()}
    <section>
      <p>
        This {repository} is a practice exercise in which I have created
        elements and functional components using JSX. The main purpose of this{" "}
        {repository} is to get familiar with JSX and understand how it compiles
        in the background. I have also covered the role of Babel, different ways
        to use components/elements in another component, and component
        composition.
      </p>
      <h3>Do you know?</h3>
      <ul>
        <li>
          JSX in background uses React.createElement. Browser doesn't
          understands JSX so Babel read our JSX code and converts it so that
          browser can understand.
        </li>
        <li>
          Babel works as a pipeline where we input our JSX code and it outputs
          browser friendly code
        </li>
        <li>
          Different ways of component composition:
          <ul>
            <li>
              <b>{`<Header />`}</b> - Traditional way
            </li>
            <li>
              <b>{`Header()`}</b> - As functional component is a JS function
              only
            </li>
          </ul>
        </li>
        <li>
          <b>{`{title}`}</b> - To use elements we can just write the name of the
          variable we have used to define the react element
        </li>
      </ul>
    </section>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InfoComponent />);
