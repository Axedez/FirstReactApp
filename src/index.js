import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://images8.alphacoders.com/100/1003220.png",
  overview:
    "As the Avengers and their allies have continued to protect the world!"
};

function Image(props) {
  //COnsole.log("Image props", props);
  return <img width="100%" src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItem props", props);
//   const {data: {title, vote_average, image }} = props;
//   return {
//     <div>
//     <Image src={image} alt={title} />
//     <p>{title}</p>
//     <p>{vote_average}</p>
//     </div>
//   };
// }

// MovieItem = new React.Component();

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("state", this.state);
    // console.log(this);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//  rootElement
// );
