var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');

// router.get('/textSearch/:query',(req,res,next)=>{
//     var query = req.params.query;
//      request('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+'&key='+process.env.API_KEY, function(error, response, body) {
//         res.json(body);
//     });
// })

router.get('/textSearch/:query', (req, res, next) => {
    var query = req.params.query;
    let auth = "Bearer _oEVu39g91rQTbXCpLPztKYlHs-7-uXWWDxBVFEzJGggzgH5orCLcvMRE30glOugJ08ETFAE0SkP2KftK-Aauwtp4C8YZU74VXBVt2Sj9b8wMrHFNZqm3UCCcaFeWXYx";

    //let token = "Bearer _oEVu39g91rQTbXCpLPztKYlHs-7-uXWWDxBVFEzJGggzgH5orCLcvMRE30glOugJ08ETFAE0SkP2KftK-Aauwtp4C8YZU74VXBVt2Sj9b8wMrHFNZqm3UCCcaFeWXYx"
    //console.log(Authorization);
    console.log(query);
    let Url = "https://api.yelp.com/v3/businesses/search?location=" + query + "?categories=nightlife";
    request.get({ url: Url, headers: { "Authorization": auth } }, function(error, response, body) {
        //    if(error){
        //        console.log({"error trace":err});
        //        res.status(404).json({"error":"true"})
        //    }  
        console.log(JSON.parse(body));
        res.json(JSON.parse(body));
    });
})

module.exports = router;