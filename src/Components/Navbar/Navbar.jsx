import { useEffect, useState } from "react";
import { animes } from "../../data";
import "./styles.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      image: "",
      desc: "",
    },
  ]);
  useEffect(() => {
    const keys = ["title", "desc"];

    const res = animes.filter((anime) => {
      return keys.some((key) =>
        anime[key].toLowerCase().includes(query.toLowerCase())
      );
    });

    setData(res);
  }, [query]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1 className="nav-logo-title">+ANIME_SEARCH+</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search animes "
          className="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <div
          className="search-animes-container"
          style={{
            opacity: query.length !== 0 ? "1" : "0",
          }}
        >
          <div className="list-animes-container">
            {data.map((anime) => (
              <div className="card-anime" key={anime.id}>
                <div className="card-image-container">
                  <img src={anime.image} alt="" className="card-image" />
                </div>
                <div className="card-info-container">
                  <span className="card-title">{anime.title}</span>

                  <p className="card-desc">{anime.desc}</p>
                  <button className="card-button">MORE...</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
