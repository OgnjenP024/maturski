function l_to_c(unesenText) {

	unesenText = unesenText.replace(/lj/g,'љ');
	unesenText = unesenText.replace(/Lj/g,'Љ');
	unesenText = unesenText.replace(/LJ/g,'Љ');
	unesenText = unesenText.replace(/nj/g,'њ');
	unesenText = unesenText.replace(/Nj/g,'Њ');
	unesenText = unesenText.replace(/NJ/g,'Њ');
	unesenText = unesenText.replace(/dž/g,'џ');
	unesenText = unesenText.replace(/Dž/g,'Џ');
	unesenText = unesenText.replace(/DŽ/g,'Џ');
	unesenText = unesenText.replace(/a/g,'а');
	unesenText = unesenText.replace(/b/g,'б');
	unesenText = unesenText.replace(/c/g,'ц');
	unesenText = unesenText.replace(/č/g,'ч');
	unesenText = unesenText.replace(/ć/g,'ћ');
	unesenText = unesenText.replace(/d/g,'д');
	unesenText = unesenText.replace(/đ/g,'ђ');
	unesenText = unesenText.replace(/e/g,'е');
	unesenText = unesenText.replace(/f/g,'ф');
	unesenText = unesenText.replace(/g/g,'г');
	unesenText = unesenText.replace(/h/g,'х');
	unesenText = unesenText.replace(/i/g,'и');
	unesenText = unesenText.replace(/j/g,'ј');
	unesenText = unesenText.replace(/k/g,'к');
	unesenText = unesenText.replace(/l/g,'л');
	unesenText = unesenText.replace(/m/g,'м');
	unesenText = unesenText.replace(/n/g,'н');
	unesenText = unesenText.replace(/o/g,'о');
	unesenText = unesenText.replace(/p/g,'п');
	unesenText = unesenText.replace(/r/g,'р');
	unesenText = unesenText.replace(/s/g,'с');
	unesenText = unesenText.replace(/š/g,'ш');
	unesenText = unesenText.replace(/t/g,'т');
	unesenText = unesenText.replace(/u/g,'у');
	unesenText = unesenText.replace(/v/g,'в');
	unesenText = unesenText.replace(/z/g,'з');
	unesenText = unesenText.replace(/ž/g,'ж');
	unesenText = unesenText.replace(/A/g,'А');
	unesenText = unesenText.replace(/B/g,'Б');
	unesenText = unesenText.replace(/C/g,'Ц');
	unesenText = unesenText.replace(/Č/g,'Ч');
	unesenText = unesenText.replace(/Ć/g,'Ћ');
	unesenText = unesenText.replace(/D/g,'Д');
	unesenText = unesenText.replace(/Đ/g,'Ђ');
	unesenText = unesenText.replace(/E/g,'Е');
	unesenText = unesenText.replace(/F/g,'Ф');
	unesenText = unesenText.replace(/G/g,'Г');
	unesenText = unesenText.replace(/H/g,'Х');
	unesenText = unesenText.replace(/I/g,'И');
	unesenText = unesenText.replace(/J/g,'Ј');
	unesenText = unesenText.replace(/K/g,'К');
	unesenText = unesenText.replace(/L/g,'Л');
	unesenText = unesenText.replace(/M/g,'М');
	unesenText = unesenText.replace(/N/g,'Н');
	unesenText = unesenText.replace(/O/g,'О');
	unesenText = unesenText.replace(/P/g,'П');
	unesenText = unesenText.replace(/R/g,'Р');
	unesenText = unesenText.replace(/S/g,'С');
	unesenText = unesenText.replace(/Š/g,'Ш');
	unesenText = unesenText.replace(/T/g,'Т');
	unesenText = unesenText.replace(/U/g,'У');
	unesenText = unesenText.replace(/V/g,'В');
	unesenText = unesenText.replace(/Z/g,'З');
	unesenText = unesenText.replace(/Ž/g,'Ж');

	return unesenText;
}
function c_to_l(unesenText2) {
	unesenText2 = unesenText2.replace(/љ/g,'lj');
	unesenText2 = unesenText2.replace(/Љ/g,'Lj');
	unesenText2 = unesenText2.replace(/њ/g,'nj');
	unesenText2 = unesenText2.replace(/Њ/g,'Nj');                                          
	unesenText2 = unesenText2.replace(/џ/g,'dž');
	unesenText2 = unesenText2.replace(/Џ/g,'Dž');
	unesenText2 = unesenText2.replace(/а/g,'a');
	unesenText2 = unesenText2.replace(/б/g,'b');
	unesenText2 = unesenText2.replace(/ц/g,'c');
	unesenText2 = unesenText2.replace(/ч/g,'č');
	unesenText2 = unesenText2.replace(/ћ/g,'ć');
	unesenText2 = unesenText2.replace(/д/g,'d');
	unesenText2 = unesenText2.replace(/ђ/g,'đ');
	unesenText2 = unesenText2.replace(/е/g,'e');
	unesenText2 = unesenText2.replace(/ф/g,'f');
	unesenText2 = unesenText2.replace(/г/g,'g');
	unesenText2 = unesenText2.replace(/х/g,'h');
	unesenText2 = unesenText2.replace(/и/g,'i');
	unesenText2 = unesenText2.replace(/ј/g,'j');
	unesenText2 = unesenText2.replace(/к/g,'k');
	unesenText2 = unesenText2.replace(/л/g,'l');
	unesenText2 = unesenText2.replace(/м/g,'m');
	unesenText2 = unesenText2.replace(/н/g,'n');
	unesenText2 = unesenText2.replace(/о/g,'o');
	unesenText2 = unesenText2.replace(/п/g,'p');
	unesenText2 = unesenText2.replace(/р/g,'r');
	unesenText2 = unesenText2.replace(/с/g,'s');
	unesenText2 = unesenText2.replace(/ш/g,'š');
	unesenText2 = unesenText2.replace(/т/g,'t');
	unesenText2 = unesenText2.replace(/у/g,'u');
	unesenText2 = unesenText2.replace(/в/g,'v');
	unesenText2 = unesenText2.replace(/з/g,'z');
	unesenText2 = unesenText2.replace(/ж/g,'ž');
                                                      
	unesenText2 = unesenText2.replace(/А/g,'A');
	unesenText2 = unesenText2.replace(/Б/g,'B');
	unesenText2 = unesenText2.replace(/Ц/g,'C');
	unesenText2 = unesenText2.replace(/Ч/g,'Č');
	unesenText2 = unesenText2.replace(/Ћ/g,'Ć');
	unesenText2 = unesenText2.replace(/Д/g,'D');
	unesenText2 = unesenText2.replace(/Ђ/g,'Đ');
	unesenText2 = unesenText2.replace(/Е/g,'E');
	unesenText2 = unesenText2.replace(/Ф/g,'F');
	unesenText2 = unesenText2.replace(/Г/g,'G');
	unesenText2 = unesenText2.replace(/Х/g,'H');
	unesenText2 = unesenText2.replace(/И/g,'I');
	unesenText2 = unesenText2.replace(/Ј/g,'J');
	unesenText2 = unesenText2.replace(/К/g,'K');
	unesenText2 = unesenText2.replace(/Л/g,'L');
	unesenText2 = unesenText2.replace(/М/g,'M');
	unesenText2 = unesenText2.replace(/Н/g,'N');
	unesenText2 = unesenText2.replace(/О/g,'O');
	unesenText2 = unesenText2.replace(/П/g,'P');
	unesenText2 = unesenText2.replace(/Р/g,'R');
	unesenText2 = unesenText2.replace(/С/g,'S');
	unesenText2 = unesenText2.replace(/Ш/g,'Š');
	unesenText2 = unesenText2.replace(/Т/g,'T');
	unesenText2 = unesenText2.replace(/У/g,'U');
	unesenText2 = unesenText2.replace(/В/g,'V');
	unesenText2 = unesenText2.replace(/З/g,'Z');
	unesenText2 = unesenText2.replace(/Ж/g,'Ž');

	return unesenText2;
}
function cirulaFunc(){
	var textarea = document.getElementById('cir').value;
	document.getElementById('lat').value=c_to_l(textarea);
}
function latucFunc(){
	var textarea = document.getElementById('lat').value;
	document.getElementById('cir').value=l_to_c(textarea);
}
function check(){
	if(document.getElementById('user').value=='user' && document.getElementById('pass').value=='pass')
	{
		
		document.getElementById('main').setAttribute("style", "visibility:visible")
		document.getElementById('prijava').setAttribute("style", "visibility:hidden")
	}
}

