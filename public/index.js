let daily = []
var p = 0
var count;
var starttime2 = 0;
var format = 0;
var timeform = "";
let arr=[];


try {
  const res = await fetch('/send');
  const data =  await res.json()
  arr = data;

} 
catch (e) {
  console.log(e);
}


try {
  const result = await fetch('/sendAllDay')
  const all = await result.json()
  daily=all;


} catch (e) {
  console.log(e)
  
}





function setAllDay(id){

  daily.forEach((element)=>{
    let allday = document.createElement("div");
    let x = document.createElement("p")
    let c = document.createElement("span")
    let y = document.createElement("p")
    let s = document.createElement('a')
    let E = document.createElement('a')
    E.innerHTML = "Edit";
    E.style.marginLeft = "2px"
    E.style.color = "white"
    E.style.backgroundColor = "green"
    E.style.fontSize = "12px"
    E.style.padding = "4px"
    E.setAttribute("href", "/all/" + element._id)
    s.innerHTML = "Delete"
    s.style.color = "white"
    s.style.fontSize = "12px"
    s.style.backgroundColor = "red"
    s.style.marginLeft ="3px"
    s.style.padding = "4px"
    s.setAttribute("href" , "/del/" + element._id)
    x.innerHTML = "ALL DAY-";
    c.innerHTML = element.name; 
    y.innerHTML = element.loc;
    
    


    allday.appendChild(x);
    allday.appendChild(c);
    allday.appendChild(y);
    allday.appendChild(s);
    allday.appendChild(E)
   

    allday.setAttribute("class","inner")
    c.style.color = "green"

    let d = document.getElementById("outer");
    d.appendChild(allday);

  });
}
setAllDay();
function createEvent(eventName, loc, time, endtime , id) {

  settime(time);

  var Container = document.createElement("div");
  Container.classList.add("event");
  count = p.toString()
  Container.id = count
  Container.style.height = cheight(endtime, time);
  var ti = document.createElement('h3');
  ti.innerHTML = starttime2.toString()
  var name = document.createElement('p');
  name.innerHTML = eventName
  var location = document.createElement('span');
  location.innerHTML = loc
  location.style.color = "green"
  var del = document.createElement('a')
  del.style.color = "white"
  del.style.fontSize = "12px"
  del.style.backgroundColor = "red"
  del.style.marginBottom ="3px"
  del.style.padding = "4px"
  del.innerHTML = "Delete"
 del.setAttribute("href" , "/delete/" + id)

 var edit = document.createElement('a')
//  edit.style.marginTop="10px"
edit.style.color = "white"
edit.style.backgroundColor = "green"
edit.style.fontSize = "12px"
edit.style.padding = "4px"
 edit.innerHTML = "Edit"
 edit.setAttribute("href" ,"/edit/" + id)

  Container.appendChild(ti);
  Container.appendChild(name);
  Container.appendChild(location);
  Container.appendChild(del)
  Container.appendChild(edit)
  var element = document.getElementById(time);
  element.appendChild(Container);
  p++;
  return Container;
}

function cheight(a, b) {

  var c = (((a - b) * 1.9) * 2).toString() + "rem"
  return c;
}

function eventOverlap(evt1, evt2) {
  const domRect1 = evt1.getBoundingClientRect();
  const domRect2 = evt2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}



var elementArray = [];

arr.forEach(element => {
  var m = createEvent(element.Ename, element.loc, element.sTime, element.eTime , element._id)
  elementArray.push(m);


});

for (let i = 0; i < elementArray.length; i++) {
  for (let j = i + 1; j < elementArray.length; j++) {
    if (eventOverlap(elementArray[i], elementArray[j])) {
      var s = elementArray[i].parentElement;
      var height = ((s.id - arr[j].sTime) * -1.9 * 2).toString() + "rem";
      s.appendChild(elementArray[j]);
      elementArray[j].style.marginTop = height;

    }
  }

}
function settime(time) {
  time = time.toString();
  format = time.split('.');
  console.log(format)
  if (format[0] > 12) {
    starttime2 = format[0] - 12;
    timeform = " PM-";
  }
  else {
    starttime2 = format[0];
    timeform = " AM-";
  }
  if (format[1]) {
    starttime2 = starttime2.toString() + ":30" + timeform;
  } else {
    starttime2 = starttime2.toString() + ":00" + timeform;
  }
}






