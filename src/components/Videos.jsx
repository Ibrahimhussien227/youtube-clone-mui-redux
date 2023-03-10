import React from "react";
import { Box, Stack } from "@mui/material";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || "row"}
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    gap={2}
  >
    {videos?.items?.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
);

export default Videos;
