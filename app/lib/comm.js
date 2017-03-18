((global) =>{
	const remChange = () =>{
		let w = document.documentElement.clientWidth;
		if (w>620) {
			w=620;
		} 
		if (w<320) {
			w=320;
		}
		document.documentElement.style.fontSize=w/375*100+'px'
	}
	remChange();
	global.addEventListener('resize',remChange,false)
})(window);