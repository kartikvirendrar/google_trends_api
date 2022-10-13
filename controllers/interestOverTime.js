const googleTrends = require('google-trends-api');
// let time1 = new Date(2022, 7, 13);
// let time2 = new Date(2022, 10, 09);

exports.interestOverTimeKeyword = async (req, res) => {
    const {keyword} = req.params;
    googleTrends.interestOverTime({keyword: keyword, geo:"US"})
    .then((data) => {
        res.json(data);
        // console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}