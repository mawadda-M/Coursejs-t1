

exports.loginUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (password == "" || username == "") {
        return res.json({
            msg: ' الرجاء التأكد من ان القيم معبئ',
            state: 0
        })
    }

    if (username == "mawada" && password == "12345") {
        return res.json({
            msg: 'تم تسجيل الدخول بنجاح',
            state: 1,
        })
    }

    res.json({
        msg: 'الرجاء التأكد من كلمة المرور واسم المستخدم',
        state: 0

    })

}

exports.SignUpUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const Email = req.body.email;
    const phone = req.body.phone;

    if (!email || !password || !phone || !username) {
        return res.json({
            msg: "الرجاء التأكد من تعريف المفاتيح keys",
            state: 0,
        })
    }
    if (email === "" || password === "" || phone === "" || username === "") {
        return res.json({
            msg: "الرجاء التأكد من ان القيم معبئ",
            state: 0,
        })
    }
    res.json({
        msg: "تم تسجيل حسابك بنجاح",
        state: 1
    })
}