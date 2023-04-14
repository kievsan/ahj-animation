/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/widgetCollapsible.js
class WidgetCollapsible {
  constructor() {
    this.container = document.querySelector(".main_container");
  }
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initWidget();
    });
  }
  initWidget() {
    if (!this.container) return;
    const widgetCollapsibleHtml = `
    <div data-widget="widgetCollapsible" class="widget widget_collapsible">       
      <div class="widget_controls"> 
        <button data-id="widgetButton" class="widget_button">Collapse</button> 
      </div>
      <div data-id="widgetFooter" class="widget_footer collapsed">         
        <div class="widget_footer_string">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.        
        </div>
      </div> 
    </div>
    `;
    this.container.insertAdjacentHTML("beforeEnd", widgetCollapsibleHtml);
    this.container.querySelector("[data-widget=widgetCollapsible]").addEventListener("click", evt => {
      if (evt.target.dataset.id !== "widgetButton") return;
      const widgetFooter = evt.currentTarget.querySelector("[data-id=widgetFooter]");
      widgetFooter.classList.toggle("collapsed");
      widgetFooter.classList.toggle("show");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/widgetChat.js
class WidgetChat {
  constructor() {
    this.container = document.querySelector(".main_container");
  }
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initWidget();
    });
  }
  initWidget() {
    if (!this.container) return;
    const widgetChatHtml = `
    <div data-container="widgetChatContainer" class="widget_chat_container">
      <div data-widget="widgetButton" class="widget_round_button">
      </div>
      <div data-widget="widgetChat" class="widget widget_chat hide">
        <div data-id="widgetChatRemove" class="widget_chat_remove">
          &times;
        </div> 
        <h2>Напишите нам</h2>
        <form data-id="widgetChatForm">  
          <textarea data-id="widgetChatInput" class="widget_chat_input"></textarea>           
          <div class="widget_controls widget_chat_controls"> 
            <button data-id="widgetButton" class="widget_button widget_chat_button">Отправить</button> 
          </div>
        </form>
      </div>
    </div>
    `;
    this.container.insertAdjacentHTML("beforeEnd", widgetChatHtml);
    this.chatWidgetContainer = this.container.querySelector("[data-container=widgetChatContainer]");
    this.chatWidgetButton = this.chatWidgetContainer.querySelector("[data-widget=widgetButton]");
    this.chatWidgetWindow = this.chatWidgetContainer.querySelector("[data-widget=widgetChat]");
    this.chatWidgetWindowCloseBtn = this.chatWidgetWindow.querySelector("[data-id=widgetChatRemove]");
    this.chatWidgetButton.addEventListener("click", _ref => {
      let {
        target
      } = _ref;
      target.classList.add("hide");
      this.chatWidgetWindow.classList.remove("hide");
    });
    this.chatWidgetWindow.addEventListener("submit", evt => {
      evt.preventDefault();
    });
    this.chatWidgetWindowCloseBtn.addEventListener("click", () => {
      this.chatWidgetWindow.classList.add("hide");
      this.chatWidgetButton.classList.remove("hide");
    });
  }
}
;// CONCATENATED MODULE: ./src/img/heart.png
const heart_namespaceObject = __webpack_require__.p + "be0d860e775accf30d67.png";
;// CONCATENATED MODULE: ./src/js/widgetLikes.js

class WidgetLikes {
  constructor() {
    this.container = document.querySelector(".main_container");
    this.like = `<img src='${heart_namespaceObject}' data-id="heart" class="heart" alt='heart'>`;
  }
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initWidget();
    });
  }
  createLike() {
    this.widgetLikes = this.container.querySelector("[data-widget=widgetLikes]");
    this.widgetLikes.insertAdjacentHTML("afterBegin", this.like);
    this.likeElement = this.widgetLikes.querySelector("[data-id=heart]");
    const randomFlight = Math.ceil(4 * Math.random());
    this.likeElement.classList.add(`heart_flight${randomFlight}`);
    return this.likeElement;
  }
  initWidget() {
    if (!this.container) return;
    const widgetLikesHtml = `
    <div data-widget="widgetLikes" class="widget_likes">
      <button data-id="widgetLikesButton" class="widget_likes_button">Like</button>    
    </div>
    `;
    this.container.insertAdjacentHTML("beforeEnd", widgetLikesHtml);
    this.likesButton = this.container.querySelector("[data-id=widgetLikesButton]");
    this.likesButton.addEventListener("mousedown", evt => {
      evt.preventDefault();
    });
    this.likesButton.addEventListener("click", () => {
      if (!this.like) return;
      this.createLike().addEventListener("animationend", _ref => {
        let {
          target
        } = _ref;
        target.remove();
      });
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



const widgetCollapsible = new WidgetCollapsible();
widgetCollapsible.init();
const widgetChat = new WidgetChat();
widgetChat.init();
const widgetLikes = new WidgetLikes();
widgetLikes.init();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map