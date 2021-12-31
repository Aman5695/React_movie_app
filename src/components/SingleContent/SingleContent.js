import { img_300, unavailable } from "../config/config";
import "./SingleContent.css";
import {Badge} from '@material-ui/core';
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  media_type,
  title,
  poster,
  date,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id = {id}>
    <Badge  badgeContent={vote_average} color={vote_average>6? "primary" : "secondary"} />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt="poster"
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      
      <span className="subtitle">{date}
      </span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
