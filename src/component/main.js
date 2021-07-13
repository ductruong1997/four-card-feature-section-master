import React from "react";
import Calculator from "../IMG/icon-calculator.svg";
import Karma from "../IMG/icon-karma.svg";
import Supervisor from "../IMG/icon-supervisor.svg";
import TeamBuilder from "../IMG/icon-team-builder.svg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.outerframe1}>
          <div style={styles.textHeader1}>Reliable, effcient delivery</div>
          <div style={styles.textHeader2}>Powered by Technology</div>
          <div style={styles.outerframe2}>
            <div style={styles.textHeader3}>
              Our Artificial intelligence powered tools use millions of project
              data points to ensure that your project is successfull
            </div>
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.column1}>
            <div style={styles.content}>
              <div style={styles.baner1}></div>
              <div style={styles.innerpart1}>
                <div style={styles.textcontent}>{"Supervios"}</div>
                <div style={styles.title1}>
                  <div style={styles.textBody2}>
                    {"Monitors activity to identify project roadbblocks"}
                  </div>
                </div>
                <img src={Supervisor} alt="" style={styles.image}></img>
              </div>
            </div>
          </div>
          <div style={styles.column2}>
            <div style={styles.content}>
              <div style={styles.baner2}></div>
              <div style={styles.innerpart1}>
                <div style={styles.textcontent}>{"Team Builder"}</div>
                <div style={styles.title1}>
                  <div style={styles.textBody2}>
                    {
                      "Scans our talent network to ceate the optimal team for your project"
                    }
                  </div>
                </div>
                <img src={TeamBuilder} alt="" style={styles.image}></img>
              </div>
            </div>
            <div style={styles.content}>
              <div style={styles.baner3}></div>
              <div style={styles.innerpart1}>
                <div style={styles.textcontent}>{"Karma"}</div>
                <div style={styles.title1}>
                  <div style={styles.textBody2}>
                    {"Regularly evaluates our talent to ensure quality"}
                  </div>
                </div>
                <img src={Calculator} alt="" style={styles.image}></img>
              </div>
            </div>
          </div>
          <div style={styles.column3}>
            <div style={styles.content}>
              <div style={styles.baner4}></div>
              <div style={styles.innerpart1}>
                <div style={styles.textcontent}>{"Calculator"}</div>
                <div style={styles.title1}>
                  <div style={styles.textBody2}>
                    {
                      "Uses data from past project to provide better delivery estimates"
                    }
                  </div>
                </div>
                <img src={Karma} alt="" style={styles.image}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  outerframe1: {
    width: "100%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  outerframe2: {
    width: "50%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader3: {
    color: "#b8b8ba",
    fontSize: "20px",
    padding: "50px 0px 40px 0px ",
  },
  textHeader1: {
    color: "#919095",
    fontSize: "30px",
  },
  textHeader2: {
    color: "#515061",
    fontSize: "30px",
    fontWeight: 700,
    padding: "10px 0px 0px 0px",
  },
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    // padding: "0px 10px 0px 10px",
    justifyContent: "center",
  },
  column1: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  column2: {
    flex: 1,
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  column3: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    // height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    border: "1px solid white",
    flexDirection: "column",
    boxShadow: "5px 5px 5px 5px #dde4ec",
  },
  innerpart1: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
  },
  textcontent: {
    color: "#636268",
    fontSize: "30px",
    fontWeight: 700,
    padding: "20px 0px 0px 20px",
  },
  textBody2: {
    color: "#d4d4d4",
    fontSize: "20px",
    padding: "0px 20px 0px 20px",
  },
  title1: {
    width: "100%",
  },
  image: {
    width: 60,
    height: 60,
    padding: "60px 50px 25px 300px",
  },
  baner1: {
    width: "100%",
    height: 8,
    backgroundColor: "#a2e9e5",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  baner2: {
    width: "100%",
    height: 8,
    backgroundColor: "#c85a6c",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  baner3: {
    width: "100%",
    height: 8,
    backgroundColor: "#c5b466",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  baner4: {
    width: "100%",
    height: 8,
    backgroundColor: "#6186a0",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
};
export default Main;
