function makeVar(id) {
	return document.getElementById(id);
}
	//let addItemBtn = makeVar("addItemBtn");
	let total_amount= makeVar("amount"); 
	let item= makeVar("item");
	let rate = makeVar("rate");
	let quantity = makeVar("quantity");
	let total1= makeVar("totalitem");
	let names=makeVar("name");
	let addresss=makeVar("address");
	let phones=makeVar('phone');
	// let mails=makeVar("email");
	// let gstnos=makeVar("gstno");
	// let bdss=makeVar("bds");
	let modal1 = makeVar("myModal1");
	let btn1 = makeVar("NewUserbtn");
	let span1=document.getElementsByClassName("close1")[0];
	let span2=document.getElementsByClassName("close2")[0];
	
	let modal2 = makeVar("myModal2");
	let btn2 = makeVar("Order");
	let addSell1 = makeVar("addSell");
	let addItemBtn = makeVar("addbtnitem");
	function setLocal(key,value) {
    localStorage.setItem(key,value);
	}
	let orderInventory =[];
	const addSell=(e)=>{
		e.preventDefault();
		if(names.value==""){
			alert("Enter Name");
   		}

		else if(addresss.value==""){
			alert("Enter address");
 		}
		else if(phones.value==""){
			alert("Enter Phone");
  		}
	
		// else if(gstnos.value==""){
		// 	alert("Enter GSTNO.");
		// }
	    // else if(bdss.value==""){
		//    alert("Enter BDS");
   		//  }
   
 		else{
		alert("Successfully Created Seller");
		let name2=document.getElementById("name2").innerHTML=names.value;
		//localStorage.setItem("valuename",name2);
		setLocal("valuename",name2);	
		let address2= document.getElementById("address2").innerHTML=addresss.value;
		setLocal("valueaddrs",address2);
		// let bds2= document.getElementById("bds2").innerHTML=bdss.value;
		// setLocal("textbds",bds2);	
		let phone2 = document.getElementById("phone2").innerHTML=phones.value;
		setLocal("valuephone",phone2);	
		// let gstno2 = document.getElementById("gstno2").innerHTML=gstnos.value;
		// setLocal("textgst",gstno2);
		// let email2= document.getElementById("email2").innerHTML=mails.value;
		// setLocal("valueemail",email2);	
			modal1.style.display="none";

		
		
	names.value=""; 
	addresss.value="";	
	// mails.value="";
	phones.value=""; 
	// gstnos.value="";	
	// bdss.value="";
	}
 }	

 addSell1.onclick=addSell;
	
 	function openNav(){
		makeVar("mySidenav").style.width="300px";
		makeVar("main").style.marginLeft = "0";
	}

	 function closeNav(){
		makeVar("mySidenav").style.width="0";
		makeVar("main").style.marginLeft = "0";
	}

	const getTable =()=>{
		
		}
	let totalamount =0;
	let flag =0;
const  generate_table=(e)=>{
	e.preventDefault();
	console.log(item);
	if (item.value == ""){
		alert("Enter Item");				
	}
	else if (quantity.value == ""){
		alert("Enter Quantity");
	}
	else if (rate.value == ""){
		alert("Enter Rate")	;
	}
	else{
		let tr = document.createElement('tr');
		tr.classList.add("border-bottom");
	 	let td1 = tr.appendChild(document.createElement('td'));
	 	let td2 = tr.appendChild(document.createElement('td'));
	 	let td3 = tr.appendChild(document.createElement('td'));
		let td4 = tr.appendChild(document.createElement('td'));
		let amount  = rate.value * quantity.value;
	 	td4.textContent = amount;
		totalamount =totalamount + amount;
		if(flag == 1 && totalamount >799){
			makeVar("tt").textContent = totalamount - 30; 
			makeVar("taxTable").textContent = totalamount - 30; 

		}else{
			makeVar("tt").textContent = totalamount ; 
			makeVar("taxTable").textContent = totalamount ; 

		}
		if(totalamount < 799 && flag ==0){
			makeVar("delivery").textContent = 30;
			totalamount = totalamount+30;
			flag=1;
		}
		 makeVar("Total").textContent = totalamount;
		 makeVar("amount").textContent = totalamount;
		 console.log(totalamount);
	// 	 let order ={
	// 		item : item.value ,
	// 		quantity : quantity.value,
	// 		rate : rate.value,
	// 		famount : totalamount
	// 	}
	// 	let finalTotal=0;
	// 	for (let i = 0; i < order.length; i++) {
	// 		let finalTotal = order[i].famount;
			
	// 	}
		// document.getElementsByClassName("InvoiceTotal").textContent= totalamount;
	// 	 makeVar("tt").textContent=finalTotal;
	 td1.textContent = item.value;
	 td2.textContent = rate.value;	
	 td3.textContent = quantity.value;
	
	 
	 makeVar("myTable").appendChild(tr);
	 

 	item.value=""; 
	rate.value="";	
	quantity.value="";
	// console.log("myTable");
	}

}
addItemBtn.onclick=generate_table;


function delete_table(){
	let x =makeVar("myTable")
		x.deleteRow(-1);
}

  

btn1.onclick= function(){
    modal1.style.display="block";

}

 
$('#generate1').click(function() {
	var options = {
	};
	var pdf = new jsPDF('p', 'pt', 'a4');
	pdf.addHTML($("#printBill"), 0, 0, options, function() {
	  pdf.save('pageContent.pdf');
	});
  }); 

 


span1.onclick=function(){
    modal1.style.display="none";
} 
window.onclick=function(event1){
    if(event1.target==modal1){
        modal1.style.display="none";
    }
}

// processing vale orders nhi dikh re 