import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./SideBar";
import Videos from "./Videos";
import { useGetVideosQuery } from "../App/services/youtubeApi";
import Loader from "./Loader";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const { data: videos, isFetching } = useGetVideosQuery(selectedCategory);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Media
        </Typography>
      </Box>

      {isFetching ? (
        <Loader />
      ) : (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      )}
    </Stack>
  );
};

export default Feed;
