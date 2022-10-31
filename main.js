(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.url,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка загрузки данных ".concat(e.status)))}},{key:"_request",value:function(e,t){var n=this;return fetch(e,t).then((function(e){return n._checkResponse(e)}))}},{key:"getUserData",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"addCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"editUserInfo",value:function(e){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"putLike",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"changeAvatar",value:function(e){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likes=t.likes,this._likesCount=t.likes.length,this._ownerId=t.owner._id,this._userId=n,this._isLiked=Boolean(t.likes.find((function(e){return e._id===n}))),this._templateSelector=r,this._handleCardClick=o,this._handleDeleteCard=i,this._handleLike=u,this.removeCard=this.removeCard.bind(this)}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getLikesState",value:function(){return this._buttonLike.classList.contains("element__button-like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._ownerId!==this._userId&&(this._buttonDelete.remove(),this._buttonDelete=null),this._buttonDelete&&this._buttonDelete.addEventListener("click",(function(){e._handleDeleteCard(e._id)})),this._buttonLike.addEventListener("click",(function(){e._handleLike(e._id)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"setLike",value:function(e){this._buttonLike.classList.add("element__button-like_active"),this._elementLikes.textContent=e,this._isLiked=!0}},{key:"removeLike",value:function(e){this._buttonLike.classList.remove("element__button-like_active"),this._elementLikes.textContent=e,this._isLiked=!1}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonDelete=this._element.querySelector(".element__button-delete"),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._buttonDelete=this._element.querySelector(".element__button-delete"),this._elementLikes=this._element.querySelector(".element__like-count"),this._buttonLike=this._element.querySelector(".element__button-like"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._elementLikes.textContent=this._likes.length,this._isLiked&&this.setLike(this._likesCount),this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"appendItem",value:function(e){this._container.append(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleKeypressEsc")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleKeypressEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleKeypressEsc)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._buttonConfirm=t._popup.querySelector(".popup__button-submit"),t}return t=u,(n=[{key:"setSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setButtonText",value:function(e){this._buttonConfirm=e}},{key:"setEventListeners",value:function(){var e=this;l(y(u.prototype),"setEventListeners",this).call(this),this._buttonConfirm.addEventListener("click",(function(t){t.preventDefault(),e.setButtonText("Удаление..."),e._handleSubmit()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClassActive)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClassActive)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disabledButton():this._activeButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disabledButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_activeButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enabledValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){var n=e._formElement.querySelector("#".concat(t.id,"-error"));e._hideInputError(t,n)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageCaption=t._popup.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e){g(E(u.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupImageCaption.textContent=e.name}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitForm=t,n._popupForm=n._popup.querySelector(".popup__form"),n._buttonSubmit=n._popup.querySelector(".popup__button-submit"),n._inputsList=function(e){if(Array.isArray(e))return j(e)}(r=n._popup.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._buttonSubmiText=n._buttonSubmit.textContent,n}return t=u,n=[{key:"_getInputValues",value:function(){return this._inputsList.reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setInputValues",value:function(e){var t=this;Object.keys(e).forEach((function(n){t._inputsList.find((function(e){return e.name===n})).value=e[n]}))}},{key:"close",value:function(){this._popupForm.reset(),I(A(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;I(A(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._buttonSubmit.textContent=e?t:this._buttonSubmiText}}],n&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._profileName.textContent=t,this._profileAbout.textContent=n,this._userId=o,r&&this.updateAvatar({avatar:r})}},{key:"updateAvatar",value:function(e){var t=e.avatar;this._profileAvatar.src=t}},{key:"getUserId",value:function(){return this._userId}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error",errorClassActive:"popup__input-error_active"},D=document.querySelector(".profile__button-edit"),V=document.querySelector(".profile__button-add"),N=document.querySelector(".profile__avatar"),F=document.querySelector(".popup__form_type_add"),H=document.querySelector(".popup__form_type_edit"),M=document.querySelector(".popup__form_type_avatar");function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_about");var K=new t({url:"https://mesto.nomoreparties.co/v1/cohort-52/",headers:{authorization:"2ca56f07-fcb4-4986-82c9-567bd5155cbe","Content-Type":"application/json"}});function G(e){var t=new r(e,Q.getUserId(),".element-card",(function(){$.open(e)}),(function(e){z.open(),z.setSubmitHandler((function(){K.deleteCard(e).then((function(e){t.removeCard(),z.close()})).catch((function(e){console.log(e)})).finally((function(){z.setButtonText("Да")}))}))}),(function(e){t.getLikesState()?K.deleteLike(e).then((function(e){t.removeLike(e.likes.length)})).catch((function(e){console.log(e)})):K.putLike(e).then((function(e){t.setLike(e.likes.length)})).catch((function(e){console.log(e)}))}));return t.generateCard()}var $=new L(".popup_type_image");$.setEventListeners();var z=new _(".popup_type_delete");z.setEventListeners();var Q=new U({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__image"}),W=new R(".popup_type_avatar",(function(e){W.renderLoading(!0),K.changeAvatar(e.link).then((function(e){Q.updateAvatar(e)})).then((function(){W.close()})).catch((function(e){console.log(e)})).finally((function(){W.renderLoading(!1)}))}));W.setEventListeners();var X=new R(".popup_type_profile",(function(e){X.renderLoading(!0),K.editUserInfo(e).then((function(){Q.setUserInfo(e)})).then((function(){X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))}));X.setEventListeners(),N.addEventListener("click",(function(){ne.resetValidation(),W.open()})),D.addEventListener("click",(function(e){ee.resetValidation(),X.setInputValues(Q.getUserInfo()),X.open()}));var Y=new R(".popup_type_card-add",(function(e){Y.renderLoading(!0),K.addCard(e).then((function(e){var t=G(e,Q.getUserId());Z.prependItem(t)})).then((function(){Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1)}))}));Y.setEventListeners(),V.addEventListener("click",(function(){te.resetValidation(),Y.open()}));var Z,ee=new b(B,H),te=new b(B,F),ne=new b(B,M);ee.enabledValidation(),te.enabledValidation(),ne.enabledValidation(),Promise.all([K.getUserData(),K.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];Q.setUserInfo(o),(Z=new i((function(e){var t=G(e,Q.getUserId());Z.appendItem(t)}),".elements")).renderItems(u)})).catch((function(e){console.log(e)}))})();