import React from "react";
import { Row, Col, MediaBox, Tabs, Tab } from 'react-materialize';
import Nav from "../elements/Nav"

var { exotic, granite, limestone, marble, porcelain, quartz, quartzite, travertine } = [];

function importAll(r) {
  return r.keys().map(r);
}


export default class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    exotic = this.importAll(require.context('../media/gallery/exotic/', false, /\.(webp)$/));
    granite = this.importAll(require.context('../media/gallery/granite/', false, /\.(webp)$/));
    limestone = this.importAll(require.context('../media/gallery/limestone/', false, /\.(webp)$/));
    marble = this.importAll(require.context('../media/gallery/marble/', false, /\.(webp)$/));
    porcelain = this.importAll(require.context('../media/gallery/porcelain/', false, /\.(webp)$/));
    quartz = this.importAll(require.context('../media/gallery/quartz/', false, /\.(webp)$/));
    quartzite = this.importAll(require.context('../media/gallery/quartzite/', false, /\.(webp)$/));
    travertine = this.importAll(require.context('../media/gallery/travertine/', false, /\.(webp)$/));
  }
  render() {
    const stockData = [
      {
        title: "exotic",
        desc: "Working with semi-precious/exotic stone takes extreme attention to detail. You must have the knowledge and experience to use the proper materials on these sensitive stones to be sure they maintain their beauty. You also have to be invested into the proper tools to cut these materials correctly. We take great pride and responsibility when working with these stones. It is less work and more of an art when the opportunity to work with these products presents itself.",
        content:  exotic 
      },
      {
        title: "granite",
        desc: "Cutting granite can be tricky due to the variety of densities granites can have. You must have the experience working with all different types of granites to know how they behave. Over the last 100 years we have generations of experience with exposure to every different type of granite. We know what works and what doesn’t.",
        content:  granite 
      },
      {
        title: "limestone",
        desc: "These are the softest stones with the most porosity. These stones take extreme caution while handling. You must be very thoughtful and clean with every step of the fabrication process. This stone naturally has fissures and pits that must be carefully navigated. There are many methodical ways to move and reinforce these products. Applying agers and sealers can affect the look of these products dramatically and must be done with care and experience for the correct outcome.",
        content:  limestone 
      },
      {
        title: "marble",
        desc: "These are the softest stones with the most porosity. These stones take extreme caution while handling. You must be very thoughtful and clean with every step of the fabrication process. This stone naturally has fissures and pits that must be carefully navigated. There are many methodical ways to move and reinforce these products. Applying agers and sealers can affect the look of these products dramatically and must be done with care and experience for the correct outcome.",
        content:  marble 
      },
      {
        title: "porcelain",
        desc: "This is the newest, most popular material to hit the market. This product takes years of experience to work with. Being invested in the proper equipment and tools play a key factor in your success with fabricating this product. We hold every certification and keep up with continuing education programs to make sure we are on the cutting edge of proper technique for fabricating and installing porcelain of any brand. Porcelain is known for its almost perfect resemblance to real stone and extreme durability. Porcelain slabs are exactly what you might think they are, a large durable tile. They are heat resistant and non-absorbent making them an ideal and maintenance-free material for any application. The reason porcelain has such an unmistakable accuracy to real stone over the current popular market synthetic stone “Quartz” is because porcelain is actually a high-resolution photo of the actual stone it is imitating. Thus, creating a product that only a trained eye can recognize.",
        content:  porcelain 
      },
      {
        title: "quartz",
        desc: "This is the most economical, durable, and popular imitation stone out right now. Quartz has taken the industry by storm with its price point and maintenance-free, resin-based make up. The stone is very easy to fabricate and install. The only drawbacks quartz has are its not-so-perfect imitation of real stone and its susceptibility to heat.",
        content:  quartz 
      },
      {
        title: "quartzite",
        desc: "This is the real stuff. This stone comes in many different forms and densities. Its uniqueness and impressive designs that naturally come from the earth are what make quartzite so sought after. Quartzites can range drastically in price. Quartzite can be very difficult to cut. The tools and feed rates must be sharp and slow to avoid miter blowouts and chatter, or even crashing or binding your blade and mill/core bits into the stone. Once cut, you must be very careful moving the pieces to avoid natural fissures in the stone from separating and cracking. There is usually no margin for error when working with quartzites because of their limited runs from the quarry. A lot of times you cannot get more matching stone from your specific run or block. Some pieces are even ones that you can’t get again. We do not take this responsibility lightly. We take the upmost care of handling irreplaceable products.",
        content:  quartzite 
      },
      {
        title: "travertine",
        desc: "These are the softest stones with the most porosity. These stones take extreme caution while handling. You must be very thoughtful and clean with every step of the fabrication process. This stone naturally has fissures and pits that must be carefully navigated. There are many methodical ways to move and reinforce these products. Applying agers and sealers can affect the look of these products dramatically and must be done with care and experience for the correct outcome.",
        content:  travertine 
      },
    ];
    return (
      <body style={{ backgroundColor: "#000" }}>
        <Nav color="glass-lite" />
        <Tabs className="z-depth-1 black tabs-fixed-width">
          {stockData.map((i, key) => {
            return (
              <Tab title={i.title}>
                <div style={{ marginTop: "90px" }}
                />
                <h5 id={i.title}>{i.title}</h5>
                <p className="white-text">{i.desc}</p>
                <Row className="black">
                  <br />
                  {i.content.map((image, index) => <Col className="gallery-container" s={12} m={4} l={3} style={{ padding: "0px" }}>
                    <MediaBox className="gallery-item">
                      <img alt={index} src={image.default} alt="info" />
                    </MediaBox>
                  </Col>)
                  }
                </Row>
              </Tab>
            );
          })}
        </Tabs>
      </body>
    )
  }
}