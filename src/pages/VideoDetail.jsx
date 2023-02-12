import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { Loader, Videos } from "../components";
import {
  useGetRelatedVideosQuery,
  useGetVideosByIdQuery,
} from "../App/services/youtubeApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  const { data, isFetching } = useGetVideosByIdQuery(id);
  const { data: relatedToVideo, isFetching: isFetchingRelatedVideo } =
    useGetRelatedVideosQuery(id);

  useEffect(() => {
    if (!isFetching) {
      setVideoDetail(data?.items[0]);
    }
  }, [id, isFetching]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} px={2}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/embed/${id}?enablejsapi=1&origin=${window.location.origin}.com`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount, 10).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount, 10).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {isFetchingRelatedVideo ? (
          <Loader />
        ) : (
          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center">
            <Videos videos={relatedToVideo} direction="column" />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default VideoDetail;
