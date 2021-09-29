import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import bannerImg from "./images/bgBanner.jpg";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

const IMAGE_API = "https://image.tmdb.org/t/p/original";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Cards = ({
  id,
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const [movieId, setMovieId] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnClick = async (e) => {
    const _id = e.currentTarget.dataset.index;
    setMovieId(_id);
    // console.log(movieId);

    // const response = fetch("http://localhost:8000/addfavourite", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: movieId,
    //   }),
    // });
    // const data = await response.json();
    // console.log(data);
  };
  return (
    <>
      <Grid item xs={3}>
        <Card style={{ maxWidth: "18rem", padding: 0 }}>
          <CardMedia
            component="img"
            height="194"
            image={IMAGE_API + poster_path}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {state && (
              <IconButton
                aria-label="add to favorites"
                key={id}
                data-index={id}
                onClick={handleOnClick}
              >
                <FavoriteIcon style={{ color: "#c2c2c2" }} />
              </IconButton>
            )}

            <IconButton>
              <StarIcon />
              {vote_average}
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{overview}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default Cards;
