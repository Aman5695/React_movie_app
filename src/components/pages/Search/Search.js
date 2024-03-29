import axios from "axios";
import './Search.css';
import {  useEffect, useState} from "react";
import {
  Tabs,
  Tab,
  Button,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";



const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try{
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false&include_video=false`

      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
  } catch (error) {
    console.error(error);
  }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained"
           style={{ marginLeft: 10 }}
           onClick={fetchSearch}
           >
           
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs 
        value={type}
         indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
         >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              media_type={type ? "tv":"movie"}
              title={c.title || c.name}
              poster={c.poster_path}
              date={c.first_air_date || c.release_date}
              vote_average={c.vote_average}
            />
          ))}

          {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
