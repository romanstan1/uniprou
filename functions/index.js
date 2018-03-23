const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors({ origin: true }));
admin.initializeApp(functions.config().firebase);

// build multiple CRUD interfaces:
// app.get('/', (req, res) => res.json( {res: 'WORKING!!!' } )  );
// app.post('/', (req, res) => res.send(Widgets.create()));
// app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
// app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
// app.get('/', (req, res) => res.send(Widgets.list()));

exports.showPage = functions.https.onRequest(app);

app.get('/:page', (req, res) => {
  res.send(`
    <!doctype html>
    <html ⚡ lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="canonical" href="/article.html">

        <link rel="shortcut icon" href="amp_favicon.png">

        <title>Page ${req.params.page}</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

        <script async src="https://cdn.ampproject.org/v0.js"></script>

        <style amp-custom>

          body {
            width: auto;
            margin: 0;
            padding: 0;
          }

          header {
            background: navy;
            color: white;
            font-size: 15px;
            text-align: center;
            padding: 10px 0;
          }

          h1 {
            margin: 0;
            padding: 0.5em;
            background: white;
          }
          p {
            padding: 0.5em;
            margin: 0.5em;
          }
          amp-img {
            background: ghostwhite;
          }

        </style>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      </head>
      <body>
        <header>
          News Site
        </header>
        <article>
          <h1>Show ${req.params.page}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas tortor sapien, non tristique ligula accumsan eu.</p>
          <amp-img src="http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/m/mo/mountain/mountain_1.jpg" layout="responsive" width="266" height="150"></amp-img>
        </article>
      </body>
    </html>
  `);
});


// return admin.database().ref('events/' + eventId).once('value', (snapshot) => {
//     var event = snapshot.val();
//     res.send(`
//         <!doctype html>
//         <html>
//             <head>
//                 <title>${event.name}</title>
//             </head>
//             <body>
//                 <h1>Title ${event.name} in ${event.city}</h1>
//             </body>
//         </html>`
//     );
//  });
