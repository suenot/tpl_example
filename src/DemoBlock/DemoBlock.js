import React, { Component } from "react";
import PropTypes from "prop-types";

// STYLES
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: "red",
    height: "100%",
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center center",

    "& > div": {
      height: "100%",
      backgroundColor: "#fff",
      minHeight: "50vh",
      color: "#fff",
      padding: 30,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

      "& h2": {
        wordBreak: "break-word",

        lineHeight: "105%",
        margin: 0,
        padding: 0,
        fontSize: 60,

        textAlign: "center",
        maxWidth: 400,
        textShadow: "1px 1px 2px rgb(0,0,0)"
      }
    }
  }
});

class DemoBlock extends Component {
  render() {
    const { classes } = this.props;
    const { view, inlines } = this.props;

    let BG =
      "https://images.pexels.com/photos/1497302/pexels-photo-1497302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    try {
      // BG = view.bg.items[0].src;
    } catch (err) {}

    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${BG})`
        }}
      >
        DEMO CONTENT
        <div
          style={{
            background: `linear-gradient(${view.gradient_top.value}, ${
              view.gradient_middle.value
            }, ${view.gradient_bottom.value})`
          }}
        >
          {view.checkboxExample.value ? "CHECKED!" : "NOT CHECKED"}

          {view.offers.items.map((item, index) => {
            return (
              <div key={index}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `${item.header.value}::${item.subheader.value}`
                  }}
                />
              </div>
            );
          })}

          {inlines.header}

          {inlines.subheader}
        </div>
      </div>
    );
  }
}

DemoBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  inlines: PropTypes.object.isRequired
};

export default withStyles(styles)(DemoBlock);
