import axios from 'axios';

// One approach
// const searchImages = (term) => {}

// Another more useful approach.
export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID tBGzEwXY2NrnBxnTDk0yj3g3wAAtuw1RVMwbmAuxPE0'
   }
});

