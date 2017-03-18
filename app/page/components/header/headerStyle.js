var imgUrl = require('../../../imgs/sgo.png')
export default {
	Head :{
		height : '0.44rem',
		width : '100%',
		boxSizing: 'border-box',
		display : '-webkit-box',
		padding: '0 0.15rem',
		borderBottom:'1px solid #e1e1e1',
		background : '#fff',
	},
	go: {
		display : 'block',
		background : 'url('+imgUrl+') no-repeat',
		backgroundSize: '100%',
		width : '0.11rem',
		height : '0.2rem',
		marginTop :'0.12rem',
	},
	tit: {
		width : '100%',
		lineHeight: '0.44rem',
		color : '#333',
		fontSize : '0.18rem',
		textAlign:'center',
	}
}
