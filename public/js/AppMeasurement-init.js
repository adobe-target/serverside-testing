//initialize AppMeasurement
var s_account="adobetargetmobilewesteros"
var s=s_gi(s_account)

/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
s.visitor=Visitor.getInstance("B8A054D958807F770A495DD6@AdobeOrg")

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:" //optional: add your internal domain here
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* uncomment below to use doPlugins */
/* s.usePlugins=true
 function s_doPlugins(s) {

 // use implementation plug-ins that are defined below
 // in this section. For example, if you copied the append
 // list plug-in code below, you could call:
 // s.events=s.apl(s.events,"event1",",",1);

 }
 s.doPlugins=s_doPlugins */

/* WARNING: Changing any of the below variables will cause drastic
 changes to how your visitor data is collected.  Changes should only be
 made when instructed to do so by your account manager.*/
s.trackingServer="adobetargetmobile.sc.omtrdc.net"
s.trackingServerSecure="adobetargetmobile.sc.omtrdc.net"
