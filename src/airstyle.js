const style = (element, style) => {
	element = document.querySelector(element.toString());
	if(typeof style === "string"){
		element.setAttribute("style", style);
	}
	if(typeof style === "object"){
		let stringified = "";
		for(let declaration in style){
			let value = style[declaration];
			stringified = stringified + declaration + ":" + value + ";";
		}
		element.setAttribute("style", stringified);
	}
}
module.exports = style;
