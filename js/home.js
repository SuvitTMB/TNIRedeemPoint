

$(document).ready(function () {
  if(sessionStorage.getItem("EmpLevel")==null) { location.href = "index.html"; }
  $("#DateUpload").html(sessionStorage.getItem("TNIdate"));  
  //var str = "";
  //alert(sessionStorage.getItem("EmpID"));
  //alert("Level = "+sessionStorage.getItem("EmpLevel"));

  Connect_DB();
  //CheckTNIdate();
  CheckRedeemPoint();
  CheckData();
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  //dbProfile = firebase.firestore().collection("CheckProfile");
  dbTNIdate = firebase.firestore().collection("TNIdate");
  dbTNImember = firebase.firestore().collection("TNImember");
  dbTNIRedeemPoint = firebase.firestore().collection("TNIRedeemPoint");
}


/*
function CheckTNIdate() {
  dbTNIdate.limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sessionStorage.setItem("TNIdate", doc.data().DateUpload);
      $("#DateUpload").html(doc.data().DateUpload);  
    });
  });
}
*/

function CheckRedeemPoint() {
  dbTNIRedeemPoint.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sessionStorage.setItem("TotalPointRedeem", doc.data().TotalPointRedeem);
      sessionStorage.setItem("TotalItemRedeem", doc.data().TotalItemRedeem);
      //alert("TotalPointRedeem="+doc.data().TotalPointRedeem);
    });
  });
}




var sActivePoint = 0;
var EidTNImember = "";
function CheckData() {
  var str = "";
  console.log(sessionStorage.getItem("LineID"));
  dbTNImember.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //alert(doc.data().LastPoint);
      //EidTNImember = doc.id;
      //sessionStorage.setItem("EmpID", doc.data().EmpID);
      sessionStorage.setItem("EmpName", doc.data().EmpName);
      sessionStorage.setItem("EmpBranch", doc.data().EmpBranch);
      sessionStorage.setItem("EmpZone", doc.data().EmpZone);
      sessionStorage.setItem("EmpRH", doc.data().EmpRH);
      sessionStorage.setItem("EmpGroup", doc.data().EmpGroup);
      sessionStorage.setItem("EmpPoint", doc.data().EmpPoint);
      sessionStorage.setItem("Ranking", doc.data().Ranking);
      sessionStorage.setItem("LastPoint", doc.data().LastPoint);
      sActivePoint = parseFloat(doc.data().LastPoint)-parseFloat(sessionStorage.getItem("TotalPointRedeem"));
      sessionStorage.setItem("ActivePoint", sActivePoint);

      str += '<center>';
      str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" style="margin:-70px auto 20px auto;"></div>';
      str += '<div style="color:#002d63; font-size: 14px; font-weight: 600;"><center>'+ sessionStorage.getItem("EmpName")+'</div>';
      str += '<div style="color:#0056ff; font-size: 12px;padding:2px;font-weight: 600;line-height: 1.3;margin-bottom: 10px;">'+ sessionStorage.getItem("EmpBranch")+'<br>'+ sessionStorage.getItem("EmpZone")+', '+ sessionStorage.getItem("EmpRH")+'</div>';
      str += '<div style="font-size: 12px; color:#f68b1f; margin:25px auto 5px auto;font-weight: 600;">อันดับ และผลคะแนนล่าสุดของคุณ<br><font color="#002d63"><b>'+ sessionStorage.getItem("TNIdate")+'</b></font></div>';
      str += '<div class="btn-orange">อันดับคุณ<br>'+ addCommas(sessionStorage.getItem("Ranking"))+'</div>';
      str += '<div class="btn-blue">ผลงานของคุณ<br>'+ addCommas(sessionStorage.getItem("EmpPoint"))+' คะแนน</div>';
      str += '<div class="clr"></div>';
      str += '<div style="font-size: 12px; color:#f68b1f; margin:25px auto 5px auto;font-weight: 600;">Point ที่คุณสามารถนำไปแลกเป็นของรางวัล<br>ตามความต้องการของคุณได้</div>';
      str += '<div class="btn-black" style="margin-top:15px;" onclick="GotoRewards()">';
      str += '<div>Point สำหรับแลกรางวัล</div>';
      str += '<div style="font-size: 13px; font-weight: 600;">'+ addCommas(sessionStorage.getItem("ActivePoint"))+' Point</div></div>';
      str += '<div style="color:#888888; font-weight: 12px;margin:10px auto;">คลิกเพื่อไปแลกรางวัลกันเลย</div>';
      str += '<div class="clr" style="height: 20px;"></div>';
      str += '</center>';

/*
      str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile"></div>';
      str += '<div class="clr"></div>';
      str += '<div style="margin-top:15px;"><div class="txtpoint-1">ชื่อ-สกุล</div><div class="txtpoint-2">'+ sessionStorage.getItem("EmpName")+'</div></div>';
      str += '<div class="clr"></div>';
      str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
      str += '<div>'+ sessionStorage.getItem("EmpName")+'</div>';
      str += '<div>'+ sessionStorage.getItem("EmpBranch")+'</div>';
      str += '<div>สำนักงานเขต : '+ sessionStorage.getItem("EmpZone")+'</div>';
      str += '<div>สำนักงานภาค : '+ sessionStorage.getItem("EmpRH")+'</div>';
      //str += '';
      //str += '';
*/
      $("#MyProfile").html(str);  
    });
  });
}

