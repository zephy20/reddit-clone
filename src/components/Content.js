import React, { Component } from "react";
import Card from "@material-ui/core/Card";

class Content extends Component {
  componentDidMount() {}

  render() {
    if (this.props.data) {
      this.props.data.sort((a, b) => {
        if (a.data.score > b.data.score) return -1;
        else return 1;
      });
    }

    console.log(this.props.data)
    return (
      <div style={{ margin: "10px", padding: "65px", paddingTop:"0", marginTop:"0" }}>
        <div className="col-md-12" style={{ border: "1px solid black" }}>
          {this.props.data
            ? this.props.data.map((item, key) => (
                <div
                  className="row"
                  key={key}
                  style={{
                    padding: "25px",
                    background: "rgba(26, 26, 27, 0.8)",
                    color: "white",
                    borderBottom: "1px solid #3a3737"
                  }}
                >
                  <Card
                    style={{
                      width: "100%",
                      background: "#303030",
                      display: "flex",
                      padding: "15px"
                    }}
                  >
                    <div className="col-md-1">
                      {item.data.thumbnail == "self" ||
                      item.data.thumbnail == "default"  ||
                      item.data.thumbnail == "" ? (
                        <i
                          class="material-icons"
                          style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          message
                        </i>
                      ) : (
                        <img
                          src={item.data.thumbnail}
                          height="100%"
                          width="100%"
                          style={{ border: "1px solid white", borderRadius:"10px" }}
                        />
                      )}
                    </div>
                    <div className="col-md-11">
                      <div style={{ textAlign: "left" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <a
                            style={{ color: "white", width: "90%", fontWeight:"bold" }}
                            href={item.data.url}
                            target="_blank"
                          >
                            {item.data.title}
                          </a>
                          <span>{item.data.score} points</span>
                        </div>
                        <span style={{ display: "block", fontWeight: "100" }}>
                          Posted by {item.data.author}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Content;
