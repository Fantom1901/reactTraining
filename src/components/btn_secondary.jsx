import React from "react";
import button from "bootstrap/js/src/button.js";
import "../styles/btn_secondary.scss"

class Btn_secondary extends React.Component {
  render() {
    const { text, style } = this.props;
    return(
      <button type="button" className="btn-secondary" style={style}>
        {text}
      </button>
    )
  }
}


export default Btn_secondary