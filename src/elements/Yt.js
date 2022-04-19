export default ({ youtubeId }) => {
   return (
     <div
       className="video"
       style={{
         position: "relative",
         paddingBottom: "56.25%" /* 16:9 */,
         height: 0
       }}
     >
       <iframe
       id='Youtube'
         style={{
           position: "absolute",
           top: 0,
           left: 0,
           width: "100%",
           height: "100%"
         }}
         src={`https://www.youtube.com/embed/${youtubeId}?version=3&modestbranding=1&autoplay=1&loop=1&fs=0`}
         frameborder="0"
         allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         
       />
     </div>
   );
 };