/*
str += '<center><div><img src="./img/test.jpg" class="add-profile"  style="margin:-70px auto 20px auto;"></div>';
str += '<div style="color:#002d63; font-size: 14px; font-weight: 600;"><center>'+ sessionStorage.getItem("EmpName")+'</div>';
str += '<div style="color:#0056ff; font-size: 12px;padding:2px;font-weight: 600;line-height: 1.3;margin-bottom: 10px;">'+ sessionStorage.getItem("EmpBranch")+'<br>Zone บางนา RH3</div>';
str += '<div class="btn-t1" style="font-weight: 600;border-radius: 10px;">ผลงานของคุณ<br>4,089 Point</div>';
str += '<div class="btn-t2" style="font-weight: 600;border-radius: 10px;">Ranking<br>5</div><div ic="clr"></div>';
str += '<div class="btn-t3" style="font-weight: 600;border-radius: 10px;margin-top:40px;padding:5px 48px;">Point สำหรับแลกรางวัล<br>4,089 Point</div>';
str += '<div style="color:#ff0000; font-weight: 12px;margin:10px auto;">คลิกเพื่อไปแลกรางวัลกันเลย</div>';
str += '<div ic="clr" style="height: 50px;"></div></center>';
*/



var sCheckLevel = 0;
function CheckTNIapprove() {
    var str = "";

    dbTNImember.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
    .limit(1)
    .get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        sCheckLevel = doc.data().EmpLevel;
        sessionStorage.setItem("EmpLevel", doc.data().EmpLevel);
        location.href = 'home.html';
      });
    if(sCheckLevel==0) {
       WaitingPage();
    }
    });



}


function OpenForm() {
  if(CheckFoundData==1) {
    document.getElementById('myRegister').style.display='none';
    document.getElementById('myTimer').style.display='block';
  } else {
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
  }
}



function EditData() {
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
}


function WaitingPage() {
  var str = "";
  str +='<center><div><img src="./img/timer.gif" width="250px;"></div>';
  str +='<div style="margin-top:20px;"><div class="text-waiting">เรียน <font color="#0056ff"><b>คุณ'+sessionStorage.getItem("EmpName")+'</b></font><br>';
  str +='<br><b><font color="#ff0000">คุณไม่ได้รับสิทธิ์ในการเข้าใช้งานเว็บไซต์นี้</font></b></div>';
  //str +='<div class="btn-t1" onclick="EditData()">คลิกเพื่อตรวจสอบข้อมูล</div>';
  str +='</div></center>';
  $("#MyWating").html(str);  
}





function ClickSaveProfile() {
  var sCheckBottom = 0;
  //alert($("input[type=checkbox][id=cb1]:checked").val());
  stxtEmpID = document.getElementById("txtEmpID").value;
  stxtEmpName = document.getElementById("txtEmpName").value;
  stxtEmpPhone = document.getElementById("txtEmpPhone").value;
  stxtEmpGroup = document.getElementById("txtEmpGroup").value;
  /*
  scb1 = $("input[type=checkbox][name=cb1]:checked").val();
  scb2 = $("input[type=checkbox][name=cb2]:checked").val();
  scb3 = $("input[type=checkbox][name=cb3]:checked").val();
  if(scb1 !== null && scb1 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb2 !== null && scb2 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb3 !== null && scb3 !== undefined) { sCheckBottom = sCheckBottom+1; }
  alert(document.getElementById("txtEmpID").value);
  */
  if(stxtEmpID !== null && stxtEmpID !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpName !== null && stxtEmpName !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpPhone !== null && stxtEmpPhone !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpGroup !== null && stxtEmpGroup !== '') { sCheckBottom = sCheckBottom+1; }

  if(sCheckBottom==4) {
    //alert(stxtEmpID+"\n"+stxtEmpName+"\n"+stxtEmpPhone+"\n"+stxtEmpGroup);
    SaveData();
  }
}




function SaveData() {
  NewDate();
  if(EidCYCProfile=="") {
    dbProfile.add({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      CYCStatus : 0,
      EmpID : document.getElementById("txtEmpID").value,
      EmpName : document.getElementById("txtEmpName").value,
      EmpPhone : document.getElementById("txtEmpPhone").value,
      EmpGroup : document.getElementById("txtEmpGroup").value,
      DateRegister : dateString
    });
  } else {
    dbProfile.doc(EidCYCProfile).update({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      EmpID : document.getElementById("txtEmpID").value,
      EmpName : document.getElementById("txtEmpName").value,
      EmpPhone : document.getElementById("txtEmpPhone").value,
      EmpGroup : document.getElementById("txtEmpGroup").value,
      DateRegister : dateString
    });
  }
  CheckData();
  document.getElementById('myRegister').style.display='none';
  document.getElementById('myTimer').style.display='block';
}


function GotoRewards() {
  location.href = "rewards.html";
}



function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}


function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
