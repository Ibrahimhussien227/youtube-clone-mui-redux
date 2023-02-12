import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import ChannelCard from "./ChannelCard";
import {
  useGetChannelQuery,
  useGetChannelVideosQuery,
} from "../App/services/youtubeApi";
import Loader from "./Loader";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetChannelQuery(id);
  const { data: channelVideos, isFetching: isFetchingChannelVideos } =
    useGetChannelVideosQuery(id);

  console.log(data?.items[0]);

  if (isFetching) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(154,32,205,1) 0%, rgba(32,182,173,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={data?.items[0]} marginTop="-110px" />
      </Box>
      {isFetchingChannelVideos ? (
        <Loader />
      ) : (
        <Box display="flex" p={2}>
          <Videos videos={channelVideos} />
        </Box>
      )}
    </Box>
  );
};

export default ChannelDetail;
