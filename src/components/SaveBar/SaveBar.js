import React, { Component } from 'react';
import swal from 'sweetalert2';
import './SaveBar.css';

class SaveBar extends Component {

  handleSaveClick = (e) => {
    const { slug } = e.target.dataset;
    swal({
      type: 'question',
      title: 'Save?',
      text: `Are you sure you want to save the current state of this newsletter to this save slot?
            This will override any other information saved in this slot.`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Save'
    }).then((result) => {
      if (result.value) {
        localStorage.setItem(slug, JSON.stringify(this.props.currentState));
        swal({
          type: 'success',
          title: 'Saved',
          text: 'Data has been saved to this browser on this machine',
        });
      }
    })

  };

  handleLoadClick = (e) => {
    const { slug } = e.target.dataset;
    swal({
      type: 'question',
      title: 'Load Data?',
      text: `Are you sure you want to load the data from this newsletter save slot?
            This will override any other information currently shown in the newsletter below that has not been saved.`,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Load'
    }).then((result) => {
      if (result.value) {
        let savedState = localStorage.getItem(slug);
        if (savedState) {
          this.props.set_state_from_load(JSON.parse(savedState));
          swal({
            type: 'success',
            title: 'Success!',
            text: 'Data load successful.'
          });
        } else {
          swal({
            type: 'error',
            title: 'Error!',
            text: 'Data from this slot could not be loaded...'
          });
        }
      }
    });
  };

  render() {
    return (
      <div className="SaveBar">
        <h1 className="SaveBar-header">Newsletter Builder</h1>
        <div className="SaveBar-button-container">
          <button
            onClick={this.props.toggle_render_view_lock}
            style={{borderRadius: '5px'}}
          >
            Toggle Preview Scroll
          </button>
          <div>
            <button
              onClick={this.handleSaveClick}
              data-slug="slot-1"
            >
              Save 1
            </button>
            <button
              onClick={this.handleLoadClick}
              data-slug="slot-1"
            >
              Load 1
            </button>
          </div>
          <div>
            <button
              onClick={this.handleSaveClick}
              data-slug="slot-2"
            >
              Save 2
            </button>
            <button
              onClick={this.handleLoadClick}
              data-slug="slot-2"
            >
              Load 2
            </button>
          </div>
          <div>
            <button
              onClick={this.handleSaveClick}
              data-slug="slot-3"
            >
              Save 3
              </button>
            <button
              onClick={this.handleLoadClick}
              data-slug="slot-3"
            >
              Load 3
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default SaveBar;
