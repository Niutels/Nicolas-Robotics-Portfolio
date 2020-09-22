(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{hSb8:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("9eSz"),r=n.n(o),s=n("MUpH"),c=n("vOnD"),l=n("WveJ");function m(){var e=Object(s.a)(["\n    margin-bottom: 4rem;\n  "]);return m=function(){return e},e}function h(){var e=Object(s.a)(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return h=function(){return e},e}function u(){var e=Object(s.a)(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return u=function(){return e},e}c.b.span(u()),c.b.p(h(),l.a.TABLET(m()));var d=function(e){var t=e.title,n=(e.copy,e.image);return i.a.createElement("figure",null,"    ",i.a.createElement(r.a,{fluid:n?n.childImageSharp.fluid:{},alt:t}),i.a.createElement("figcaption",null,"    "))};function f(){var e=Object(s.a)(["\n    display: block;\n  "]);return f=function(){return e},e}function p(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: minmax(400px, max-content);\n  grid-gap: 1rem;\n  padding: 0 4rem;\n  margin: 1rem 0;\n\n  ",";\n"]);return p=function(){return e},e}var w=c.b.div(p(),l.a.TABLET(f()));t.a=function(e){var t=e.singleitem;return i.a.createElement(w,null,i.a.createElement(d,t))}},rL2c:function(e,t,n){"use strict";n.r(t),n.d(t,"kinectquery",(function(){return s}));var a=n("q1tI"),i=n.n(a),o=n("8k0H"),r=n("hSb8");t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement("h1",null," Simple obstacle detection with kinect "),i.a.createElement("h2",null," Continuous 3D detection "),"The Kinect camera is a distance sensor, it has an angular field of view which means that the coordinates are given through a spherical system. You may keep it that way, but to make it easier to visualize you can also convert it to a Cartesian system. You will need a Kinect camera and a numeric software such as Matlab or Labview.",i.a.createElement(r.a,{singleitem:t.homeJson.kinect_single}),i.a.createElement(r.a,{singleitem:t.homeJson.kinect_prob_seen}),i.a.createElement(r.a,{singleitem:t.homeJson.kinect_malfunctions}),i.a.createElement(r.a,{singleitem:t.homeJson.kinect_confidence}),i.a.createElement("h2",null,"Create your map"),"Let’s say that, if the camera spots an object with the (X,Y,Z) coordinates, it prints it on a map at the said location. Then by showing a wall to the camera, depending on the resolution, the data will look like this :",i.a.createElement(r.a,{singleitem:t.homeJson.kinect_3d_mapping_wall}),"However, if someone had walked in front of the camera, then it would have looked like this :",i.a.createElement(r.a,{singleitem:t.homeJson.kinect_walk_infront}),i.a.createElement("h2",null,"Can we unsee what has been seen ?"),"The issue here is that we can’t “unsee” what has been seen even if it’s long gone. This is why we need to use the Bresenham algorithm’s principle. Bresenham algorithm's principle : For two points P1 and P2, we search for the cases which are crossed by the [P1;P2] segment. Here, P1 is the Kinect camera and P2 is a dot on the wall. This method gives us the “free space” (crossed cases) between the camera and the wall, so it helps us clear the areas which are empty.",i.a.createElement(r.a,{singleitem:t.homeJson.bresenham}),"Can it be trusted yet ? We now have a continuous mapping, however its efficiency is questionable. Indeed, the Kinect camera only “believes” in what it is seeing right now, which is an issue when you consider its malfunctions and low accuracy. Here is an example of what we are supposed to find by implementing this method alone : malfunctions The spot on the left comes from the Kinect camera which may find uncoherent data such as nul distances. To improve our mapping, we are going to use Cauchy distribution. First of all, we may consider a Normal distribution which reflects our uncertainty about the precise location of the obstacle. Here is an example of an obstacle seen at 12 meters from the camera and its associated normal distribution to consider the [11,5 ; 12,5] range. Then we may add a cumulative distribution function which will behave as a gauge of confidence : the more an obstacle is seen, the more it is trusted. Thus a wall will be hard to remove from the map but a walking person won’t be. Moreover, malfunctions are mostly erased confidence-gauge and the accuracy is improved. Finally, the outcome is really good, but the map is limited to an area of your room because you can’t move the camera. If you are interested in a more advanced 3D mapping you may want to assemble a motor, allowing the camera to rotate at constant rate and pursue the 3D mapping."))};var s="4074965654"}}]);
//# sourceMappingURL=component---src-pages-kinect-jsx-6959eaac3bd23fcd7265.js.map