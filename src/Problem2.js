import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import "./Problem2.css";
function Problem2() {
  const [isLoading, setIsLoading] = useState(false);
  const google = window.google;
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  async function drawChart() {
    const json = await axios.get("https://yts.mx/api/v2/list_movies.json");
    setIsLoading(true);
    const { movies } = json.data.data;
    const movie = movies.map((item, idx) => {
      return [item.title, Number(item.runtime)];
    });
    movie.splice(6);
    var data = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      ...movie,
    ]);

    var options = {
      title: "Moive runtime",
    };

    var chart = new google.visualization.PieChart(
      document.querySelector(".piechart")
    );

    chart.draw(data, options);
  }
  function Greeter(props) {
    return <div>Hello {props.user}</div>;
  }
  return (
    <>
      <Nav />
      <div className="problem2-box">
        <Greeter user="Master" />
        {isLoading ? <div className="piechart"></div> : <div>loading...</div>}
      </div>
    </>
  );
}

export default Problem2;
