import React from "react";

export class List extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <div>This is List</div>
      </div>
    );
  }
}
