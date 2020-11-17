import Mock from "mockjs"
const courseData = Mock.mock({
    'data|11-29': [
        {
            'id|4000000-4999999': 4000000,
            desc: '@csentence(10, 100)',
            course: function () {
                let courseArray = [
                    "财政学",
                    "金融学",
                    "经济信息管理",
                    "国际经济与贸易",
                    "国际金融",
                    "统计学",
                    "网络经济学",
                    "信用管理",
                    "理论经济学",
                    "管理科学",
                    "信息管理和信息系统",
                    "工业工程",
                    "产品质量工程",
                    "工商管理",
                    "市场营销",
                    "商品学",
                    "审计学",
                    "涉外会计",
                    "财务管理",
                    "资产评估",
                    "商务策划管理",
                    "电子商务",
                    "房地产经营管理",
                    "酒店管理",
                    "公共事业管理",
                    "国防教育与管理",
                    "农业经济管理",
                    "食品经济管理",
                    "航运管理",
                    "图书档案学类",
                    "英语",
                    "俄语",
                    "新闻学",
                    "广播电视新闻",
                    "编辑出版学",
                    "舞蹈",
                    "美术学"
                ]
                return courseArray[parseInt(Math.random() * 10)]
            },

        },
    ],
})

function fetchCourse() {
    return Mock.mock('/fetchCourse', courseData)
}

const loginData = Mock.mock(
    {
        userInfo: {
            id: 1,
            name: "user",
        },
        state: "ok",

    })

function fetchLogin() {
    return Mock.mock('/fetchLogin', loginData)
}

export {
    fetchCourse,
    fetchLogin
}