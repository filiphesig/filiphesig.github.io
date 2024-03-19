(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<button type="button" id="myBtn">Helper Button</button>` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

        fireChanged() {
            console.log("OnClick Triggered");
			let url = 'https://example.com';

			fetch(url)
			.then(res => res.json())
			.then(out =>
				console.log('Checkout this JSON! ', out))
			.catch(err => { throw err });
            
        }        
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();
