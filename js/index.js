var _0x42505b=_0x7cd6;(function(_0x4890be,_0xdce60b){var _0x11fc38=_0x7cd6,_0x2ed0c1=_0x4890be();while(!![]){try{var _0x1d0ad9=-parseInt(_0x11fc38(0x15f))/0x1+parseInt(_0x11fc38(0x158))/0x2+parseInt(_0x11fc38(0x16e))/0x3*(parseInt(_0x11fc38(0x159))/0x4)+parseInt(_0x11fc38(0x14f))/0x5*(parseInt(_0x11fc38(0x17f))/0x6)+-parseInt(_0x11fc38(0x17b))/0x7+-parseInt(_0x11fc38(0x177))/0x8*(-parseInt(_0x11fc38(0x155))/0x9)+parseInt(_0x11fc38(0x15a))/0xa*(-parseInt(_0x11fc38(0x140))/0xb);if(_0x1d0ad9===_0xdce60b)break;else _0x2ed0c1['push'](_0x2ed0c1['shift']());}catch(_0x2227df){_0x2ed0c1['push'](_0x2ed0c1['shift']());}}}(_0x2bd1,0xb62b0));var i=0x0,stxtEmpID='',stxtEmpName='',stxtEmpPhone='',stxtEmpGroup='',dbProfile='',CheckFoundData=0x0,EidProfile='',dateString='',sDateRegister='',sCheckRedeemPoint=0x0,sCheckTNIapprove=0x0,sCheckLevel=0x0,sCodeName='TNIRedeemPoint',sMemberlog='';const x=document[_0x42505b(0x142)]('div.com[min=\x22'+i+'\x22]');$(document)[_0x42505b(0x195)](function(){var _0x23c7ed=_0x42505b;sessionStorage[_0x23c7ed(0x157)](),main();});async function main(){var _0x2e5864=_0x42505b;await liff[_0x2e5864(0x198)]({'liffId':_0x2e5864(0x183)}),document[_0x2e5864(0x180)](_0x2e5864(0x197))[_0x2e5864(0x19d)](liff[_0x2e5864(0x197)]()),liff[_0x2e5864(0x197)]()?getUserProfile():liff[_0x2e5864(0x146)]();}async function getUserProfile(){var _0x1df7c1=_0x42505b,_0x4ae069='';const _0x2057a8=await liff[_0x1df7c1(0x17c)]();sessionStorage[_0x1df7c1(0x189)](_0x1df7c1(0x171),_0x2057a8[_0x1df7c1(0x151)]),sessionStorage['setItem']('LineName',_0x2057a8[_0x1df7c1(0x16f)]),sessionStorage[_0x1df7c1(0x189)](_0x1df7c1(0x163),_0x2057a8['pictureUrl']),_0x4ae069+=_0x1df7c1(0x148)+sessionStorage['getItem'](_0x1df7c1(0x163))+_0x1df7c1(0x167),_0x4ae069+=_0x1df7c1(0x161)+sessionStorage[_0x1df7c1(0x13c)](_0x1df7c1(0x194))+_0x1df7c1(0x139),$('#MyProfile')[_0x1df7c1(0x14c)](_0x4ae069),Connect_DB(),CheckTNIdate(),CheckData();}function openWindow(){liff['openWindow']({'url':'https://line.me','external':!![]});}function Connect_DB(){var _0x78677e=_0x42505b,_0x467ccc={'apiKey':'AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','authDomain':_0x78677e(0x18f),'projectId':'retailproject-6f4fc','storageBucket':'retailproject-6f4fc.appspot.com','messagingSenderId':_0x78677e(0x17a),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x78677e(0x153)};firebase['initializeApp'](_0x467ccc),dbProfile=firebase[_0x78677e(0x14b)]()['collection'](_0x78677e(0x18d)),dbTNIdate=firebase['firestore']()[_0x78677e(0x172)](_0x78677e(0x164)),dbTNIapprove=firebase['firestore']()[_0x78677e(0x172)](_0x78677e(0x182)),dbTNIRedeemPoint=firebase[_0x78677e(0x14b)]()['collection'](_0x78677e(0x16c)),dbTNIlog=firebase['firestore']()[_0x78677e(0x172)](_0x78677e(0x13a));}function CheckTNIdate(){var _0x62d343=_0x42505b;dbTNIdate[_0x62d343(0x14d)](_0x62d343(0x15c),'==',sCodeName)[_0x62d343(0x185)](0x1)['get']()[_0x62d343(0x168)](_0x34b463=>{var _0x184f24=_0x62d343;_0x34b463[_0x184f24(0x16a)](_0x5bf09c=>{var _0x239935=_0x184f24;sessionStorage[_0x239935(0x189)](_0x239935(0x164),_0x5bf09c[_0x239935(0x17e)]()[_0x239935(0x160)]),$(_0x239935(0x196))['html'](_0x5bf09c[_0x239935(0x17e)]()[_0x239935(0x160)]);});});}function CheckData(){var _0x2df76e=_0x42505b;dbProfile[_0x2df76e(0x14d)](_0x2df76e(0x162),'==',sessionStorage[_0x2df76e(0x13c)](_0x2df76e(0x171)))[_0x2df76e(0x13e)]()[_0x2df76e(0x168)](_0x11bc9b=>{var _0x1412fd=_0x2df76e;_0x11bc9b[_0x1412fd(0x16a)](_0x1aff90=>{var _0x34b3b9=_0x1412fd;CheckFoundData=0x1,EidProfile=_0x1aff90['id'],sDateRegister=_0x1aff90[_0x34b3b9(0x17e)]()['DateRegister'],sessionStorage[_0x34b3b9(0x189)]('EmpID',_0x1aff90[_0x34b3b9(0x17e)]()[_0x34b3b9(0x152)]),sessionStorage[_0x34b3b9(0x189)](_0x34b3b9(0x15b),_0x1aff90[_0x34b3b9(0x17e)]()[_0x34b3b9(0x184)]),document[_0x34b3b9(0x180)](_0x34b3b9(0x18c))['value']=_0x1aff90[_0x34b3b9(0x17e)]()[_0x34b3b9(0x152)],document['getElementById'](_0x34b3b9(0x191))['value']=_0x1aff90[_0x34b3b9(0x17e)]()[_0x34b3b9(0x184)],document['getElementById'](_0x34b3b9(0x149))['value']=_0x1aff90['data']()[_0x34b3b9(0x166)],document['getElementById']('txtEmpGroup')[_0x34b3b9(0x176)]=_0x1aff90[_0x34b3b9(0x17e)]()[_0x34b3b9(0x156)],_0x1aff90['data']()[_0x34b3b9(0x154)]==0x0?alert(_0x34b3b9(0x192)):CheckTNIapprove();}),CheckFoundData==0x0&&(document[_0x1412fd(0x180)](_0x1412fd(0x19b))['style'][_0x1412fd(0x169)]=_0x1412fd(0x199),document[_0x1412fd(0x180)](_0x1412fd(0x175))[_0x1412fd(0x174)]['display']=_0x1412fd(0x186));});}var sTNIapprove=0x0;function _0x2bd1(){var _0x2cf4af=['EmpID','1114879bRPnlq','DateUpload','<div\x20class=\x22NameLine\x22>','lineID','LinePicture','TNIdate','id02','empPhone','\x22\x20class=\x22add-profile\x22\x20width=\x22100px\x22></div>','then','display','forEach','<div><img\x20src=\x22./img/giphy.gif\x22\x20style=\x22width:100%;\x22></div>','TNIRedeemPoint','getSeconds','57513ZjEgEY','displayName','</div></center>','LineID','collection','<br><b><font\x20color=\x22#ff0000\x22>คุณไม่ได้รับสิทธิ์ในการเข้าใช้งานเว็บไซต์นี้</font></b></div>','style','myRegister','value','88CbsmqP','getMinutes','href','653667385625','3305561RWofFu','getProfile','#WelcomePage','data','804BSQsvr','getElementById','WaitingPage','TNImember','1655966947-ZQna9Rop','empName','limit','block','add','<div\x20class=\x22btn-t2\x22\x20onclick=\x22GotoLink()\x22\x20style=\x22margin-top:20px;padding:6px\x2040px;\x22>ดูข้อมูลของ<br>คุณ','setItem','ไม่สำเร็จ','id01','txtEmpID','CheckProfile','getDate','retailproject-6f4fc.firebaseapp.com','getFullYear','txtEmpName','wait','<div><div\x20class=\x22NameLine\x22>ยินดีต้อนรับสู่\x20TNI\x20Redeem\x20Point</div>','LineName','ready','#DateUpload','isLoggedIn','init','none','\x20Group\x20\x22</div>','Loading','myTimer','append','</b></font>','</div>','TNIlog','home.html','getItem','TotalPointRedeem','get','New\x20User','145013JRjslp','getMonth','querySelectorAll','now','<di></div>','EmpGroup','login','round','<div><img\x20src=\x22','txtEmpPhone','getHours','firestore','html','where','<div\x20style=\x22color:#002d63;\x20font-size:15px;\x20padding:10px;font-weight:\x20600;\x22>\x22\x20','10915UhTaSl','<div\x20style=\x22font-size:\x2011px;\x20color:#000000;\x22>Point\x20ของคุณมีค่า\x20สามารถนำมาเปลี่ยนเป็นของรางวัล<br>ได้ตามความต้องการของคุณ</div>','userId','empID','G-9SKTRHHSW9','statusconfirm','859284kBFxYN','empGroup','clear','2472400MGQUSf','12JczXmi','230QFgNwz','EmpName','CodeName','txtEmpGroup'];_0x2bd1=function(){return _0x2cf4af;};return _0x2bd1();}function _0x7cd6(_0xbff80a,_0x509c94){var _0x2bd1fa=_0x2bd1();return _0x7cd6=function(_0x7cd696,_0x25fda0){_0x7cd696=_0x7cd696-0x139;var _0x2bf024=_0x2bd1fa[_0x7cd696];return _0x2bf024;},_0x7cd6(_0xbff80a,_0x509c94);}function CheckTNIapprove(){var _0x1bfe9d=_0x42505b;dbTNIapprove[_0x1bfe9d(0x14d)](_0x1bfe9d(0x15e),'==',parseFloat(sessionStorage['getItem'](_0x1bfe9d(0x15e))))[_0x1bfe9d(0x185)](0x1)[_0x1bfe9d(0x13e)]()[_0x1bfe9d(0x168)](_0xe9c0c6=>{var _0x283edb=_0x1bfe9d;_0xe9c0c6['forEach'](_0x5da61d=>{var _0x3d1c32=_0x7cd6;sTNIapprove=0x1,sessionStorage[_0x3d1c32(0x189)](_0x3d1c32(0x145),_0x5da61d['data']()[_0x3d1c32(0x145)]),sessionStorage[_0x3d1c32(0x189)]('EmpLevel',0x1),sMemberlog='สำเร็จ',SaveBA_Log(),CheckNewRedeemPoint();}),sTNIapprove==0x0&&(sMemberlog=_0x283edb(0x18a),SaveBA_Log(),WaitingPage());});}function CheckNewRedeemPoint(){var _0x4db1b0=_0x42505b;dbTNIRedeemPoint[_0x4db1b0(0x14d)](_0x4db1b0(0x15e),'==',parseFloat(sessionStorage[_0x4db1b0(0x13c)](_0x4db1b0(0x15e))))[_0x4db1b0(0x185)](0x1)['get']()[_0x4db1b0(0x168)](_0x59dd2b=>{var _0x449959=_0x4db1b0;_0x59dd2b[_0x449959(0x16a)](_0x579986=>{var _0x2e6f31=_0x449959;sCheckTNIapprove=0x1,sessionStorage[_0x2e6f31(0x189)]('TotalPointRedeem',_0x579986[_0x2e6f31(0x17e)]()[_0x2e6f31(0x13d)]),sessionStorage['setItem']('TotalItemRedeem',_0x579986[_0x2e6f31(0x17e)]()['TotalItemRedeem']);});sCheckTNIapprove==0x0&&(dbTNIRedeemPoint[_0x449959(0x187)]({'EmpID':parseFloat(sessionStorage[_0x449959(0x13c)](_0x449959(0x15e))),'TotalPointRedeem':0x0,'TotalItemRedeem':0x0,'DateRedeem':''}),sessionStorage[_0x449959(0x189)](_0x449959(0x13d),0x0),sessionStorage['setItem']('TotalItemRedeem',0x0));var _0x382536='';_0x382536+=_0x449959(0x193),_0x382536+=_0x449959(0x14e)+sessionStorage[_0x449959(0x13c)]('EmpGroup')+_0x449959(0x19a),_0x382536+=_0x449959(0x150),_0x382536+=_0x449959(0x16b),_0x382536+=_0x449959(0x144),_0x382536+=_0x449959(0x188)+sessionStorage[_0x449959(0x13c)](_0x449959(0x15b))+_0x449959(0x139),_0x382536+='<div\x20style=\x22height:\x2015px;\x22></div>',_0x382536+='',_0x382536+=_0x449959(0x139),$(_0x449959(0x17d))[_0x449959(0x14c)](_0x382536),document[_0x449959(0x180)]('id02')[_0x449959(0x174)][_0x449959(0x169)]=_0x449959(0x186);});}function WaitingPage(){var _0x21deaa=_0x42505b,_0x4bce00='';_0x4bce00+='<center><div><img\x20src=\x22./img/stop.png\x22\x20width=\x22250px;\x22></div>',_0x4bce00+='<div\x20style=\x22margin-top:20px;\x22><br><div\x20class=\x22text-waiting\x22>เรียน\x20<font\x20color=\x22#0056ff\x22><b>คุณ'+sessionStorage['getItem'](_0x21deaa(0x15b))+_0x21deaa(0x19e),_0x4bce00+=_0x21deaa(0x173),_0x4bce00+=_0x21deaa(0x170),$('#MyWatingPage')['html'](_0x4bce00),document['getElementById'](_0x21deaa(0x19b))[_0x21deaa(0x174)][_0x21deaa(0x169)]='none',document[_0x21deaa(0x180)](_0x21deaa(0x181))['style'][_0x21deaa(0x169)]='block';}function ClickSaveProfile(){var _0xa71c09=_0x42505b,_0x3eed91=0x0;stxtEmpID=document[_0xa71c09(0x180)](_0xa71c09(0x18c))[_0xa71c09(0x176)],stxtEmpName=document[_0xa71c09(0x180)](_0xa71c09(0x191))[_0xa71c09(0x176)],stxtEmpPhone=document[_0xa71c09(0x180)](_0xa71c09(0x149))['value'],stxtEmpGroup=document[_0xa71c09(0x180)](_0xa71c09(0x15d))[_0xa71c09(0x176)],stxtEmpID!==null&&stxtEmpID!==''&&(_0x3eed91=_0x3eed91+0x1),stxtEmpName!==null&&stxtEmpName!==''&&(_0x3eed91=_0x3eed91+0x1),stxtEmpPhone!==null&&stxtEmpPhone!==''&&(_0x3eed91=_0x3eed91+0x1),stxtEmpGroup!==null&&stxtEmpGroup!==''&&(_0x3eed91=_0x3eed91+0x1),_0x3eed91==0x4&&SaveData();}function SaveBA_Log(){var _0x376184=_0x42505b;NewDate();var _0xf9b723=Math[_0x376184(0x147)](Date[_0x376184(0x143)]()/0x3e8);dbTNIlog['add']({'LineID':sessionStorage[_0x376184(0x13c)](_0x376184(0x171)),'LineName':sessionStorage['getItem']('LineName'),'LinePicture':sessionStorage[_0x376184(0x13c)]('LinePicture'),'EmpID':sessionStorage[_0x376184(0x13c)](_0x376184(0x15e)),'EmpName':sessionStorage[_0x376184(0x13c)]('EmpName'),'PageVisit':sMemberlog,'LogDateTime':dateString,'LogTimeStamp':_0xf9b723});}function SaveData(){var _0x2288e5=_0x42505b;NewDate(),EidProfile==''&&(alert(_0x2288e5(0x13f)),dbProfile[_0x2288e5(0x187)]({'lineID':sessionStorage[_0x2288e5(0x13c)](_0x2288e5(0x171)),'lineName':sessionStorage[_0x2288e5(0x13c)](_0x2288e5(0x194)),'linePicture':sessionStorage[_0x2288e5(0x13c)](_0x2288e5(0x163)),'empID':document[_0x2288e5(0x180)](_0x2288e5(0x18c))['value'],'empName':document[_0x2288e5(0x180)](_0x2288e5(0x191))[_0x2288e5(0x176)],'empPhone':document[_0x2288e5(0x180)](_0x2288e5(0x149))[_0x2288e5(0x176)],'empGroup':document[_0x2288e5(0x180)](_0x2288e5(0x15d))[_0x2288e5(0x176)],'empRH':document['getElementById'](_0x2288e5(0x15d))[_0x2288e5(0x176)],'statusconfirm':0x0,'statusedit':0x1,'statuspass':0x0,'empAddress':'','lastcheckin':'','memo':'','empBr':'','DateRegister':dateString,'RegisterDate':dateString})),CheckData(),document[_0x2288e5(0x180)]('myRegister')['style'][_0x2288e5(0x169)]=_0x2288e5(0x199),document[_0x2288e5(0x180)](_0x2288e5(0x19c))[_0x2288e5(0x174)]['display']='block';}function GotoLink(){var _0x21c095=_0x42505b;location[_0x21c095(0x179)]=_0x21c095(0x13b);}function NewDate(){var _0xb03296=_0x42505b,_0xb9ee78=new Date(),_0xe0d6c3=_0xb9ee78[_0xb03296(0x18e)]()+'',_0x3e2804=_0xb9ee78[_0xb03296(0x141)]()+0x1+'',_0x559a9a=_0xb9ee78[_0xb03296(0x190)]()+'',_0x50ead2=_0xb9ee78[_0xb03296(0x14a)]()+'',_0x511446=_0xb9ee78[_0xb03296(0x178)]()+'',_0x5b7244=_0xb9ee78[_0xb03296(0x16d)]()+'',_0x3bc388=_0x50ead2>=0xc?'PM':'AM';_0xe0d6c3=checkZero(_0xe0d6c3),_0x3e2804=checkZero(_0x3e2804),_0x559a9a=checkZero(_0x559a9a),_0x50ead2=checkZero(_0x50ead2),_0x511446=checkZero(_0x511446),_0x5b7244=checkZero(_0x5b7244),dateString=_0xe0d6c3+'/'+_0x3e2804+'/'+_0x559a9a+'\x20'+_0x50ead2+':'+_0x511446+':'+_0x5b7244+'\x20'+_0x3bc388;}function checkZero(_0x35079f){return _0x35079f['length']==0x1&&(_0x35079f='0'+_0x35079f),_0x35079f;}function CloseAll(){var _0x22cf56=_0x42505b;document['getElementById'](_0x22cf56(0x18b))[_0x22cf56(0x174)][_0x22cf56(0x169)]=_0x22cf56(0x199),document[_0x22cf56(0x180)](_0x22cf56(0x165))[_0x22cf56(0x174)][_0x22cf56(0x169)]=_0x22cf56(0x199);}
