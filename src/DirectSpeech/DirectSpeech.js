import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';

// STYLES
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: "1200px",
    padding: "0",
  },
  paragraph: {
    paddingTop: "8px",
    paddingBottom: "6px",
    fontSize: "20px",
    lineHeight: "1.55",
    fontFamily: "'Roboto',Arial,sans-serif",
  },
  person: {
    textAlign: "center",
    marginTop: "27px",
  },
  personAvatar: {
    margin: "8px 0 10px 0",
    maxWidth: "140px",
    width: "80px",
    height: "80px",
    borderRadius: "100%",
  },
  personName: {
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: "bold",
    marginBottom: "0px",
    paddingBottom: "5px",
    paddingTop: "5px",
  },
  personRole: {
    fontSize: "11px",
    lineHeight: "16px",
    paddingTop: "0px",
    paddingBottom: "7px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

class DemoBlock extends Component {
  render() {
    const { classes } = this.props;
    const { view, inlines } = this.props;

    return (
      <div
        className={classes.root}
      >
        <Grid container spacing={24} alignContent="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <p className={classes.paragraph}>
              Each type of visual aid has pros and cons that must be evaluated to ensure it will be beneficial to the overall presentation. Before incorporating visual aids into speeches, the speaker should understand that if used incorrectly, the visual will not be an aid, but a distraction. Planning ahead is important when using visual aids.
              It is necessary to choose a visual aid that is appropriate for the material and audience. The purpose of the visual aid is to enhance the presentation.
            </p>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.person}>
              <img className={classes.personAvatar} src="/img/faces/anon.jpg" alt="" />
              <div className={classes.personName}>Amanda Plummer</div>
              <div className={classes.personRole}>Actress</div>
            </div>
          </Grid>
        </Grid>
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
