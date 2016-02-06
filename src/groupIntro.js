///////////////
// groupIntro.js //
///////////////

/* ------------------------------------------------------------
 * 依赖模块
 * ------------------------------------------------------------ */
 require('./css/bootstrap.min.css');
require('./css/animation.css');
require('./css/base.css');
require('./css/rotateHeads.css');
require('./css/groupIntro.css');

require('./js/tab.js');
require('./js/jquery.waypoints.min.js');
require('./js/base.js');
require('./js/rotateHeads.js');


/* ------------------------------------------------------------
 *	头部的图片轮播
 * ------------------------------------------------------------ */

$(function() {
    $('#toggleHeads').rotateHeads([
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png',
        './images/5.png',
    ]);
})


$(function() {
    var index = 1; //记录点击
    var timer;
    var animated = false;
    var slider = document.getElementById('slider');
    var point = document.getElementById('point').getElementsByTagName('span');
    var arrow_l = $('#arrow_l');
    var arrow_r = $('#arrow_r');
    var Children = getChild(slider);
    var ul = Children[0];
    point[0].className = 'on';
    arrow_r.on('click', function() {

        if (!animated) {
            index++;
            if (index == 4) {
                index = 1;
            };
            if (index == 0) {
                index = 4;
            };
            showPoint();
            animate(-1200);
        }
    });
    arrow_l.on('click', function() {

        if (!animated) {
            index--;
            if (index == 0) {
                index = 4;
            };
            if (index == 4) {
                index = 1;
            };
            showPoint();
            animate(1200);
        }
    });
    slider.onmouseover = stopAuto;
    slider.onmouseout = autoPlay;
    for (var i = 0; i < point.length; i++) {
        point[i].onmouseover = function() {
            if (!animated) {
                var indexData = parseInt(this.getAttribute('index')); //获得自定义属性
                var wid = -1200 * (indexData - index);
                animate(wid);
                index = indexData;
                showPoint();
            };
        };
    };

    function autoPlay() {
        timer = setInterval(function() {
            arrow_r.click();
        }, 3000)
    };

    function stopAuto() {
        clearInterval(timer)
    };

    function showPoint() {
        for (var i = 0; i < point.length; i++) {
            point[i].className = ''; //删除class
        };
        point[index - 1].className = "on"; //添加class
    };

    function animate(wid) {
        if (wid == 0) {
            return
        };
        var time = 120;
        var interval = 1;
        var speed = wid / (time / interval);
        var left = parseInt(ul.style.left) + wid; //目的左移
        animated = true;

        function goMove() {

            if ((speed < 0 && parseInt(ul.style.left) > left) || (speed > 0 && parseInt(ul.style.left) < left)) {
                ul.style.left = parseInt(ul.style.left) + speed + 'px';
                setTimeout(goMove, interval);
            } else {
                animated = false;
                if (left > -1200) {
                    ul.style.left = -4800 + 'px';
                };
                if (left < -4800) {
                    ul.style.left = -1200 + 'px';
                };
            }
        };

        goMove();
    };

    function getChild(elem) {
        var children = elem.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType == 3) {
                elem.removeChild(children[i]);
            }
        }
        return children;
    };

});

/* ------------------------------------------------------------
 * 历史发展轴
 * ------------------------------------------------------------ */
