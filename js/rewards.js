var _0x3b852d=_0x38c8;(function(_0x151fa5,_0x17438a){var _0xe5af62=_0x38c8,_0x362a67=_0x151fa5();while(!![]){try{var _0xc416dc=-parseInt(_0xe5af62(0x210))/0x1*(parseInt(_0xe5af62(0x267))/0x2)+-parseInt(_0xe5af62(0x1fc))/0x3*(parseInt(_0xe5af62(0x259))/0x4)+parseInt(_0xe5af62(0x24f))/0x5+parseInt(_0xe5af62(0x235))/0x6+parseInt(_0xe5af62(0x206))/0x7+parseInt(_0xe5af62(0x270))/0x8*(-parseInt(_0xe5af62(0x219))/0x9)+-parseInt(_0xe5af62(0x23f))/0xa*(-parseInt(_0xe5af62(0x1ea))/0xb);if(_0xc416dc===_0x17438a)break;else _0x362a67['push'](_0x362a67['shift']());}catch(_0x40dbe1){_0x362a67['push'](_0x362a67['shift']());}}}(_0x43be,0x8c6e1));var cleararray='',dbTNIStock='',EidStockID='',EidRedeem='',EidRedeemPoint='',sStockName='',sStockRedeem='',sStockImg='',sStockDetail='',OpenMenu=0x0,PointForRedeem=0x0,sTotalPointRedeem=0x0,sTotalItemRedeem=0x0,dateString=new Date()['toLocaleString'](_0x3b852d(0x251),{'timeZone':_0x3b852d(0x230)});$(document)[_0x3b852d(0x255)](function(){var _0x23fe2e=_0x3b852d;sessionStorage[_0x23fe2e(0x20f)]('EmpLevel')==null&&(location[_0x23fe2e(0x225)]='index.html'),$(_0x23fe2e(0x243))[_0x23fe2e(0x254)]('<div\x20class=\x22btn-orange\x22\x20style=\x22margin-top:-4px;font-size:\x2014px;\x22>คุณมี\x20'+addCommas(sessionStorage[_0x23fe2e(0x20f)](_0x23fe2e(0x218)))+_0x23fe2e(0x207)),document[_0x23fe2e(0x1f7)]('DisplayShowRewards')['style'][_0x23fe2e(0x1ec)]=_0x23fe2e(0x25a),Connect_DB();});function Connect_DB(){var _0x1ed427=_0x3b852d,_0x25d45b={'apiKey':_0x1ed427(0x1fb),'authDomain':_0x1ed427(0x20a),'projectId':_0x1ed427(0x242),'databaseURL':'https://file-upload-6f4fc.firebaseio.com','storageBucket':'retailproject-6f4fc.appspot.com','messagingSenderId':_0x1ed427(0x21a),'appId':_0x1ed427(0x223),'measurementId':_0x1ed427(0x229)};firebase[_0x1ed427(0x1fe)](_0x25d45b),dbTNIStock=firebase[_0x1ed427(0x214)]()[_0x1ed427(0x236)](_0x1ed427(0x238)),dbTNIStocklog=firebase[_0x1ed427(0x214)]()['collection'](_0x1ed427(0x1e6)),dbTNIRedeemPoint=firebase[_0x1ed427(0x214)]()['collection'](_0x1ed427(0x23c)),dbStockConfirm=firebase[_0x1ed427(0x214)]()[_0x1ed427(0x236)]('TNIStockConfirm'),CheckRedeemPoint(),LoadReward();}function CheckRedeemPoint(){var _0x48d9fe=_0x3b852d;dbTNIRedeemPoint[_0x48d9fe(0x265)](_0x48d9fe(0x1eb),'==',parseFloat(sessionStorage[_0x48d9fe(0x20f)](_0x48d9fe(0x1eb))))[_0x48d9fe(0x1f8)]()[_0x48d9fe(0x234)](_0x184637=>{_0x184637['forEach'](_0x1b72ff=>{var _0x584b4c=_0x38c8;EidRedeemPoint=_0x1b72ff['id'],sTotalPointRedeem=_0x1b72ff[_0x584b4c(0x1e9)]()[_0x584b4c(0x22d)],sTotalItemRedeem=_0x1b72ff[_0x584b4c(0x1e9)]()['TotalItemRedeem'],sessionStorage[_0x584b4c(0x21f)](_0x584b4c(0x22d),_0x1b72ff[_0x584b4c(0x1e9)]()[_0x584b4c(0x22d)]),sessionStorage[_0x584b4c(0x21f)](_0x584b4c(0x203),_0x1b72ff['data']()[_0x584b4c(0x203)]);});});}var sCodeStock=0x0;function _0x38c8(_0x372eb7,_0x4c7892){var _0x43bef1=_0x43be();return _0x38c8=function(_0x38c89e,_0x213dee){_0x38c89e=_0x38c89e-0x1e4;var _0x5188dd=_0x43bef1[_0x38c89e];return _0x5188dd;},_0x38c8(_0x372eb7,_0x4c7892);}function LoadReward(){var _0x4f6485=_0x3b852d,_0x62fd09=0x0,_0x64c6bb='',_0x3f563e=sessionStorage[_0x4f6485(0x20f)](_0x4f6485(0x218));sCodeStock=0x0,dbTNIStock[_0x4f6485(0x258)](_0x4f6485(0x232),_0x4f6485(0x250))[_0x4f6485(0x1f8)]()[_0x4f6485(0x234)](_0x57d97a=>{var _0x3a6811=_0x4f6485;_0x57d97a[_0x3a6811(0x1ee)](_0x1253b6=>{var _0x16dfa1=_0x3a6811;if(_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x215)]!=sCodeStock){if(_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x215)]==0x1)_0x64c6bb+=_0x16dfa1(0x26c),_0x64c6bb+=_0x16dfa1(0x1fd),_0x64c6bb+='<ul\x20style=\x22margin-left:-25px;\x22><li>รอบการแลก\x20ตั้งแต่วันที่\x2026\x20ก.ย.\x20–\x207\x20ต.ค.\x2065\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20พ.ย.\x2065</li><li>รอบการแลก\x20ตั้งแต่วันที่\x2021\x20พ.ย.\x20–\x202\x20ธ.ค.\x2065\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20ม.ค.\x2066</li><li>รอบการแลก\x20ตั้งแต่วันที่\x2020\x20ม.ค.\x2065\x20–\x203\x20ก.พ.\x2066\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20มี.ค.\x2066</li></ul></div>';else{if(_0x1253b6[_0x16dfa1(0x1e9)]()['StockGroup']==0x2)_0x64c6bb+='<div\x20class=\x22clr\x22></div><center><div\x20class=\x22btn-leaderboard\x22><div>คะแนนแลกของรางวัล\x20Product\x20Apple</div></div></center>',_0x64c6bb+='<div\x20class=\x22group-remark\x22><b>หมายเหตุ</b>\x20:\x20<br>ของรางวัลเป็นไปตามเงื่อนไขที่กำหนด\x20ไม่สามารถเลือกสี\x20และเปลี่ยนแปลงรุ่นของรางวัลได้\x20<br><br>',_0x64c6bb+=_0x16dfa1(0x264);else _0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x215)]==0x3&&(_0x64c6bb+='<div\x20class=\x22clr\x22></div><center><div\x20class=\x22btn-leaderboard\x22><div>คะแนนแลกของรางวัล\x20ทริปท่องเที่ยว</div></div></div></center>',_0x64c6bb+=_0x16dfa1(0x261),_0x64c6bb+=_0x16dfa1(0x209));}sCodeStock=_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x215)];}_0x62fd09=_0x62fd09+0x1;var _0x12090a=0x0;_0x12090a=parseFloat(sessionStorage[_0x16dfa1(0x20f)](_0x16dfa1(0x218)))/parseFloat(_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x232)])*0x64,_0x12090a<0x64?(_0x64c6bb+='<div\x20class=\x22col-lg-6\x20col-md-2\x20slide\x20text-center\x20boxvdo\x20imgblack\x22\x20data-aos=\x22fade-left\x22>',_0x64c6bb+=_0x16dfa1(0x1ff),_0x64c6bb+=_0x16dfa1(0x252)+_0x1253b6['data']()[_0x16dfa1(0x1f5)]+_0x16dfa1(0x269),_0x64c6bb+=_0x16dfa1(0x20b)+_0x12090a[_0x16dfa1(0x22b)](0x2)+_0x16dfa1(0x271),_0x64c6bb+=_0x16dfa1(0x233)+_0x12090a[_0x16dfa1(0x22b)](0x2)+_0x16dfa1(0x202),_0x64c6bb+='<div\x20class=\x22boxvdo-title\x22><div\x20class=\x22boxvdo-header\x22>'+_0x1253b6['data']()[_0x16dfa1(0x260)]+_0x16dfa1(0x245),_0x64c6bb+=_0x16dfa1(0x246)+_0x1253b6[_0x16dfa1(0x1e9)]()['StockDetail']+_0x16dfa1(0x245),sessionStorage[_0x16dfa1(0x20f)](_0x16dfa1(0x218))!=_0x16dfa1(0x22e)&&(_0x64c6bb+=_0x16dfa1(0x25e)+addCommas(_0x1253b6['data']()['PointRedeem'])+_0x16dfa1(0x23d))):(_0x64c6bb+=_0x16dfa1(0x212),_0x64c6bb+=_0x16dfa1(0x1ff),_0x64c6bb+=_0x16dfa1(0x252)+_0x1253b6['data']()[_0x16dfa1(0x1f5)]+_0x16dfa1(0x269),_0x12090a>0x64&&(_0x12090a=0x64),_0x64c6bb+=_0x16dfa1(0x239)+_0x12090a['toFixed'](0x2)+_0x16dfa1(0x271),_0x64c6bb+=_0x16dfa1(0x233)+_0x12090a[_0x16dfa1(0x22b)](0x2)+'%</p></div></div></div>',_0x64c6bb+='<div\x20class=\x22boxvdo-title\x22><div\x20class=\x22boxvdo-header\x22>'+_0x1253b6[_0x16dfa1(0x1e9)]()['StockName']+_0x16dfa1(0x245),_0x64c6bb+=_0x16dfa1(0x246)+_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x240)]+'</div>',sessionStorage[_0x16dfa1(0x20f)](_0x16dfa1(0x218))!='NaN'&&(_0x64c6bb+=_0x16dfa1(0x1f9)+_0x1253b6['id']+'\x27,'+_0x62fd09+_0x16dfa1(0x222)+addCommas(_0x1253b6[_0x16dfa1(0x1e9)]()[_0x16dfa1(0x232)])+_0x16dfa1(0x23d))),_0x64c6bb+=_0x16dfa1(0x25b);}),$(_0x3a6811(0x25f))['html'](_0x64c6bb);});}function LoadRedeem(){var _0x1255d8=_0x3b852d,_0x432e4c='';dbTNIStocklog[_0x1255d8(0x265)](_0x1255d8(0x1eb),'==',sessionStorage[_0x1255d8(0x20f)](_0x1255d8(0x1eb)))[_0x1255d8(0x265)](_0x1255d8(0x1ef),'==',0x0)[_0x1255d8(0x258)](_0x1255d8(0x26e),_0x1255d8(0x253))[_0x1255d8(0x1f8)]()[_0x1255d8(0x234)](_0x124e78=>{var _0x1841a2=_0x1255d8;_0x124e78[_0x1841a2(0x1ee)](_0x58264b=>{var _0x8e910b=_0x1841a2;_0x432e4c+=_0x8e910b(0x21e),_0x432e4c+=_0x8e910b(0x21b),_0x432e4c+='<img\x20src=\x22'+_0x58264b[_0x8e910b(0x1e9)]()[_0x8e910b(0x1f5)]+_0x8e910b(0x262),_0x432e4c+=_0x8e910b(0x221)+_0x58264b['data']()[_0x8e910b(0x260)]+'</div>',_0x432e4c+=_0x8e910b(0x246)+_0x58264b['data']()[_0x8e910b(0x240)]+'</div>',_0x432e4c+=_0x8e910b(0x22a)+_0x58264b[_0x8e910b(0x1e9)]()[_0x8e910b(0x263)]+_0x8e910b(0x245),_0x432e4c+='</div></div></div>';}),$(_0x1841a2(0x1f3))[_0x1841a2(0x254)](_0x432e4c);});}function DoneRedeem(){var _0x4d39b6=_0x3b852d,_0xa80bd9='';_0xa80bd9+=_0x4d39b6(0x227),_0xa80bd9+='<thead\x20class=\x22thead-dark\x22><tr><th>รายการยืนยันการแลกรางวัล</th></tr></thead><tbody>',dbStockConfirm['where'](_0x4d39b6(0x1eb),'==',parseFloat(sessionStorage[_0x4d39b6(0x20f)](_0x4d39b6(0x1eb))))['orderBy'](_0x4d39b6(0x263),_0x4d39b6(0x253))['get']()[_0x4d39b6(0x234)](_0x4df39a=>{var _0x51631e=_0x4d39b6;_0x4df39a['forEach'](_0x5208a9=>{var _0x303e43=_0x38c8;_0xa80bd9+=_0x303e43(0x1f1),_0xa80bd9+='<td\x20style=\x22line-height:\x201.3;\x22>รหัสสินค้า\x20<font\x20color=\x22#f68b1f\x22><b>'+_0x5208a9[_0x303e43(0x1e9)]()[_0x303e43(0x260)]+'</b></font>',_0xa80bd9+=_0x303e43(0x213)+addCommas(_0x5208a9['data']()[_0x303e43(0x232)])+_0x303e43(0x247),_0xa80bd9+='วันที่แลก\x20<font\x20color=\x22#0056ff\x22>'+_0x5208a9[_0x303e43(0x1e9)]()[_0x303e43(0x263)]+_0x303e43(0x1e7),_0xa80bd9+=_0x303e43(0x1e8)+_0x5208a9[_0x303e43(0x1e9)]()['DateConfirm']+_0x303e43(0x231),_0xa80bd9+=_0x303e43(0x24d);}),_0xa80bd9+='</tbody></table>',$(_0x51631e(0x20d))[_0x51631e(0x254)](_0xa80bd9);});}function OpenRewards(_0x526893){var _0x5cff14=_0x3b852d;dbTNIStock[_0x5cff14(0x265)](firebase[_0x5cff14(0x214)]['FieldPath']['documentId'](),'==',_0x526893)[_0x5cff14(0x1f8)]()['then'](_0x151ab8=>{var _0x134718=_0x5cff14;_0x151ab8[_0x134718(0x1ee)](_0x591c97=>{var _0x44d238=_0x134718;EidStockID=_0x591c97['id'],PointForRedeem=_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x232)],sStockName=_0x591c97[_0x44d238(0x1e9)]()['StockName'],sStockRedeem=_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x226)],sStockImg=_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x1f5)],sStockDetail=_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x240)];var _0x5b0da3='';if(_0x591c97['data']()[_0x44d238(0x215)]==0x1)_0x5b0da3+=_0x44d238(0x24b),_0x5b0da3+='<li>ท่าน\x20<font\x20color=\x22#ff0000\x22><u>ไม่สามารถทำการยกเลิก/เปลี่ยนแปลงการแลกของรางวัล\x20เมื่อท่านกดปุ่ม\x20<b>ยืนยันแลกของรางวัลแล้ว</b></u></font></li></ul>',_0x5b0da3+=_0x44d238(0x1fd),_0x5b0da3+=_0x44d238(0x274);else{if(_0x591c97['data']()[_0x44d238(0x215)]==0x2)_0x5b0da3+='<div\x20class=\x22group-remark1\x22><b>คำเตือน\x20:\x20</b><br><br><ul\x20style=\x22margin-left:-25px;\x22><li>Point\x20สำหรับการแลกของรางวัลของท่าน\x20<font\x20color=\x22#ff0000\x22><u>จะลดลง</u></font>เมื่อท่านทำรายการแลกของรางวัลตามรายการที่ท่านเลือก</li>',_0x5b0da3+=_0x44d238(0x20e),_0x5b0da3+=_0x44d238(0x204);else _0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x215)]==0x3&&(_0x5b0da3+='<div\x20class=\x22group-remark1\x22><b>คำเตือน\x20:\x20</b><br><br><ul\x20style=\x22margin-left:-25px;\x22><li>Point\x20สำหรับการแลกของรางวัลของท่าน\x20<font\x20color=\x22#ff0000\x22><u>จะลดลง</u></font>เมื่อท่านทำรายการแลกของรางวัลตามรายการที่ท่านเลือก</li>',_0x5b0da3+=_0x44d238(0x20e),_0x5b0da3+=_0x44d238(0x1e4),_0x5b0da3+=_0x44d238(0x209));}$(_0x44d238(0x26b))[_0x44d238(0x254)](_0x5b0da3),$(_0x44d238(0x1e5))[_0x44d238(0x254)](_0x44d238(0x252)+_0x591c97['data']()[_0x44d238(0x1f5)]+_0x44d238(0x26a)),$(_0x44d238(0x1f0))[_0x44d238(0x254)](_0x44d238(0x256)+_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x260)]+'</div>'),$('#DisplayStockDetail')[_0x44d238(0x254)](_0x44d238(0x244)+_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x240)]+_0x44d238(0x245)),$(_0x44d238(0x220))[_0x44d238(0x254)](addCommas(_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x226)])+_0x44d238(0x228)),$(_0x44d238(0x26f))['html'](addCommas(sessionStorage['getItem'](_0x44d238(0x218)))+'\x20Point'),$(_0x44d238(0x22c))[_0x44d238(0x254)](addCommas(_0x591c97['data']()[_0x44d238(0x232)])+_0x44d238(0x266)),$(_0x44d238(0x217))[_0x44d238(0x254)](addCommas(sessionStorage['getItem'](_0x44d238(0x218))-_0x591c97[_0x44d238(0x1e9)]()[_0x44d238(0x232)])+_0x44d238(0x266));});}),document[_0x5cff14(0x1f7)](_0x5cff14(0x1f4))[_0x5cff14(0x21d)]['display']=_0x5cff14(0x25a);}function _0x43be(){var _0x3a8efc=['initializeApp','<div\x20class=\x22boxvdo-border\x20member\x22><div\x20class=\x22boxvdo-img\x22>','replace','LinePicture','%</p></div></div></div>','TotalItemRedeem','<b>รอบการนำจ่ายรางวัล</b><br><ul\x20style=\x22margin-left:-25px;\x22><li>รายการแลก\x20ตั้งแต่วันที่\x2026\x20ก.ย.\x20–\x207\x20ต.ค.\x2065\x20ท่านจะได้รับของภายในเดือน\x20ธ.ค.\x2065</b></li><li>รายการแลก\x20ตั้งแต่วันที่\x2021\x20พ.ย.\x20–\x202\x20ธ.ค.\x2065\x20ท่านจะได้รับของภายในเดือน\x20ก.พ.\x2066</li><li>รายการแลก\x20ตั้งแต่วันที่\x2020\x20ม.ค.\x2065\x20–\x203\x20ก.พ.\x2066\x20ท่านจะได้รับของภายในเดือน\x20เม.ย.66\x20</li></ul></div>','addClass','6425755lJtArL','\x20Point</div>','doc','<ul\x20style=\x22margin-left:-25px;\x22><li>ทริปที่พนักงานได้รับ\x20จะจัดรวมกับ\x20Signature\x20Trip\x20ของ\x20BA\x20Life\x20(Prudential)</li><li>กรณีไม่สามารถจัด\x20Trip\x20ไป\x20Busan\x20ได้\x20จะเปลี่ยนแปลงประเทศและแจ้งให้ทราบอีกครั้ง\x20และกำหนดการเดินทางจะแจ้งให้ทราบในภายหลัง</li><li>กรณีที่ไม่สามารถจัดทริปเดินทางได้\x20และยังไม่มีค่าใช้จ่ายในการจัดทริปเกิดขึ้น\x20จะจ่ายเป็นเงินรางวัลตามมูลค่าทริป\x2035,000\x20บาทแทน\x20ทั้งนี้หากมีค่าใช้จ่ายเกิดขึ้นแล้วบางส่วน\x20จะจ่ายคืนเป็นเงินรางวัลตามสัดส่วนหลังหักค่าใช้จ่าย</li></ul></div>','retailproject-6f4fc.firebaseapp.com','<div\x20class=\x22progress\x22><div\x20class=\x22bar1\x22\x20style=\x22width:','DisplayNotOpen','#DisplayDoneRewards','<li>ท่าน\x20<font\x20color=\x22#ff0000\x22><u>ไม่สามารถทำการยกเลิก/เปลี่ยนแปลงการแลกของรางวัล\x20เมื่อท่านกดปุ่ม\x20<b>ยืนยันแลกของรางวัล</b>\x20แล้ว</u></font></li></ul>','getItem','155866kTyQvS','EmpGroup','<div\x20class=\x22col-lg-6\x20col-md-2\x20slide\x20text-center\x20boxvdo\x22\x20data-aos=\x22fade-left\x22>','<br>คะแนนที่แลก\x20<font\x20color=\x22#0056ff\x22>','firestore','StockGroup','none','#DisplayTotalPoint','ActivePoint','1608093lRKfFp','653667385625','<div\x20class=\x22boxvdo-border\x20member\x22\x20style=\x22min-height:\x20100px;\x22><div\x20class=\x22boxvdo-img\x22>','btnCheck','style','<div\x20class=\x22col-lg-6\x20col-md-2\x20slide\x20text-center\x20boxvdo\x22\x20data-aos=\x22fade-left\x22\x20style=\x22min-height:\x20100px;\x22>','setItem','#DisplayTotalRedeem','<div\x20class=\x22boxvdo-title\x22><div\x20class=\x22boxvdo-header\x22>',')\x22>ใช้\x20','1:653667385625:web:a5aed08500de80839f0588','EmpName','href','StockRedeem','<table\x20class=\x22table\x20table-bordered\x20table-striped\x20table-responsive-stack\x22\x20style=\x22margin:10px\x20auto;width:95%;\x22>','\x20item','G-9SKTRHHSW9','<div\x20class=\x22boxvdo-line2\x22\x20style=\x22color:#f68b1f;height:16px;\x22>แลกรางวัลเมื่อ\x20:\x20','toFixed','#DisplayRedeemPoint','TotalPointRedeem','NaN','length','Asia/Jakarta','</font></td>','PointRedeem','<p\x20class=\x22percent\x22>','then','376092qdOMCQ','collection','getMonth','TNIStock','<div\x20class=\x22progress\x22><div\x20class=\x22bar\x22\x20style=\x22width:','#mm1','#mm2','TNIRedeemPoint','\x20Point\x20แลก</div>','getMinutes','5890PrgJTT','StockDetail','vdo-mondee.html?gid=','retailproject-6f4fc','#DisplayLastPoint','<div\x20class=\x22boxvdo-line1\x22\x20style=\x22text-align:left;height:auto;\x22>','</div>','<div\x20class=\x22boxvdo-line1\x22>','\x20คะแนน</font><br>','getFullYear','LineName','getHours','<div\x20class=\x22group-remark1\x22><b>คำเตือน\x20:\x20</b><br><br><ul\x20style=\x22margin-left:-25px;\x22><li>Point\x20สำหรับการแลกของรางวัลของท่าน\x20<font\x20color=\x22#ff0000\x22><u>จะลดลง</u></font>เมื่อท่านทำรายการแลกของรางวัลตามรายการที่ท่านเลือก</li>','round','</tr>','removeClass','2340445IxfSEi','asc','en-US','<img\x20src=\x22','desc','html','ready','<div\x20class=\x22boxvdo-header\x22\x20style=\x22text-align:left;margin-top:10px;\x22>','test','orderBy','2149244fTwJvT','block','</div></div></div></div>','#mm3','getSeconds','<div\x20class=\x22boxvdo-line2\x22><div\x20class=\x22btn-t0\x22\x20style=\x22font-size:11px;cursor:default;\x22>ใช้\x20','#DisplayShowRewards','StockName','<div\x20class=\x22group-remark\x22><b>หมายเหตุ</b>\x20:<br><br>','\x22\x20class=\x22img-fluid\x22\x20style=\x22border-radius:\x2010px;\x22></div>','DateRedeem','<b>รอบการนำจ่ายรางวัล</b><br><ul\x20style=\x22margin-left:-25px;\x22><li>รายการแลก\x20ตั้งแต่วันที่\x2026\x20ก.ย.\x20–\x207\x20ต.ค.\x2065\x20ท่านจะได้รับของภายในเดือน\x20ธ.ค.\x2065</b></li><li>รายการแลก\x20ตั้งแต่วันที่\x2021\x20พ.ย.\x20–\x202\x20ธ.ค.\x2065\x20ท่านจะได้รับของภายในเดือน\x20ก.พ.\x2066</li><li>รายการแลก\x20ตั้งแต่วันที่\x2020\x20ม.ค.\x2065\x20–\x203\x20ก.พ.\x2066\x20ท่านจะได้รับของภายในเดือน\x20เม.ย.\x2066\x20</li></ul></div>','where','\x20Point','12BsxFmb','<div\x20class=\x22btn-orange\x22\x20style=\x22margin-top:-4px;font-size:\x2014px;\x22>คุณมี\x20','\x22\x20class=\x22img-fluid\x22\x20style=\x22border-radius:\x2010px;\x22>','\x22\x20width=\x22100%\x22>','#ShowRemark','<div\x20class=\x22clr\x22></div><center><div\x20class=\x22btn-leaderboard\x22><div>คะแนนแลกเงินรางวัล</div></div></center>','DisplayShowRewards','RedeemTimeStamp','#DisplayScorePoint','24QYkKuD','%\x22>','now','getDate','<ul\x20style=\x22margin-left:-25px;\x22><li>รอบการแลก\x20ตั้งแต่วันที่\x2026\x20ก.ย.\x20–\x207\x20ต.ค.\x2065\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20พ.ย.\x2065</li><li>รอบการแลก\x20ตั้งแต่วันที่\x2021\x20พ.ย.\x20–\x202\x20ธ.ค.\x2065\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20ม.ค.\x2066</li><li>รอบการแลก\x20ตั้งแต่วันที่\x2020\x20ม.ค.\x2065\x20–\x203\x20ก.พ.\x2066\x20เงินรางวัลจะเข้ารอบเงินเดือน\x20มี.ค.\x2066</li></ul></div>','<br><b>หมายเหตุ\x20</b><br><br>','#DisplayImg','TNIStocklog','</font><br>วันที่นำจ่าย','<font\x20color=\x22#0056ff\x22>','data','21197iFEsIs','EmpID','display','DisplayRedeemRewards','forEach','StatusRedeem','#DisplayStockName','<tr>','DisplayDoneRewards','#DisplayRedeemRewards','id01','StockImg','id02','getElementById','get','<div\x20class=\x22boxvdo-line2\x22><div\x20class=\x22btn-t2\x22\x20style=\x22font-size:11px;\x22\x20onclick=\x22OpenRewards(\x27','add','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','3qapYfI','<div\x20class=\x22group-remark\x22><b>รอบการนำจ่ายรางวัล</b><br><br>'];_0x43be=function(){return _0x3a8efc;};return _0x43be();}function OpenStock(_0xa08b32,_0x4bef73){var _0xe1662d=_0x3b852d;location[_0xe1662d(0x225)]=_0xe1662d(0x241)+_0xa08b32+'';}function ClickMenu(_0x3fd98a){var _0x5c69b1=_0x3b852d;if(_0x3fd98a==0x1)$(_0x5c69b1(0x23a))[_0x5c69b1(0x205)](_0x5c69b1(0x21c)),$(_0x5c69b1(0x23b))[_0x5c69b1(0x24e)](_0x5c69b1(0x21c)),$(_0x5c69b1(0x25c))[_0x5c69b1(0x24e)](_0x5c69b1(0x21c)),document[_0x5c69b1(0x1f7)]('DisplayShowRewards')[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]='block',document['getElementById'](_0x5c69b1(0x20c))['style'][_0x5c69b1(0x1ec)]=_0x5c69b1(0x25a),document[_0x5c69b1(0x1f7)]('DisplayRedeemRewards')[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216),document['getElementById'](_0x5c69b1(0x1f2))['style'][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216);else{if(_0x3fd98a==0x2)$(_0x5c69b1(0x23a))['removeClass']('btnCheck'),$('#mm2')[_0x5c69b1(0x205)](_0x5c69b1(0x21c)),$(_0x5c69b1(0x25c))['removeClass'](_0x5c69b1(0x21c)),document[_0x5c69b1(0x1f7)](_0x5c69b1(0x26d))[_0x5c69b1(0x21d)]['display']=_0x5c69b1(0x216),document[_0x5c69b1(0x1f7)](_0x5c69b1(0x20c))[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216),document[_0x5c69b1(0x1f7)](_0x5c69b1(0x1ed))[_0x5c69b1(0x21d)]['display']='block',document[_0x5c69b1(0x1f7)]('DisplayDoneRewards')['style'][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216),LoadRedeem();else _0x3fd98a==0x3&&($('#mm1')[_0x5c69b1(0x24e)]('btnCheck'),$('#mm2')[_0x5c69b1(0x24e)](_0x5c69b1(0x21c)),$(_0x5c69b1(0x25c))[_0x5c69b1(0x205)](_0x5c69b1(0x21c)),document['getElementById'](_0x5c69b1(0x26d))[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216),document[_0x5c69b1(0x1f7)]('DisplayNotOpen')[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]='none',document['getElementById'](_0x5c69b1(0x1ed))[_0x5c69b1(0x21d)][_0x5c69b1(0x1ec)]=_0x5c69b1(0x216),document[_0x5c69b1(0x1f7)](_0x5c69b1(0x1f2))['style'][_0x5c69b1(0x1ec)]=_0x5c69b1(0x25a),DoneRedeem());}}function ConfirmRedeem(){var _0x205723=_0x3b852d;NewDate();var _0x2fadb9=Math[_0x205723(0x24c)](Date[_0x205723(0x272)]()/0x3e8);dbTNIStocklog[_0x205723(0x1fa)]({'LineID':sessionStorage['getItem']('LineID'),'LineName':sessionStorage[_0x205723(0x20f)](_0x205723(0x249)),'LinePicture':sessionStorage[_0x205723(0x20f)](_0x205723(0x201)),'EmpGroup':sessionStorage[_0x205723(0x20f)](_0x205723(0x211)),'EmpID':sessionStorage[_0x205723(0x20f)](_0x205723(0x1eb)),'EmpName':sessionStorage[_0x205723(0x20f)](_0x205723(0x224)),'StockName':sStockName,'StockImg':sStockImg,'StockDetail':sStockDetail,'ActivePoint':parseFloat(sessionStorage[_0x205723(0x20f)](_0x205723(0x218))),'PointRedeem':parseFloat(PointForRedeem),'LastPoint':parseFloat(sessionStorage[_0x205723(0x20f)](_0x205723(0x218)))-parseFloat(PointForRedeem),'DateRedeem':dateString,'StatusRedeem':0x0,'DateConfirm':'','MemoConfirm':'','RedeemTimeStamp':_0x2fadb9}),dbTNIStock[_0x205723(0x208)](EidStockID)['update']({'StockRedeem':parseFloat(sStockRedeem)+0x1}),parseFloat(sessionStorage[_0x205723(0x20f)]('ActivePoint'))>=parseFloat(PointForRedeem)&&(dbTNIRedeemPoint[_0x205723(0x208)](EidRedeemPoint)['update']({'TotalPointRedeem':parseFloat(sTotalPointRedeem)+parseFloat(PointForRedeem),'TotalItemRedeem':parseFloat(sTotalItemRedeem)+0x1,'DateRedeem':dateString}),CheckRedeemPoint(),sessionStorage[_0x205723(0x21f)](_0x205723(0x218),parseFloat(sessionStorage[_0x205723(0x20f)](_0x205723(0x218)))-parseFloat(PointForRedeem)),$(_0x205723(0x243))['html'](_0x205723(0x268)+addCommas(sessionStorage[_0x205723(0x20f)](_0x205723(0x218)))+_0x205723(0x207)),document[_0x205723(0x1f7)]('DisplayShowRewards')[_0x205723(0x21d)]['display']=_0x205723(0x25a),LoadReward(),document[_0x205723(0x1f7)](_0x205723(0x1f4))['style'][_0x205723(0x1ec)]=_0x205723(0x216),document[_0x205723(0x1f7)](_0x205723(0x1f6))[_0x205723(0x21d)][_0x205723(0x1ec)]=_0x205723(0x25a));}function CloseAll(){var _0x4e6831=_0x3b852d;document[_0x4e6831(0x1f7)](_0x4e6831(0x1f4))[_0x4e6831(0x21d)][_0x4e6831(0x1ec)]=_0x4e6831(0x216),document[_0x4e6831(0x1f7)](_0x4e6831(0x1f6))[_0x4e6831(0x21d)][_0x4e6831(0x1ec)]=_0x4e6831(0x216);}function addCommas(_0x1a8317){var _0x3b0818=_0x3b852d;_0x1a8317+='',x=_0x1a8317['split']('.'),x1=x[0x0],x2=x['length']>0x1?'.'+x[0x1]:'';var _0x37d7e9=/(\d+)(\d{3})/;while(_0x37d7e9[_0x3b0818(0x257)](x1)){x1=x1[_0x3b0818(0x200)](_0x37d7e9,'$1'+','+'$2');}return x1+x2;}function NewDate(){var _0x50853f=_0x3b852d,_0x127e64=new Date(),_0x5b5f5c=_0x127e64[_0x50853f(0x273)]()+'',_0x37da38=_0x127e64[_0x50853f(0x237)]()+0x1+'',_0x18a5c4=_0x127e64[_0x50853f(0x248)]()+'',_0xa8b3c6=_0x127e64[_0x50853f(0x24a)]()+'',_0x100e3f=_0x127e64[_0x50853f(0x23e)]()+'',_0x4baf33=_0x127e64[_0x50853f(0x25d)]()+'',_0x444f4d=_0xa8b3c6>=0xc?'PM':'AM';_0x5b5f5c=checkZero(_0x5b5f5c),_0x37da38=checkZero(_0x37da38),_0x18a5c4=checkZero(_0x18a5c4),_0xa8b3c6=checkZero(_0xa8b3c6),_0x100e3f=checkZero(_0x100e3f),_0x4baf33=checkZero(_0x4baf33),dateString=_0x5b5f5c+'/'+_0x37da38+'/'+_0x18a5c4+'\x20'+_0xa8b3c6+':'+_0x100e3f+':'+_0x4baf33+'\x20'+_0x444f4d;}function checkZero(_0x76f821){var _0x318991=_0x3b852d;return _0x76f821[_0x318991(0x22f)]==0x1&&(_0x76f821='0'+_0x76f821),_0x76f821;}
