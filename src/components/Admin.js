import React, { useContext } from "react";
import "../styles/index.scss";
import Navbar from "./Navbar";
import Workshop from "./Workshop";
import CreateForm from "./CreateForm";
import { StateContext } from "../context";
import WorkshopsList from "./WorkshopsList";

export default function Admin() {
  const { newWorkshop } = useContext(StateContext);

  return (
    <div className="Admin">
      <Navbar admin />
      <div className="main container-fluid text-center">
        <section id="create-section">
          <CreateForm />
        </section>

        <section id="preview">
          <h2>Preview</h2>
          <Workshop preview workshop={newWorkshop} />
        </section>

        <section className="published">
          <h2>Published</h2>
          <WorkshopsList admin />
        </section>
      </div>
    </div>
  );
}
