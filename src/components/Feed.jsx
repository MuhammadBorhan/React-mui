import { Box } from "@mui/material";
import Post from "./Post";


const Feed = () => {
    return (
       <Box flex={4} p={2} sx={{display:{xs:'none',sm:'block'}}}>
<Post img="https://media.newyorker.com/photos/6226b3a193b7d1ae15fad583/16:9/w_1280,h_720,c_limit/Chayka_google_v2.gif"/>
<Post img="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" />
<Post img="https://img.freepik.com/premium-psd/google-icon_68185-612.jpg?w=2000" />
<Post img="https://lh3.googleusercontent.com/jUoaTIlBn5ibfQcND2n5OMD6Z7xoqNj-ShHlFR6QuLffLXD5pS8V2eNg1rGlrsRrnDkoQ28O8UHzqzBQKAGY4l1CS2NQSq2SkRScK6FOjl82jppyohK-" />
       </Box>
    );
};

export default Feed;