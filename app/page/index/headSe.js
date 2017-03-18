import React from 'react';
let imgUrl = require('../../imgs/user.png');

const HeadSe = (props) => (
	<div>
		<section className="headSe">
			<div className="head">
				<img src = {imgUrl}/>
				<div className="nameBox">
					<h2>用户名</h2>
					<p>我的e币：<font>{}</font></p>
				</div>
			</div>

			<div className="classify clearfix">
				<div className="jifen">
					积分
				</div>
				<div className="hongbao">
					红包
				</div>
				<div className="youhui">
					优惠劵
				</div>
			</div>
		</section>

		<div className="ba-efeef4"></div>

		<section className="entrySe">
			<ul className="entryList">
				<li className="clearfix dingdan"><span className="fl">我的订单</span><i className="jiaoG fr"></i></li>
				<li className="clearfix shoucang"><span className="fl">我的收藏</span><i className="jiaoGo fr"></i></li>
				<li className="clearfix dianping"><span className="fl">我的点评</span><i className="jiaoGo fr"></i></li>
				<li className="clearfix none dizhi"><span className="fl">地址管理</span><i className="jiaoGo fr"></i></li>
			</ul>

			<div className="ba-efeef4"></div>

			<ul className="entryList">
				<li className="clearfix wenti"><span className="fl">常见问题</span><i className="jiaoG fr"></i></li>
				<li className="clearfix guanyu"><span className="fl">关于</span><i className="jiaoGo fr"></i></li>
			</ul>
		</section>
	</div>
	
);

export default HeadSe;