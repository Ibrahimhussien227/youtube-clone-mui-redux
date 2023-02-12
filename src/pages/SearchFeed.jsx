import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos, Loader } from "../components";
import { useGetVideosQuery } from "../App/services/youtubeApi";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data: videos, isFetching } = useGetVideosQuery(searchTerm);

  if (isFetching) return <Loader />;

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
