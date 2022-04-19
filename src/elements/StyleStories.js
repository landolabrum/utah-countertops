import React from 'react';
import { Container, Row, Col, Divider } from 'react-materialize';

import imgOne from "../media/gallery/exotic/1.webp"
import imgTwo from "../media/gallery/granite/3.webp"
import imgThree from "../media/gallery/porcelain/6.webp"
import imgFour from "../media/gallery/quartz/2.webp"
import imgFive from "../media/gallery/quartzite/3.webp"
import imgSix from "../media/gallery/travertine/6.webp"


// function Ls(){
//   const path = require('path');
// const fs = require('fs');
// //joining path of directory 
// const directoryPath = path.join(__dirname, 'Documents');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });
// }

function Lrg(props) {
  if (props.imgfirst) {
    return (
      <div className="container mx-auto flex flex-wrap">
        <div className="md:w-full lg:w-1/2 lg:px-8 px-4">
          <br />
          <h3 className="flow-text bold">{props.hdr}</h3>
          <p>{props.txt}</p>
        </div>
        <div className="md:w-full px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0">
          <img className="resize" src={props.img} alt={props.img} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto flex flex-wrap">
        <div className="md:w-full px-4 pt-4 lg:w-1/2 lg:px-8 lg:pt-0">
          <img className="resize" src={props.img} alt={props.img} />
        </div>
        <div className="md:w-full lg:w-1/2 lg:px-8 px-4">
          <br />
          <h3 className="flow-text bold">{props.hdr}</h3>
          <p>{props.txt}</p>
        </div>
      </div>
    );
  }
}


var ls = [
  {
    imgf: true,
    fi: imgOne,
    fo: 'exotic',
    hdr: 'Exotic/Semi-precious',
    txt: 'Working with semi-precious/exotic stone takes extreme attention to detail. You must have the knowledge and experience to use the proper materials on these sensitive stones to be sure they maintain their beauty. You also have to be invested into the proper tools to cut these materials correctly. We take great pride and responsibility when working with these stones. It is less work and more of an art when the opportunity to work with these products presents itself.'
  },

  {
    imgf: false,
    fi: imgTwo,
    fo: 'granite',
    hdr: 'Granite',
    txt: "Cutting granite can be tricky due to the variety of densities granites can have. You must have the experience working with all different types of granites to know how they behave. Over the last 100 years we have generations of experience with exposure to every different type of granite. We know what works and what doesn’t."
  },
  {
    imgf: true,
    fi: imgSix,
    fo: 'travertine',
    hdr: 'Marble/Limestone/Travertine',
    txt: "These are the softest stones with the most porosity. These stones take extreme caution while handling. You must be very thoughtful and clean with every step of the fabrication process. This stone naturally has fissures and pits that must be carefully navigated. There are many methodical ways to move and reinforce these products. Applying agers and sealers can affect the look of these products dramatically and must be done with care and experience for the correct outcome."
  },
  {
    imgf: false,
    fi: imgThree,
    fo: 'porcelain',
    hdr: 'Porcelain',
    txt: "This is the newest, most popular material to hit the market. This product takes years of experience to work with. Being invested in the proper equipment and tools play a key factor in your success with fabricating this product. We hold every certification and keep up with continuing education programs to make sure we are on the cutting edge of proper technique for fabricating and installing porcelain of any brand. Porcelain is known for its almost perfect resemblance to real stone and extreme durability. Porcelain slabs are exactly what you might think they are, a large durable tile. They are heat resistant and non-absorbent making them an ideal and maintenance-free material for any application. The reason porcelain has such an unmistakable accuracy to real stone over the current popular market synthetic stone “Quartz” is because porcelain is actually a high-resolution photo of the actual stone it is imitating. Thus, creating a product that only a trained eye can recognize."
  },
  {
    imgf: true,
    fi: imgFour,
    fo: 'quartz',
    hdr: 'Quartz',
    txt: "This is the most economical, durable, and popular imitation stone out right now. Quartz has taken the industry by storm with its price point and maintenance-free, resin-based make up. The stone is very easy to fabricate and install. The only drawbacks quartz has are its not-so-perfect imitation of real stone and its susceptibility to heat."
  },
  {
    imgf: false,
    fi: imgFive,
    fo: 'quartzite',
    hdr: 'Quartzite',
    txt: "This is the real stuff. This stone comes in many different forms and densities. Its uniqueness and impressive designs that naturally come from the earth are what make quartzite so sought after. Quartzites can range drastically in price. Quartzite can be very difficult to cut. The tools and feed rates must be sharp and slow to avoid miter blowouts and chatter, or even crashing or binding your blade and mill/core bits into the stone. Once cut, you must be very careful moving the pieces to avoid natural fissures in the stone from separating and cracking. There is usually no margin for error when working with quartzites because of their limited runs from the quarry. A lot of times you cannot get more matching stone from your specific run or block. Some pieces are even ones that you can’t get again. We do not take this responsibility lightly. We take the upmost care of handling irreplaceable products."
  },
];

export default class StyleStories extends React.Component {
  render(props) {
    const listItems = ls.map((l) =>
      <span >
        <span className="hide-on-med-and-down">
        <Lrg s={12}
          m={5}
          offset=''
          hdr={l.hdr}
          txt={l.txt}
          img={l.fi}
          imgfirst={l.imgf}
        />
        </span>
        <span className="hide-on-large-only">
        <Divider/>
          <br/>
        <Container className="grey-text text-lighten-1">
            <h3 style={{padding: "10px"}}>{l.hdr}</h3> 
          <p style={{padding: "10px"}}>{l.txt}</p>
          <br/>
         <img src={l.fi} />
        </Container>
        </span>
      </span>
    );
    return (<span><br />
      {/* <Section className="red">
        <Container>
          <h2 className='white-text' style={{ margin: '0px' }}>{this.props.hdr}</h2>
        </Container>
      </Section> */}
      <br />
      <Container>
        {listItems}
      </Container>
      <br /><br /><br />
    </span>
    );
  }
}