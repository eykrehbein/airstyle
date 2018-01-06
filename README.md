# Airstyle

A lightweight **232 bytes ( _airstyle.min.js_ )** JavaScript library to style HTML elements with JS as easy as possible. 

## Installation

With [npm](https://www.npmjs.com/) and [Browserify](https://github.com/browserify/browserify) do:

```
$ npm install airstyle
```
<!--
Alternatively install it via [unpkg](https://unpkg.com/#/)
```html
<script src="https://unpkg.com/airstyle"></script>
```
-->

## Basic Usage

```html
<div class="myClass">
   <p id="myText">airstyle.js</p>
</div>
```

```javascript
const airstyle = require("airstyle")

// basic syntax
airstyle(element, style)

// style:string
airstyle(".myClass", "width: 200px; height: 200px; border: 1px solid #000000")

// style:object
const styleObj = {
    color: "red",
    "font-size": "40px",
    "font-family": "Arial"
}
airstyle("#myText", styleObj)
```

## Extended usage

You can select an element also with a longer selector. 
```javascript
airstyle("div.user-panel.main input[name=login]", style)
```

Airstyle is also compatible with almost every JS Framework. Tested in Angular, React and Vue.


#### Vue example
```html
<div id="root">
   <div class="container">
    	<p>Hi!</p>
    </div>
</div>
```
```javascript
const style = require("airstyle")
new Vue({
    el: "#root",
    data: {
    	color: "red",
        size: "20px"
    },
    methods: {
    	setStyle(){
            style(".container p", {
            	color: this.color,
                "font-size": this.size
            });
        }
    },
    mounted(){
    	this.setStyle();
    }
})
```

#### React example
```html
<div id="root"></div>
```
```javascript
const style = require("airstyle")
class App extends React.Component {
   constructor(){
      super();
      this.state = {
           color: "red",
           size: "20px"
       }
    }
    componentDidMound(){
   	style(".container p", {
            color: this.state.color,
            "font-size": this.state.size
        });
    }
    render(){
    	return (
       	   <div className="container">
            	<p>Hi!</p>
            </div>
        )
    }
}
```

