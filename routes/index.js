  var express = require('express');
var router = express.Router();

//for saving file;
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/make_note', function(req, res, next) {
  console.log('here');

  //read messageContent.xml first and display in panel
   fs.readFile('messageContent.xml', 'utf8', function (err,data) {
                parser.parseString(data,function(err,result){
                    console.log(result);
                    console.log('findi');

                    const dom = new JSDOM(`<body>
                      <script>document.querySelector('#set').innerHTML='gwgwg');</script>
                    </body>`);


                            res.render('make_note',{notes:result.body});


                })
      }); 
});


// POST method route
router.post('/make_note_submit', function (req, res, next) {
  var msg = req.body.message;
  
  var fileContent = msg+'\n\r'; //line brake on every message;

  //append message with a xml file;
  fs.appendFile('message.txt', fileContent, function (err) {
    if (err) throw err;
              console.log('Saved!');

              fs.readFile('message.txt', 'utf8', function (err,data) {
                if (err) {
                  return console.log('can not read file');
                }

                      var options = { encoding: 'utf8' };
                      var stream = fs.createWriteStream("messageContent.xml",options);
                      stream.once('open', function(fd) {
                        stream.write('<?xml version="1.0" encoding="UTF-8"?>');
                        stream.write('<body><![CDATA['+data+']]></body>');
                        stream.end();
                      });
                      
                      //display update xml file in panel
                      setTimeout(function(){
                          fs.readFile('messageContent.xml', 'utf8', function (err,data) {
                                  parser.parseString(data,function(err,result){
                                      console.log(result.body);
                                      console.log('findi');

                                              res.redirect('/make_note');

                                  })
                              });
                      },1000)

            });
  })


});

router.post('/delete_note', function (req, res, next) {

    fs.unlink('message.txt', function(err){

        // Ignore error if no file already exists
        if (err && err.code !== 'ENOENT')
            throw err;

        //crate empty xml to display in pannel
        var options = { encoding: 'utf8' };
        var stream = fs.createWriteStream("messageContent.xml",options);
        stream.once('open', function(fd) {
          stream.write('<?xml version="1.0" encoding="UTF-8"?>');
          stream.write('<body><![CDATA[]]></body>');
          stream.end();
        });

        var options = { flag : 'w' };
        fs.writeFile('message.txt', '', options, function(err) {
            if (err) throw err;

            console.log('empty file saved');
                setTimeout(function(){
                    fs.readFile('message.txt', 'utf8', function (err,data) {
                            res.redirect('/make_note');

                        });
                },1000);

        });
    });
});


module.exports = router;
