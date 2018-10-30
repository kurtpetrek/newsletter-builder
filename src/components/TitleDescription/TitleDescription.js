import React from 'react';
import './TitleDescription.css';

const TitleDescription = ({title, description, handle_change}) => {
    return (
      <div className="TitleDescription">
        <div>
          <label className="utility-label">
            <p>Title</p>
            <input type="text" name="title" value={title} onChange={handle_change}/>
          </label>
        </div>
        <br/>
        <label className="utility-label">
          <p>Description</p>
          <input type="text" name="description" value={description} onChange={handle_change}/>
        </label>
      </div>
    );
}

export default TitleDescription;
