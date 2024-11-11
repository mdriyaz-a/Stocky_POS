"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[230],{87366:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f});var a=i(95353),o=i(5947),n=i.n(o);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const _={metaInfo:{title:"SMS Settings"},data:function(){return{isLoading:!0,sms_gateway:[],default_sms_gateway:"",twilio:{TWILIO_SID:"",TWILIO_TOKEN:"",TWILIO_FROM:""},nexmo:{nexmo_key:"",nexmo_secret:"",nexmo_from:""},infobip:{base_url:"",api_key:"",sender_from:""}}},methods:l(l({},(0,a.i0)(["refreshUserPermissions"])),{},{Submit_Default_SMS:function(){var t=this;this.$refs.default_form_sms.validate().then((function(e){e?t.update_Default_SMS():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_Twilio_SMS:function(){var t=this;this.$refs.twilio_form_sms.validate().then((function(e){e?t.update_twilio_config():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_Nexmo_SMS:function(){var t=this;this.$refs.nexmo_form_sms.validate().then((function(e){e?t.update_nexmo_config():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},Submit_infobip_SMS:function(){var t=this;this.$refs.infobip_form_sms.validate().then((function(e){e?t.update_infobip_config():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,i){this.$root.$bvToast.toast(e,{title:i,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,i=t.validated,a=t.valid;return e||i?void 0===a?null:a:null},update_Default_SMS:function(){var t=this;n().start(),n().set(.1),axios.put("update_Default_SMS",{default_sms_gateway:this.default_sms_gateway}).then((function(e){t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},update_twilio_config:function(){var t=this;n().start(),n().set(.1),axios.post("update_twilio_config",{TWILIO_SID:this.twilio.TWILIO_SID,TWILIO_TOKEN:this.twilio.TWILIO_TOKEN,TWILIO_FROM:this.twilio.TWILIO_FROM}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},update_nexmo_config:function(){var t=this;n().start(),n().set(.1),axios.post("update_nexmo_config",{nexmo_key:this.nexmo.nexmo_key,nexmo_secret:this.nexmo.nexmo_secret,nexmo_from:this.nexmo.nexmo_from}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},update_infobip_config:function(){var t=this;n().start(),n().set(.1),axios.post("update_infobip_config",{base_url:this.infobip.base_url,api_key:this.infobip.api_key,sender_from:this.infobip.sender_from}).then((function(e){Fire.$emit("Event_sms"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),n().done()})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},get_sms_config:function(){var t=this;axios.get("get_sms_config").then((function(e){t.twilio=e.data.twilio,t.nexmo=e.data.nexmo,t.infobip=e.data.infobip,t.sms_gateway=e.data.sms_gateway,t.default_sms_gateway=e.data.default_sms_gateway,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}}),created:function(){var t=this;this.get_sms_config(),Fire.$on("Event_sms",(function(){t.get_sms_config()}))}};const f=(0,i(14486).A)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("sms_settings"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"default_form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Default_SMS.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:"default sms gateway"}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Default_SMS_Gateway")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_SMS_Gateway"),options:t.sms_gateway.map((function(t){return{label:t.title,value:t.id}}))},model:{value:t.default_sms_gateway,callback:function(e){t.default_sms_gateway=e},expression:"default_sms_gateway"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"twilio_form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Twilio_SMS.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:"TWILIO_SMS"}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_SID",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:"TWILIO SID *"}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"TWILIO_SID-feedback",label:"TWILIO_SID"},model:{value:t.twilio.TWILIO_SID,callback:function(e){t.$set(t.twilio,"TWILIO_SID",e)},expression:"twilio.TWILIO_SID"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_SID-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,1441324107)})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"TWILIO TOKEN *"}},[e("b-form-input",{attrs:{label:"TWILIO_TOKEN",placeholder:t.$t("LeaveBlank")},model:{value:t.twilio.TWILIO_TOKEN,callback:function(e){t.$set(t.twilio,"TWILIO_TOKEN",e)},expression:"twilio.TWILIO_TOKEN"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"TWILIO_FROM",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:"TWILIO FROM *"}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"TWILIO_FROM-feedback",label:"TWILIO_FROM"},model:{value:t.twilio.TWILIO_FROM,callback:function(e){t.$set(t.twilio,"TWILIO_FROM",e)},expression:"twilio.TWILIO_FROM"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"TWILIO_FROM-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,918133443)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t._v(" --\x3e\n\n   "),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"infobip_form_sms"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_infobip_SMS.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:"InfoBip"}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"BASE URL"}},[e("b-form-input",{attrs:{label:"BASE_URL"},model:{value:t.infobip.base_url,callback:function(e){t.$set(t.infobip,"base_url",e)},expression:"infobip.base_url"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"API KEY"}},[e("b-form-input",{attrs:{label:"API_KEY"},model:{value:t.infobip.api_key,callback:function(e){t.$set(t.infobip,"api_key",e)},expression:"infobip.api_key"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("b-form-group",{attrs:{label:"SMS sender number Or Name"}},[e("b-form-input",{attrs:{label:"SMS_From"},model:{value:t.infobip.sender_from,callback:function(e){t.$set(t.infobip,"sender_from",e)},expression:"infobip.sender_from"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))])],1)],1)],1),t._v(" "),e("p",{staticClass:"mt-5"},[e("strong",[t._v("BASE_URL : ")]),t._v(" The Infobip data center used for API traffic."),e("br"),t._v(" "),e("strong",[t._v("API_KEY :")]),t._v(" Authentication method. See API documentation "),e("br"),t._v(" "),e("strong",[t._v("SMS sender number Or Name :")]),t._v(" displayed on recipient's device as message sender. "),e("br"),t._v(" "),e("strong",[t._v("WhatsApp sender number :")]),t._v(" Registered WhatsApp sender number. Must be in international format."),e("br"),t._v(" "),e("strong",[t._v(" ## Links")]),e("br"),t._v(" "),e("strong",[t._v("[API Reference](https://www.infobip.com/docs/api)")]),e("br"),t._v(" "),e("strong",[t._v("[PHP Client for Infobip API](https://github.com/infobip/infobip-api-php-client)")]),e("br")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);