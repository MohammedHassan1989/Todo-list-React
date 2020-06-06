import React from "react";
import "./ActivityAddEdit.css";
import AddNewButton from "../../shared/tools/AddNewButton";
function ActivityAddEdit(props) {
  return (
    <>
      <div
        className="col-12"
        style={{ height: "100%", width: "100%", padding: "0", margin: "0" }}
      >
        <div className="card border-success shadow mb-5 bg-white ">
          <div className="card-header">New Activity </div>
          <div className="card-body text-center">
            <form className="needs-validation ">
              <div className="row">
                <div className="input-group col-12">
                  <div className="input-group-prepend">
                    <i className="input-group-text title-icon fas fa-file-signature"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip01"
                    placeholder="Title"
                    name="title"
                    onChange={props.onChange}
                    value={props.activity.title}
                    required
                  />
                  <div className="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                </div>
                <div className=" col-12" style={{ marginTop: "20px" }}>
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    onChange={props.onChange}
                    value={props.activity.description}
                    required
                  ></textarea>
                  <div className="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-4 text-right">
                  <input
                    hidden
                    type="checkbox"
                    name="isDone"
                    onChange={props.onChange}
                    value={props.activity.isDone}
                    id="done-flag"
                  />
                  <label htmlFor="done-flag">
                    <i
                      className="activity-done activity-done-done far fa-hand-peace"
                      className="activity-done-Notdone"
                    ></i>
                  </label>
                </div>
                <div className="col-4 text-right">
                  <input
                    hidden
                    type="checkbox"
                    name="isActive"
                    onChange={props.onChange}
                    value={props.activity.isActive}
                    id="active-flag"
                  />
                  <label htmlFor="active-flag">
                    <i
                      className="activity-active   fas fa-power-off"
                      className="activity-active-active"
                    ></i>
                  </label>
                </div>
                <div className="add-button-contanier">
                  <AddNewButton size={30} />
                </div>
              </div>

              {/* <div className="row">
                <div className="col-12 text-right">
                  <button className="submit-button" type="submit">
                    <i className="fixed-bottom-par-Add fas fa-plus-circle"></i>
                  </button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityAddEdit;
