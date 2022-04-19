import React from 'react';
const imageThumbnail = require('image-thumbnail');

// try {
    
//     console.log(thumbnail);
// } catch (err) {
//     console.error(err);
// }
class Home extends React.Component {
    render() {
      const thumbnail = imageThumbnail({ uri: 'https://storage.googleapis.com/deepturn_assets/utah_countertops/gallery/travertine/1.png' });
    return (
      <span >
       <h1>Test</h1>
      </span>
    );
  }
}
export default Home;