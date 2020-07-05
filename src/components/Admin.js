import React from "react";
import "../styles/index.scss";
import Navbar from "./Navbar";
import Workshop from "./Workshop";
import CreateForm from "./CreateForm";
import WorkshopsList from "./WorkshopsList";
import { connect } from "react-redux";

function Admin({ workshopDraft }) {
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
          <WorkshopsList admin />
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  workshopDraft: state.workshopDraft,
});

export default connect(mapStateToProps)(Admin);

