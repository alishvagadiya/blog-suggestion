import React from "react";
import "./styles.css";
import { useState } from "react";

let array = [];

var items = {
  Tech: [
    {
      blogName: "Wired",
      link: "https://www.wired.com/"
    },
    {
      blogName: "venturebeat",
      link: "https://venturebeat.com/"
    },
    {
      blogName: "Analytics Insight",
      link: "https://www.analyticsinsight.net/"
    },
    {
      blogName: "TechCrunch",
      link: "https://techcrunch.com/"
    }
  ],
  DIY: [
    {
      blogName: "Remodelaholic",
      link: "https://www.remodelaholic.com/"
    },
    {
      blogName: "A Pair & a Spare",
      link: "https://apairandasparediy.com/"
    },
    {
      blogName: "Fall for DIY",
      link: "http://fallfordiy.com/"
    },
    {
      blogName: "Shanty 2 Chic",
      link: "https://www.shanty-2-chic.com/"
    }
  ],
  Programming: [
    {
      blogName: "dev",
      link: "https://dev.to/"
    },
    {
      blogName: "hackernoon",
      link: "https://hackernoon.com/"
    },
    {
      blogName: "hacker.io",
      link: "https://hackr.io/blog"
    },
    {
      blogName: "Reactgo",
      link: "https://reactgo.com/"
    },
    {
      blogName: "Live code Stream",
      link: "https://livecodestream.dev/"
    }
  ]
};

var arrayitems = Object.keys(items);

export default function App() {
  var [state, current] = useState([]);

  function check(suggestions) {
    current(items[suggestions]);
  }

  return (
    <div className="App">
      <h1>Blog Suggestions</h1>
      <div class="suggestions">
        <ul className="lists">
          {arrayitems.map(function (suggestions) {
            return (
              <li className="list-items" onClick={() => check(suggestions)}>
                {suggestions}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="output">
        {state.map(function (value) {
          return (
            <div>
              {/* <h5>{value["link"]}</h5> */}
              <h3>
                Blog Name <span>{value["blogName"]}</span>
              </h3>
              <button>
                <a href={value["link"]} target="_blank">
                  Visit {value["blogName"]}
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
