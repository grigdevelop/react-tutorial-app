// src/App.tsx

import React from "react";
import "./App.css";
import { AlbumsComponent } from "./components/albums/albums.component";

// Again, we're importing React-specific redux function.
import { connect } from "react-redux";
import { RootState } from "./stores/root.store";

interface Props {
  appTitle: string;
}

// Components can be declared as function and its first argument will be his props.
function App(props: Props) {
  const { appTitle } = props; // Just extracting appTitle field from props, before rendering HTML.
  return (
    <div className="App">
      <h1>{appTitle}</h1>
      <AlbumsComponent />
    </div>
  );
}

function mapStateToProps(state: RootState): Props {
  return {
    appTitle: state.title
  };
}

const connectedComponent = connect(mapStateToProps)(App);

// Now, instead of App component, we're exporting our new, connected component.
export default connectedComponent;
