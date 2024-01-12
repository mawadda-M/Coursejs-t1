

exports.addproduct = (req, res) => {
    res.json({
        msg: "hello from product responsde",
        state: 1,
        data: ['iphone', 'android', 'mac'],
    })
}