$(function() {
    var timeData = [
        [1997, '在杭州凯旋路北口创办杭州三彩服饰有限公司'],
        [1997, '5月1号, 三彩服饰创办'],
        [1999, '第一家直营店在新声路上的杭派服装市场四区顺利开业'],
        [1999, '公司迁至秋涛路298号'],
        [2000, '公司第一批加盟合作伙伴正式签约'],
        [2000, '被中国社会调查所评为“中国名牌”称号'],
        [2000, '在大连国际服装博览会夺得“双十佳”称号'],
        [2001, '在浙江理工大学设立三彩奖学金'],
        [2001, '为回馈社会，公司在浙江理工大学设立“三彩奖学金'],
        [2001, '公司搬迁至石桥天堂经济开发区13幢'],
        [2001, '被浙江省产品质量管理中心授予“浙江省新世纪质量服务双优企业”'],
        [2001, '在浙江理工大学设立三彩奖学金'],
        [2002, '正式更名为浙江三彩服饰有限公司'],
        [2002, '正式注册更名为浙江三彩服饰有限公司'],
        [2003, '公司规模扩大数倍，开始引领杭州女装行业发展'],
        [2004, '三彩品牌获得国际质量体系认证'],
        [2005, '成立伊布都品牌，开始多品牌运作'],
        [2005, '杭州三彩服饰成为浙江省服装行业协会理事单位'],
        [2006, '卓尚服饰（杭州）有限公司正式成立；并在开发区兴建现代化生产基地'],
        [2006, '7月成立卓尚服饰（杭州）有限公司'],
        [2006, '10月经市政府批准，在杭州经济开发区兴建建筑面积为45亩的现代化生产基地'],
        [2007, '浙江三彩服饰首次亮相香港会展中心时装节'],
        [2007, '三彩服饰首次亮相香港会展中心时装节'],
        [2007, '浙江三彩服饰首次亮相香港会展中心时装节'],
        [2007, '2007年，卓尚公司10周年庆在浙理工大学举行。'],
        [2008, '荣获浙江残疾人福利基金会“爱心奖”，这是对我们“善待他人”价值观的认可'],
        [2008, 'Luxury(丽诗)品牌成立。'],
        [2009, '11月20日，举办第一届员工生日会。'],
        [2009, '3月18日，卓尚服饰有限公司董事长丁武杰，总经理徐招海，应邀出席了浙江理工大学的“三彩奖学金”颁奖典礼暨服装学院“学生成长指导中心”成立仪式。'],
        [2009, '11月18日，杭州职业技术学院举行了荣誉教授聘任仪式，卓尚服饰（杭州）有限公司董事长丁武杰、总经理徐招海，被授予杭州职业技术学院荣誉教授。'],
        [2009, '12月3日，卓尚服饰（杭州）有限公司总经理徐招海和工会主席金方红出席了由浙江省残疾人福利基金会开展的“爱心、希望、圆梦”爱心助残活动，并代表卓尚服饰（杭州）有限公司接受残疾人福利基金会颁发的荣誉奖牌。'],
        [2009, '12月22日，丁董、徐总应邀至中国美院授课'],
        [2009, '公司迁至下沙经济技术开发区，卓尚的未来又踏下坚实的一步'],
        [2009, '卓尚服饰（杭州）有限公司被评为社会责任建设先进企业'],
        [2009, '卓尚服饰（杭州）有限公司获得“浙江省服装行业理事单位”证书'],
        [2009, '总部搬迁至杭州经济技术开发区'],
        [2009, '被杭州经济技术开发区评选为A级信用登记单位'],
        [2009, '卓尚服饰（杭州）有限公司成为“社会责任建设先进企业”'],
        [2010, '2月21日，各位总监和经理在丁董的带领下，向公司的每位员工，发放新年红包。'],
        [2010, '3月31日，丁董、徐总及公司各位领导参加了在太虚湖酒店举行的2010秋装发布会之总代理座谈会。'],
        [2010, '成立丽雪品牌，卓尚家族再添新成员'],
        [2011, '卓尚服饰和浙江理工大学服装学院设立“三彩（三COLOUR）教育奖”。在今后十年，卓尚服饰将每年出资30万元，累计共计300万元，来支持服装教育的发展'],
        [2011, '推行TOC经营模式，我们开始引领行业发展模式'],
        [2011, '三COLOUR.KIDS（童装）品牌成立'],
        [2011, '卓尚服饰（杭州）有限公司纺织品检测实验室获得“能力验证合格实验室证书”和“能力验证结果证书“'],
        [2011, '卓尚服饰（杭州）有限公司被评为第二届全国服装标准化技术委员会标准化工作先进单位'],
        [2011, '卓尚服饰（杭州）有限公司在第二十七届健峰全国品管圈大会荣获”石川奖“和”健峰奖“'],
        [2012, '2月26日，卓尚服饰（杭州）有限公司十五周年庆'],
        [2012, '3月1号，三彩营运中心举办“追求梦想成功路” 徽杭徒步挑战行'],
        [2012, '3月27日—4月，卓尚大学“诵出爱家的心”朗诵比赛。'],
        [2012, '3月21日，企管举办11期奖励交流会--“不走寻常路”'],
        [2012, '6月28日，企管举办12期奖励交流会--“寻找职场幸福”'],
        [2012, '9月21日，企管举办13期奖励交流会--“家的文化”'],
        [2012, '2012年5月，《三彩服饰》全国特聘记者招募'],
        [2012, '6月 ，卓尚大学举办了卓尚“越辩越美丽”辩论赛'],
        [2012, '卓尚大学举办每半月一次的电影播放活动。'],
        [2012, '8月18日晚，由卓尚党支部组织策划、都市快报全程打造的七夕相亲大会在运河广场拉开帷幕。'],
        [2012, '8月8号-20号，《名嘴风尚，谁是秋晚主持人》主持人大赛。'],
        [2012, '8月15日卓尚举行了质量问题商品销毁活动'],
        [2012, '7月10日，卓尚礼仪社团成立'],
        [2012, '2012年4月20日，开展卓尚趣味运动会'],
        [2012, '2012年9月14日，舞蹈社团成立'],
        [2012, '9月26日，卓尚·月圆·悦亲2012中秋晚会'],
        [2012, '10月15日开始了为期23天的卓尚服饰第七届羽乒赛'],
        [2012, '4月，ibudu“一呼百应·时尚革命”全国推广会'],
        [2012, '7月19日河北石家庄招商会召开'],
        [2012, '3月7日中国国际贸易促进委员会杭州市分会杨志毅会长协同杭州各兄弟服装企业的负责人莅临卓尚参观交流。'],
        [2012, '三COLOUR品牌董事长接受《世界都市iTalk》(2012年10月号）的采访'],
        [2012, '成立卓尚大学，为公司发展提供智慧支持'],
        [2012, '3月12日，卓尚服饰方桥新生产基地开业庆典暨杭州伊布都服饰有限公司乔迁仪式在杭州市乔司镇方桥举行。'],
        [2012, '4月，ibudu“一呼百应·时尚革命”全国推广会'],
        [2012, '6月，卓尚服饰（杭州）有限公司成为“纺织服装供应链联盟战略合作伙伴”'],
        [2013, '6月，卓尚青年志愿者社团成立'],
        [2013, '7月I尚麦克风唱歌大赛'],
        [2013, '7月26日第16期奖励交流会'],
        [2013, '5月29日尚学堂首期课程开班'],
        [2013, '6月28日卓尚服饰——二期MTP管理精英打造班论文答辩暨结业典礼'],
        [2013, '7月27日 “ILT首期-物流专业系统提升班”第一阶课程实施'],
        [2013, '6月4日卓尚服饰浙江理工大学服装学院“三彩教育奖”奖学金颁奖活动'],
        [2013, '收购爱浦特，公司将建设现代化物流基地'],
        [2013, '3月1日-31日，卓尚大学举办“卓尚首期雏鹰计划—大学生实习培训”'],
        [2013, '9月18日CELL-CLUB(细胞俱乐部)第1期活动'],
        [2014, '5月26日生产部拓展'],
        [2014, '6月7日行走的力量'],
        [2014, '7月9日，“与道同行，谁与争锋”项目启动'],
        [2014, '7月23日上半年度奖励交流会'],
        [2014, '8月11日，《卓尚视界》创刊，企业文化再增新载体'],
        [2014, '9月2日中秋活动'],
        [2014, '9月12日中秋颁奖盛典'],
        [2014, '第二届篮球赛开始9月15日开幕式，10月9日闭幕式'],
        [2014, '11月22日行走的力量'],
        [2014, '11月27日，“Go with感恩，Go to幸福”文化主题活动'],
        [2014, '11月28日，伊布都团建'],
        [2014, '12月17日，研发团建'],
        [2014, '7月22日，卓尚服饰（杭州）有限公司董事长丁武杰先生与金螳螂建筑装饰股份有限公司常务副总裁严多林先生共同签署了战略合作框架协议书。'],
        [2014, '1月30日，“与奋斗者共享未来”卓尚服饰2015合作伙伴交流大会在九里云松度假酒店举行'],
        [2014, '首个多品牌集合店在上海正大广场正式揭幕'],
        [2014, '8月11日，《卓尚视界》创刊，企业文化再增新载体'],
        [2015, '1月28日，“IN成长TO共享”新春团拜会'],
        [2015, 'XIN力量校招生项目'],
        [2015, '3月22日，通讯员团队启动仪式暨第一期新闻采写学习交流在伊布都五楼举行'],
        [2015, '6月，全员点赞'],
        [2015, '2015年7月10日，核心价值观“善待他人”正式更改为“成就他人”'],
        [2015, '2015年7月10日，第二十期奖励交流会暨百万重奖颁奖盛典'],
        [2015, '2015年7月，全面推行“5S”管理'],
        [2015, '4月2日，开发区党工委副书记邵立春一行来公司调研'],
        [2015, '4月15日，丁武杰董事长和胡智丰校长、张助参加卓尚服饰浙江理工大学服装学院“三彩教育奖”奖学金颁奖活动'],
        [2015, '4月18日，童装事业部举办第一次大型VIP品鉴会'],
        [2015, '5月5日，卓尚服饰18周年庆典'],
        [2015, '3COLOUR,丽雪，伊布都订货会'],
        [2015, '7月，卓尚服饰为《冰与火的青春》全程提供服装赞助'],
        [2015, '7月15日，3COLOUR品牌在杭州成功举办2016春季新品发布会'],
        [2015, '2015年1月28日，“IN成长TO共享”新春团拜会'],
        [2015, '2015年7月10日，第二十期奖励交流会暨百万重奖颁奖盛典'],
        [2015, '2015年7月10日，企业文化核心价值观第三条“善待他人”正式更改为“成就他人”'],
        [2015, '2015年9月22日-11月6日，终端“成你之美 成你所愿”'],
        [2015, '2015年10月9日，“十年成就 你我共享”第十届羽乒赛'],
        [2015, '2015年10月28日，“十年成就 你我共享”第十届羽乒赛之聋哑人羽毛球赛'],
        [2015, '2015年10月23日，下沙中学50周年庆典暨卓尚奖学金捐赠仪式（30万元，分6年进行）'],
        [2015, '2015年10月29日，首届工程技术比武大赛'],
        [2015, '2015年11月，杭州经济技术开发区第六届职工运动会乒乓球混合团体赛第二名'],
        [2015, '2015年11月11日，ULLU首开合伙人项目——“与奋斗者共享未来”序幕正式拉开'],
        [2015, '2015年11月14-15日，行走的力量第三期']
    ];

    timeData.forEach(function (data, index) {
        var li = $('<li class="time-year">' + data[0] + '</li>')
        $('.time-years').append(li);

        li.click(function () {
            var text = timeData[index][1];
            var offset = -120 * index;
            $('.time-label').text(text);
            $('.time-years').css('left', offset);
            $('.time-year').filter('.active')
                .removeClass("active");
            $(this).addClass("active");
        })
    })

    $('.time-years').width(timeData.length * 120);
    $('.time-year:eq(0)').trigger('click');
})

/* ------------------------------------------------------------
 * jQuery滚动监听
 * ------------------------------------------------------------ */

$(function functionName() {
    $('.section1, .section2, .section3').waypoint(function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animation-slide-up');
        }
    }, {
        offset: '50%'
    });
    $('#footer').waypoint(function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animation-slide-up');
        }
    }, {
        offset: '100%'
    });
})

/* ------------------------------------------------------------
 * 初始化（滚动到响应的位置）
 * ------------------------------------------------------------ */

$(function() {
    window.setTimeout(function() {
        var author = location.hash;
        var position = author && $(author).offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 500);
    }, 500);
})
