import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses/',
   headers: {
       Authorization: 'Bearer ktH0R1cToNkLIUv7wNCKb04CgWjtLlmOkwkgbbIRxLLBokVyTueet3ZJ8a2TvfxGjBeSnaJZo6iwHVB3DUWYNCLS07ixL8LyPoStNKHR-DwoCzsuBV8cYoA71BVVX3Yx'
   }
});