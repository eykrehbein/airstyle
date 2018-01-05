const style = (element, style) => {
	element = document.querySelector(element.toString());
	if(typeof style === "string"){
		element.setAttribute("style", style);
	}
	if(typeof style === "object"){
		let stringified = "";
		for(let i=0; i!=Object.keys(style).length; i++){
			let declaration = Object.keys(style)[i];
			let value = style[declaration];
			stringified = stringified + declaration + ":" + value + ";";
		}
		element.setAttribute("style", stringified);
	}
}
module.exports = style;