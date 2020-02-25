module.exports = {

    retrieveCountry(req, res, next) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;
        let query = {navn: req.params.country}
        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            
            const db = con.db(dbname);                  // make dbname the current db
            db.collection("country").find(query).toArray(function (err, country) {
                if (err) {
                    throw err;
                }
                res.render("country", country);
            });
        });
    },
}
