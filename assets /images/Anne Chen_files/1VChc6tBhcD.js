if (self.CavalryLogger) { CavalryLogger.start_js(["uZC8t"]); }

__d("MessengerThreadFetchLoggerUtil",["FBLogger","MercuryIDs","MessengerWebQuickLogModule","QuickPerformanceLogger","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1,h=new Map();a={markerStart:function(a){try{b("QuickPerformanceLogger").markerStart(b("MessengerWebQuickLogModule").FETCH_THREAD_INFO,g);a=b("MercuryIDs").tokenize(a).value;h.set(a,g);g++}catch(a){b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")}},markerEnd:function(a,c){try{a=b("MercuryIDs").tokenize(a).value;var d=h.get(a);d!=null&&(b("QuickPerformanceLogger").markerEnd(b("MessengerWebQuickLogModule").FETCH_THREAD_INFO,c,d),h["delete"](a))}catch(a){b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")}},markerPoint:function(a,c,d){d===void 0&&(d=b("performanceAbsoluteNow")());a=h.get(a);a!=null&&b("QuickPerformanceLogger").markerPoint(b("MessengerWebQuickLogModule").FETCH_THREAD_INFO,c,undefined,a,d)}};e.exports=a}),null);