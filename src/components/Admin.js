import React, { useContext } from "react";
import "../styles/index.scss";
import Navbar from "./Navbar";
import Workshop from "./Workshop";
import CreateForm from "./CreateForm";
import { StateContext } from "../context";
import WorkshopsListContainer from "./WorkshopsListContainer";

export default function Admin() {
  const { workshopDraft } = useContext(StateContext);

  return (
    <div className="Admin">
      <Navbar admin />
      <div className="main container-fluid text-center">
        <section id="create-section">
          <CreateForm />
        </section>

        <section id="preview">
          <h2>Preview</h2>
          <Workshop preview workshop={workshopDraft} />
        </section>

        <section className="published">
          <h2>Published</h2>
          <WorkshopsListContainer admin />
        </section>
      </div>
    </div>
  );
}
