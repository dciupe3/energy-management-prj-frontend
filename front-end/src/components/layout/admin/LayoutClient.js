import MainNavigationClient from "./MainNavigationClient";

function LayoutClient(props) {
  return (
    <div>
      <MainNavigationClient />
      {props.children}
    </div>
  );
}

export default LayoutClient;